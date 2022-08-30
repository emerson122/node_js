/* Este modulo te permite buscar y trabajar con archivos en tu sistema */

const fs = require('fs');

fs.writeFile('./Texto.txt','linea uno',function (err) {
    if(err){
        console.log(err);
    }
    console.log('archivo creado')
})