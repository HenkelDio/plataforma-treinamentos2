
const express = require("express");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

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
        console.log(values)
        let admin = await DB.Admins.findOne({
            where: {
                admin_email: values.email,
                admin_password: values.password
            }
        })
        if (admin) {
            res.send({ "authenticated": true, "permission": "admin" })
        } else {
            let company = await DB.Companies.findOne({
                where: {
                    company_email: values.email,
                    company_password: values.password
                }
            })

            if (company) {
                res.send({ "authenticated": true, "permission": "company" })
            } else {
                let user = await DB.Users.findOne({
                    where: {
                        user_email: values.email,
                        user_password: values.password
                    }
                })

                if (user) {
                    res.send({ "authenticated": true, "permission": "user" })
                } else {
                    res.send({ "authenticated": false })
                }
            }
        }
    }

})

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
})

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
})

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
})

app.post("/fileUploader", async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send("Nenhum arquivo foi enviado")
    } else {
        let fileUploaded = true
        req.files.uploadedFile.mv(`${__dirname}\\treinamentos\\${req.files.uploadedFile.name}`, (err) => {
            if (err) {
                console.error(err)
                res.send("Caralho deu merda willian deu muita merda")
            } else {
                res.send("Deu tudo certo willllll ahahahahahahaha :) :) :)")
            }
        })

    }
})

app.get("/getUsers/:userType", async (req, res) => {
    let userType = req.params.userType;
    
    let users = await DB[userType].findAll();

    res.send(users);
})

app.listen(port, () => {
    console.log("Listen in PORT 3001")
})
