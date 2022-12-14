
const fs = require("fs");
fs.ra
for (let course of fs.readdirSync("./treinamentos")) {
    for (let file of fs.readdirSync("./treinamentos/" + course)) {
        fs.unlinkSync("./treinamentos/" + course + "/" + file)
    }
    fs.rmdirSync("./treinamentos/" + course)
}