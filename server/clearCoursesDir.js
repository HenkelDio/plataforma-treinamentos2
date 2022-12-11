
const fs = require("fs");

for (let course of fs.readdirSync("./treinamentos")) {
    for (let file of fs.readdirSync("./treinaemntos/" + course)) {
        fs.unlinkSync("./treinamentos/" + course + "/" + file)
    }
    fs.rmDir("./treinamentos/" + course)
}