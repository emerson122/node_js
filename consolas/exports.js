// exportar un modulo
const matematicas = {};
function Sumar(num1, num2){
    return num1 + num2;
}
function Restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1*num2;
}

function dividir(num1,num2){
    if(num2==0){
        console.log('No se puede divirdir por 0')
    } else {
    return num1/ num2;
}
}

matematicas.Sumar= Sumar;
matematicas.Restar = Restar;
matematicas.multiplicar = multiplicar;
matematicas.dividir = dividir;

//module ,exports puede exportar lo que sea
module.exports = matematicas; 
/*
function hello(nombre){
    console.group('hola', nombre)
}
module.exports = hello;*/