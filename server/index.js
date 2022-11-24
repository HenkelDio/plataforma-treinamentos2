
const express = require("express");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { mkdirSync, openSync, appendFileSync, readdirSync, readFileSync } = require("fs")

app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())

const DB = require("./STDB").models;
console.log(DB)
const port = 3001

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

app.post("/loginUser", async (req, res) => {
    let values = req.body.values

    if (values.email && values.password) {
        let admin = await DB.Admins.findOne({
            where: {
                admin_email: values.email,
                admin_password: values.password
            }
        })
        if (admin) {
            res.send({ "authenticated": true, "permission": "admin", "name": admin.dataValues.admin_name })
        } else {
            let company = await DB.Companies.findOne({
                where: {
                    company_email: values.email,
                    company_password: values.password
                }
            })

            if (company) {
                res.send({ "authenticated": true, "permission": "company", "name":  company.dataValues.company_name})
            } else {
                let user = await DB.Users.findOne({
                    where: {
                        user_email: values.email,
                        user_password: values.password
                    }
                })

                if (user) {
                    res.send({ "authenticated": true, "permission": "user", "name": user.dataValues.user_name })
                } else {
                    res.send({ "authenticated": false })
                }
            }
        }
    }

});

app.post("/registerAdmin", async (req, res) => {
    let values = req.body.values;
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
    res.send();
});

app.post("/registerCompany", async (req, res) => {
    let values = req.body.values
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
});

app.post("/registerUser", async (req, res) => {
    let values = req.body.values

    if (await searchEmail(values.email) === "notFound") {
        DB.Users.create({
            user_name: values.name,
            user_email: values.email,
            user_register: values.cpf,
            user_telephone: values.telephone,
            user_company_id: values.companyId,
            user_password: values.password,
        })
        res.send({ "gotRegstred": true })
    } else {
        res.send({ "gotRegistred": false, "reason": "alreadyRegistred" })
    }
});

app.get("/getUsers/:userType", async (req, res) => {
    let userType = req.params.userType;

    let users = await DB[userType].findAll();

    res.send(users);
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
    
    if (!readdirSync(`${__dirname}/treinamentos`).includes(req.body.courseName)) {

        let coursePath = `${__dirname}/treinamentos/${req.body.courseName}`
        mkdirSync(coursePath)

        req.files.courseFile.mv(coursePath + "/" + req.files.courseFile.name)

        openSync(coursePath + "/" + req.body.courseName.replace(/[ ]/g, "_").toLowerCase() + ".txt", "w", "777");
        appendFileSync(coursePath + "/" + req.body.courseName.replace(/[ ]/g, "_").toLowerCase() + ".txt", req.body.courseDescrit)

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

})

app.get("/Courses", async (req, res) => {
    let courses = await DB.Courses.findAll();
    
    courses.map(course => (
        course.dataValues.content = readFileSync(course.dataValues.content_path + "\\" + course.dataValues.course_title.replace(/[ ]/g, "_") + ".txt", "latin1")
    ))

    res.send(courses)
})



app.listen(port, () => {
    console.log("Listen in PORT 3001")
});
