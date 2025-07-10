const fs = require('node:fs');
const {promisify} = require(`node:util`)

const readFileP = promisify(fs.readFile)

console.log("holaaaa");
readFileP('./texto.txt', 'utf-8',)
    .then(texto=>{
        console.log(`${texto}`);
    })
    .catch(()=>{
        console.log ("no se ha podido")
    })

console.log("cositas.txt");
readFileP('./texto.txt', 'utf-8',)
    .then(texto=>{
        console.log(`${texto} holaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
    })
    .catch(()=>{
        console.log ("no se ha podido holaaaaaaaaaaaaaaaaaaaaaaa")
    })