
const fs = require("fs");

for (let course of fs.readDirSync("./treinamentos")) {
    for (let file of fs.readDirSync("./treinaemntos/" + course)) {
        fs.unlinkSync("./treinamentos/" + course + "/" + file)
    }
    fs.rmDir("./treinamentos/" + course)
}