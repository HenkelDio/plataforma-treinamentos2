
const express = require("express");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const fs = require("fs")

app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())

const port = 3001

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
