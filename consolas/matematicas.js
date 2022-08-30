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


exports.suma = Sumar;

exports.resta = Restar ;

exports.multi = multiplicar ;

exports.divi = dividir;