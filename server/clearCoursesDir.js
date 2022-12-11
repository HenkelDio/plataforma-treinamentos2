
const fs = require("fs");

for (let course of fs.readdirSync("./treinamentos")) {
    for (let file of fs.readdirSync("./treinamentos/" + course)) {
        fs.unlinkSync("./treinamentos/" + course + "/" + file)
    }
    fs.rmDirSync("./treinamentos/" + course)
}