
const express = require("express");
const app = express()
const cors = require("cors")
const https = require("https");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { mkdirSync, openSync, appendFileSync, readdirSync,
    readFileSync, unlinkSync, closeSync, rmdirSync } = require("fs");

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
console.log("Arquivos disponiveis")

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
                cond = { "authenticated": true, "permission": "admin", "name": admin.dataValues.admin_name }
            }
        } else {
            let company = await DB.Companies.findOne({
                where: {
                    company_email: values.email
                }
            });
            if (company) {
                if (company.dataValues.company_password === values.password) {
                    cond = { "authenticated": true, "permission": "company", "name": company.dataValues.company_name }
                }
            } else {
                let user = await DB.Users.findOne({
                    where: {
                        user_email: values.email
                    }
                });
                if (user) {
                    if (user.dataValues.user_password === values.password) {
                        cond = { "authenticated": true, "permission": "user", "name": user.dataValues.user_name }
                    }
                }
            }
        }
    }
    res.send(cond)
});

app.post("/registerAdmin", async (req, res) => {
    let values = req.body.values;
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
            await DB.Companies.create({
                company_name: values.name,
                company_email: values.email,
                company_register: values.cnpj,
                company_telephone: values.telephone,
                company_contact: values.contact,
                company_password: values.password
            })
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
            await DB.Users.create({
                user_name: values.name,
                user_email: values.email,
                user_register: values.cpf,
                user_telephone: values.telephone,
                user_company_id: values.companyId,
                user_password: values.password
            })
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

})

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
    let type = req.body.type;
    let typeId = (
        type === "Admins" ? "admin_id" : (
            type === "Companies" ? "company_id" : (
                type === "Users" ? "user_id" : ""
            )
        )
    )
    let id = req.body.id;
    let userInfo = req.body.userInfo;

    DB[type].update(userInfo, {
        where: {
            [typeId]: id
        }
    })
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
            course_hours: req.body.hoursCourse,
            registrations: 0
        });

        res.send({ registeredCourse: true })

    } else {
        res.send({ registeredCourse: false, reason: "Already registred" })
    }

});

app.get("/Courses/:userType", async (req, res) => {
    const userType = req.params.userType;
    if (userType === "admin") {
        
        let courses = await DB.Courses.findAll();

        courses.map(course => {
            course.dataValues.content = readFileSync(course.dataValues.content_path + "/2." + course.dataValues.course_title.replace(/[ ]/g, "").toLowerCase() + ".txt", "utf8");
        })
        console.log(courses)
    } else {
        res.send("Userinválido")
    }
});

app.get("/getCourse/:courseId", async (req, res) => {
    console.log(req.params)
    let courseId = req.params.courseId;

    let course = await DB.Courses.findByPk(courseId);

    let courseDir = course.dataValues.content_path;
    courseDir = courseDir.split("/")[(courseDir.split("/").length - 1)];

    let coursePdf = readdirSync(course.dataValues.content_path)[0];
    res.send({ "courseDir": courseDir, "coursePdf": coursePdf  })

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

    await DB.Courses.destroy({
        where: {
            course_id: req.params.courseId
        }
    })

    res.sendStatus(200)

});