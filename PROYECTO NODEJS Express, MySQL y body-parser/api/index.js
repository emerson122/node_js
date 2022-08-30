//constante para el paquete mysql
const mysql = require('mysql');

//constante para el paquete express

const express = require('express');

//constante para los metodos de express

var app= express();

//constante para el paquete de bodypaser

const bp = require('body-parser');

//Enviando los datos JSON a NodeJS API

app.use(bp.json());

//conectar a la base de datos (mysql)

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database:'lp10',
    multipleStatements: true 

});

//test de conexion a base de datos

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Conexion exitosa');
    }else{
        console.log('Error al conectar ala DB');
    }
});

//Ejecutar el server en un puerto especifico.
app.listen(3000, () => console.log('Server Runnig puerto: 3000'));