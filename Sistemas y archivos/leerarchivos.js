/* Este modulo te permite buscar y trabajar con archivos en tu sistema */

const fs = require('fs');

fs.readFile('./Texto.txt', function (err,data) {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});