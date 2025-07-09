const fs = require('node:fs');

console.log("holaaaa");
fs.readFile('./texto.txt', 'utf-8', (err, texto)=>{
    console.log(texto);
})

console.log("cositas.txt");
fs.readFile('./texto.txt', 'utf-8', (err, texto)=>{
    console.log(`${texto} olaaaaaaaaaa`);
})