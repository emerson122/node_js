const express = require('express');
const colors = require('colors');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use( require('./routes/index'))

// aqui se utiliza el metodo path para hacer un llamado a la carpeta public dirname y ejecutar el archivo index.html
app.use(express.static(path.join(__dirname, './public')));

// => siginifica function
app.listen(3000, ()=>{
    console.log('El sevidor se ejecuto correctamente en el puerto 3000'.green)
    console.log('Ve al navegador en localhost 3000'.underline.green)
});
