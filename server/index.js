
const express = require("express");
const app = express()
const cors = require("cors")
const https = require("https");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { mkdirSync, openSync, appendFileSync, readdirSync,
    readFileSync, unlinkSync, closeSync, rmdirSync } = require("fs");
const { allowedNodeEnvironmentFlags } = require("process");

const certPath = "/etc/letsencrypt/live/souzatreinamentosst.com.br/cert.pem"
const keyPath = "/etc/letsencrypt/live/souzatreinamentosst.com.br/privkey.pem"

const options = {
    cert: readFileSync(certPath),
    key: readFileSync(keyPath)
}

const httpsPort = 4000
https.createServer(options, app).listen(httpsPort, _ => console.log(`Server rodando na porta ${httpsPort}`));

app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())
app.use(express.static(`${__dirname}/treinamentos`));
app.use(express.static(`${__dirname}/relatorios`));

const DB = require("./STDB").models;

async function searchEmail(email) {
    let cond = "notFound"
    for (let modelColumn of [
        ["Admins", "admin_email"],
        ["Companies", "company_email"],
        ["Users", "user_email"]
    ]) {
        if (await DB[modelColumn[0]].findOne({ where: { [modelColumn[1]]: email } })) {
            cond = "alreadyRegistred"
        }
    }
    return cond;
}

function valuesVerification(values, expValues) {
    //Verifica se todas as chaves esperadas estão na variável values
    for (let expValue of expValues) {
        if (!Object.keys(values).includes(expValue)) {
            return false
        }
    }

    //Verifica se há vazios
    for (let value of Object.values(values)) {
        if (!(!!value) || value.length > 255) {
            return false
        }
    }

    return true;

}

app.post("/loginUser", async (req, res) => {
    let values = req.body.values;
    let DBColumns = ["email", "password"];

    let cond = { "authenticated": false }
    if (valuesVerification(values, DBColumns)) {
        let admin = await DB.Admins.findOne({
            where: {
                admin_email: values.email
            }
        });
        if (admin) {
            if (admin.dataValues.admin_password === values.password) {
                cond = { "authenticated": true, "permission": "admin", "name": admin.dataValues.admin_name, "id": admin.dataValues.admin_id }
            }
        } else {
            let company = await DB.Companies.findOne({
                where: {
                    company_email: values.email
                }
            });
            if (company) {
                if (company.dataValues.company_password === values.password) {
                    cond = { "authenticated": true, "permission": "company", "name": company.dataValues.company_name, "id": company.dataValues.company_id }
                }
            } else {
                let user = await DB.Users.findOne({
                    where: {
                        user_email: values.email
                    }
                });
                if (user) {
                    if (user.dataValues.user_password === values.password) {
                        cond = { "authenticated": true, "permission": "user", "name": user.dataValues.user_name, "id": user.dataValues.user_id }
                    }
                }
            }
        }
    }
    res.send(cond)
});

app.post("/registerAdmin", async (req, res) => {
    let values = req.body.values;
    console.log(values)
    let DBColumns = ["name", "email", "password"];
    if (valuesVerification(values, DBColumns)) {
        if (await searchEmail(values.email) === "notFound") {
            await DB.Admins.create({
                admin_name: values.name,
                admin_email: values.email,
                admin_password: values.password
            })

            res.send({ "gotRegistred": true })
        } else {
            res.send({ "gotRegistred": false, "reason": "alreadyRegistred" })
        }
    } else {
        res.send({ "gotRegistred": false, "reason": "invalidValues" })
    }
});

app.post("/registerCompany", async (req, res) => {
    let values = req.body.values
    let DBColumns = ["name", "email", "cnpj", "telephone", "contact", "password"]
    if (valuesVerification(values, DBColumns)) {
        if (await searchEmail(values.email) === "notFound") {
            let company = await DB.Companies.create({
                company_name: values.name,
                company_email: values.email,
                company_register: values.cnpj,
                company_telephone: values.telephone,
                company_contact: values.contact,
                company_password: values.password
            })

            for (let course of values.selectedCourses) {
                await DB.CompaniesRegistrations.create({
                    company_id: company.dataValues.company_id,
                    course_id: course.value
                })
            }

            res.send({ "gotRegistred": true })
        } else {
            res.send({ "gotRegistred": false, "reason": "alreadyRegistred" })
        }
    } else {
        res.send({ "gotRegistred": false, "reason": "invalidValues" })
    }
});

app.post("/registerUser", async (req, res) => {
    let values = req.body.values
    let DBColumns = ["name", "email", "cpf", "telephone", "companyId", "password"]

    if (valuesVerification(values, DBColumns)) {
        if (await searchEmail(values.email) === "notFound") {
            let user = await DB.Users.create({
                user_name: values.name,
                user_email: values.email,
                user_register: values.cpf,
                user_telephone: values.telephone,
                user_company_id: values.companyId,
                user_password: values.password
            });

            for (let course of values.selectedCourses) {
                await DB.UsersRegistrations.create({
                    course_id: course.value,
                    user_id: user.dataValues.user_id,
                    company_id: values.companyId
                })
            }

            res.send({ "gotRegistred": true })
        } else {
            res.send({ "gotRegistred": false, "reason": "alreadyRegistred" })
        }
    } else {
        res.send({ "gotRegistred": false, "reason": "invalidValues" })
    }
});

app.get("/getUsers/:userType", async (req, res) => {
    let userType = req.params.userType;

    let users = await DB[userType].findAll();

    res.send(users);
});

app.get("/getUsersCompany/:companyEmail", async (req, res) => {
    let companyEmail = req.params.companyEmail;

    let company = await DB.Companies.findOne({
        where: {
            company_email: companyEmail
        }
    })
    company = company.dataValues;

    let companyId = company.company_id;

    let usersCompany = await DB.Users.findAll({
        where: {
            user_company_id: companyId
        }
    })
    usersCompany.map(userCompany => {
        return userCompany.dataValues
    })

    res.send(usersCompany)

});

app.get("/searchUser/:userType/:register", async (req, res) => {
    const userType = req.params.userType;
    const register = req.params.register;

    const user = await DB[userType].findOne({
        where: (userType === "Users" ? { user_register: register } : { company_register: register })
    })

    if (user) {
        res.send(user)
    } else {
        res.send("User was not found")
    }

});

app.post("/removeUser", async (req, res) => {
    let type = req.body.type;
    let typeId = (
        type === "Admins" ? "admin_id" : (
            type === "Companies" ? "company_id" : (
                type === "Users" ? "user_id" : ""
            )
        )
    )
    let id = req.body.id;

    DB[type].destroy({
        where: {
            [typeId]: id
        }
    })
});

app.post("/editUser", async (req, res) => {
    const type = req.body.type;
    const typeId = (
        type === "Admins" ? "admin_id" : (
            type === "Companies" ? "company_id" : (
                type === "Users" ? "user_id" : ""
            )
        )
    )
    const id = req.body.id;
    const userInfo = req.body.userInfo;
    const selectedCourses = req.body.selected

    DB[type].update(userInfo, {
        where: {
            [typeId]: id
        }
    })

    if (type === "Users") {

        const selectedCoursesId = selectedCourses.map(course => (course.value));
        const coursesRegistrations = await DB.UsersRegistrations.findAll({
            where: {
                user_id: id
            }
        });
        const registrationsId = coursesRegistrations.map(course => (course.dataValues.course_id));
        const user = await DB.Users.findOne({
            where: {
                user_id: id
            }
        })

        for (let courseId of registrationsId) {
            if (!selectedCoursesId.includes(courseId)) {
                DB.UsersRegistrations.destroy({
                    where: {
                        user_id: id,
                        course_id: courseId
                    }
                })
            }
        }

        for (let courseId of selectedCoursesId) {
            if (!registrationsId.includes(courseId)) {
                DB.UsersRegistrations.create({
                    course_id: courseId,
                    user_id: id,
                    company_id: user.dataValues.user_company_id
                });
            }
        }

    }

});

app.post("/createCourse", async (req, res) => {

    let courseName = req.body.courseName.replace(/[ ]/g, "_").toLowerCase()

    if (!readdirSync(`${__dirname}/treinamentos`).includes(courseName)) {

        let coursePath = `${__dirname}/treinamentos/${courseName}`
        mkdirSync(coursePath)

        req.files.courseFile.mv(coursePath + "/1." + req.files.courseFile.name)
        let fileDescriptor = openSync(coursePath + "/2." + courseName + ".txt", "w", "777");
        appendFileSync(coursePath + "/2." + courseName + ".txt", req.body.courseDescrit);
        closeSync(fileDescriptor);

        DB.Courses.create({
            course_title: req.body.courseName,
            content_path: coursePath,
            course_hours: (req.body.hoursCourse === "" ? 1 : req.body.hoursCourse),
            registrations: 0
        });

        let questionsFile = openSync(coursePath + "/3." + courseName + ".json", "w", "777");
        appendFileSync(coursePath + "/3." + courseName + ".json", req.body.examQuestion);
        closeSync(questionsFile);

        let certificateFile = openSync(coursePath + "/4." + courseName + ".json", "w", "777");
        appendFileSync(certificateFile, req.body.certficateInformation);
        closeSync(certificateFile)

        res.send({ registeredCourse: true })

    } else {
        res.send({ registeredCourse: false, reason: "Already registred" })
    }

});

app.get("/Courses/:userType/:userId", async (req, res) => {
    const userType = req.params.userType;
    const userId = req.params.userId
    if (userType === "admin") {

        let courses = await DB.Courses.findAll();

        courses.map(course => {
            course.dataValues.content = readFileSync(course.dataValues.content_path + "/2." + course.dataValues.course_title.replace(/[ ]/g, "_").toLowerCase() + ".txt", "utf8");
        })

        res.send(courses)
    } else if (userType === "company") {
        let courses = []

        for (let companyRegister of await DB.CompaniesRegistrations.findAll({ where: { company_id: userId } })) {
            let course = await DB.Courses.findOne({ where: { course_id: companyRegister.dataValues.course_id } });
            course.dataValues.content = readFileSync(course.dataValues.content_path + "/2." + course.dataValues.course_title.replace(/[ ]/g, "_").toLowerCase() + ".txt", "utf8");
            courses.push(course)
        }
        res.send(courses)

    } else if (userType === "usualUser") {

        let courses = [];

        for (let userRegister of await DB.UsersRegistrations.findAll({ where: { user_id: userId, status: "incompleto" } })) {
            let course = await DB.Courses.findOne({ where: { course_id: userRegister.dataValues.course_id } });
            course.dataValues.content = readFileSync(course.dataValues.content_path + "/2." + course.dataValues.course_title.replace(/[ ]/g, "_").toLowerCase() + ".txt", "utf8");
            courses.push(course)
        }

        res.send(courses)
    }
});

app.get("/getCourse/:courseId", async (req, res) => {
    let courseId = req.params.courseId;

    let course = await DB.Courses.findByPk(courseId);

    let courseDir = course.dataValues.content_path;
    courseDir = courseDir.split("/")[(courseDir.split("/").length - 1)];

    let coursePdf = readdirSync(course.dataValues.content_path)[0];
    res.send({ "courseDir": courseDir, "coursePdf": coursePdf })

});

app.get("/getCourseExam/:courseId", async (req, res) => {
    let course = await DB.Courses.findByPk(req.params.courseId);
    course = course.dataValues
    res.send(readFileSync(course.content_path + "/" + readdirSync(course.content_path)[2], "utf-8"))
})

app.delete("/deleteCourse/:courseId", async (req, res) => {
    let course = await DB.Courses.findOne({
        where: {
            course_id: req.params.courseId
        }
    })

    let courseDir = course.content_path
    for (let obj of readdirSync(courseDir)) {
        unlinkSync(courseDir + "/" + obj)
    }
    rmdirSync(courseDir)

    await DB.UsersRegistrations.destroy({
        where: {
            course_id: req.params.courseId
        }
    })

    await DB.CompaniesRegistrations.destroy({
        where: {
            course_id: req.params.courseId
        }
    })

    await DB.Courses.destroy({
        where: {
            course_id: req.params.courseId
        }
    })

    res.sendStatus(200)

});

app.get("/getReports", async (req, res) => {
    const usersRegistrations = await DB.UsersRegistrations.findAll();
    const reportName = `relatorio_usuarios_${(readdirSync("./relatorios").length + 1)}.csv`
    const report = openSync(`./relatorios/${reportName}`, "w", "777");
    appendFileSync(report, "nome_empresa;responsável_empresa;cnpj_empresa;telefone_empresa;curso;status;nome_usuário;cpf_usuário;telefone_usuário\r\n");

    for (let registration of usersRegistrations) {
        let company = await DB.Companies.findByPk(registration.dataValues.company_id);
        company = company.dataValues;
        let course = await DB.Courses.findByPk(registration.dataValues.course_id);
        course = course.dataValues;
        let userInfo = await DB.Users.findByPk(registration.dataValues.user_id);
        userInfo = userInfo.dataValues;

        appendFileSync(
            report,
            company.company_name + ";" +
            company.company_contact + ";" +
            company.company_register + ";" +
            company.company_telephone + ";" +
            course.course_title + ";" +
            registration.dataValues.status + ";" +
            userInfo.user_name + ";" +
            userInfo.user_register + ";" +
            userInfo.user_telephone + "\r\n"
        );
    }

    res.send({ "reportPath": `/${reportName}` })
});

app.post("/changeStatus", async (req, res) => {
    const status = req.body.status;
    const course_id = req.body.courseId;
    const user_id = req.body.user_id;

    if (status === "aprovado") {
        DB.UsersRegistrations.update({ status: status }, {
            where: {
                course_id: course_id,
                user_id: user_id
            }
        })
    } else {
        DB.UsersRegistrations.update({ status: status }, {
            where: {
                course_id: course_id,
                user_id: user_id
            }
        })
    }
});

app.get("/getCompleteCourses/:userId", async (req, res) => {
    const userId = req.params.userId;
    const userInfo = await DB.Users.findByPk( userId );
    const approveRegistrations = await DB.UsersRegistrations.findAll({ where: { user_id: userId, status: "aprovado" } });
    for (let registrationN in approveRegistrations) {
        const course = await DB.Courses.findOne({ where: { course_id: approveRegistrations[registrationN].dataValues.course_id } })
        const courseContentPath = course.dataValues.content_path;
        approveRegistrations[registrationN].dataValues.certificateInfo = readFileSync(courseContentPath + "/" + readdirSync(courseContentPath)[3], "utf-8")
        console.log(readFileSync(courseContentPath + "/" + readdirSync(courseContentPath)[3], "utf-8"))
        approveRegistrations[registrationN].dataValues.courseInformation = course.dataValues;
        approveRegistrations[registrationN].dataValues.userInformation = userInfo.dataValues;
    }
    console.log(approveRegistrations)
    res.send(approveRegistrations)
});
