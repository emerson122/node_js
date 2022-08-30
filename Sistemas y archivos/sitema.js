// este modulo OS permirte tener control del sistema operativo
const os = require('os');

// en que sistema estoy
console.log(os.platform());

//en que version estoy
console.log(os.release());

//memoria libre
console.log('memoria libre es: ',os.freemem(),' bytes');
console.log('memoria total es: ',os.totalmem(), 'bytes');