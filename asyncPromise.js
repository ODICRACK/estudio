const fs = require('node:fs/promises');

console.log("holaaaa");
fs.readFile('./texto.txt', 'utf-8',)
    .then(texto=>{
        console.log(`${texto}`);
    })
    .catch(()=>{
        console.log ("no se ha podido")
    })

console.log("cositas.txt");
fs.readFile('./texto.txt', 'utf-8',)
    .then(texto=>{
        console.log(`${texto} holaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
    })
    .catch(()=>{
        console.log ("no se ha podido holaaaaaaaaaaaaaaaaaaaaaaa")
    })