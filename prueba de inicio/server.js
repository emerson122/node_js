const fs = require('fs');
const http = require('http');
//https://programarfacil.com/blog/primeros-pasos-con-bootstrap/
//https://www.youtube.com/watch?v=VmH4tPbbDsM
const server=http.createServer(function(req,res){
    res.end('<!DOCTYPE html> <html>  <head><title>Desarrollo de Software</title>   <!-- Insertamos el archivo CSS compilado y comprimido -->'+
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> <!-- Theme opcional -->'+
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"> '+
      '</head> <body> <div class="container">   <header class="page-header"> <ul class="nav nav-pills pull-right"> <li class="active"><a href="#">Home</a></li>'+
      '<li><a href="#">Sobre mi</a></li> <li><a href="#">Experiencia</a></li>  </ul>  <h3>Unah-Programacion</h3> </header>'+
      '<div class="jumbotron"> <h1>Unah - Pumas</h1> <p class="text-justify">Hola, mi nombre es nemer, soy desarrollador de software desde hace muchos a&ntilde;os y en la actualidad'+
            'estoy embarcado en un proyecto para ense&ntilde;ar a las personas a programar. Esto es un ejemplo de lo que se puede'+
          'hacer utilizando este maravilloso framework para dise&ntilde;o, Bootstrap.</p>'+
          '<p>'+
           ' <a class="btn btn-success btn-block" href="#">Contacta conmigo</a>'+
            '<div class="text-center">'+
             '<div class="btn-group">'+
              '<a class="btn btn-info btn-xs" href="#">Twitter</a>'+
              '<a class="btn btn-primary btn-xs" href="#">Facebook</a>'+
              '</div>'+
            '</div>'+
          '</p>'+
          '</div>'+
          '<div>'+
            '<p>&copy; 2022 febrero</p>'+
          '</div>'+
        '</div>'+
        '<!--Insertamos jQuery dependencia de Bootstrap-->'+
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>'+
        '<!--Insertamos el archivo JS compilado y comprimido -->'+
        '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script> </body></html> ');
});

server.listen(8080);