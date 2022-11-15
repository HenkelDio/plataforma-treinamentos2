
const express = require("express");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())

const DB = require("./STDB").models;

const port = 3001

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

app.listen(port, () => {
    console.log("Listen in PORT 3001")
})
