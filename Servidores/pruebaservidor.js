const http = require('http');
//opcion 1
//req= requiere  res= response
/*
http.createServer(function(req,res){
    res.writeHead(200,{'conten-type': 'text/html'});
    res.write('<h1> funciona we</h1>');
    res.end;
}).listen(3000); */
//mandar un 404
/*
http.createServer(function(req,res){
    res.writeHead(404,{'conten-type': 'text/html'});
    res.write('<h1> pagina no econtrada</h1>');
}).listen(3000);*/

/************************************************************************************************** */
/*opcion 2
const arrancarserver = function(req,res){
    res.writeHead(200,{'conten-type': 'text/html'});
    res.write('<h1> funciona we</h1>');
    res.end;
}
http.createServer(arrancarserver).listen(3000);

*/
/********************************************************************************************** */
/* Opcion 3 */


const arrancarserver = function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write('<h1> funciona we</h1>');
    res.end;
}
const server=http.createServer(arrancarserver);

server.listen(3000,function(){
    console.log('El sevidor se ejecuto correctamente en el puerto 3000')
    console.log('Ve al navegador en localhost 3000')
});