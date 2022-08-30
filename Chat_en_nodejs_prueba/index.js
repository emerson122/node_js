//trabaja con las rutas y uno directorios
const path = require('path');
const colors = require('colors');
const express = require('express');
const app = express();

const socket = require('socket.io');

// settings
app.set('port', process.env.PORT || 3000);

// __dirname esta cosa es la ruta de mi proyecti mas la carpeta donde debe buscar
app.use(express.static(path.join(__dirname, 'public')));

// listen the server
// => siginifica function
const server = app.listen(app.get('port'), ()=>{
    console.log('El sevidor se ejecuto correctamente en el puerto'.blue ,app.get('port').green);
    console.log('Ve al navegador en localhost 3000'.underline.green);
});

const io = socket(server);
io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado desde la ip numero:>', socket.id);
  
  socket.on('chat:message', function(data) {
    io.sockets.emit('chat:message', data);
  });

  socket.on('chat:typing', function(data) {
    socket.broadcast.emit('chat:typing', data);
  });
});