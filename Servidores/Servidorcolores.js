// para instalar estos modulos ejecutar el (npm install )
const http = require('http');
const colors = require('colors');
const arrancarserver = function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write('<h1> funciona we</h1>');
    res.end;
}
const server=http.createServer(arrancarserver);
//instalar colores con (npm install colors)
server.listen(3000,function(){
    console.log('El sevidor se ejecuto correctamente en el puerto 3000'.green)
    console.log('Ve al navegador en localhost 3000'.underline.green)
});

//npm crear package json con los recursos utilizados