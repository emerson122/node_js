const mysql = require("mysql");
const express = require("express");
let apli = express();
const analizador = require("body-parser");
apli.use(analizador.json());
// Used for sending the Json Data to Node API
//app.use(bodyparser.json());

// Connection String to Database
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "emerson",
  multipleStatements: true, //nombre de la base de datos
  port: 3306,
});

// To check whether the connection is succeed for Failed while running the project in console.
mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Db Connection Succeed");
  } else {
    console.log(
      "Db connect Failed \n Error :" + JSON.stringify(err, undefined, 2)
    );
  }
});

// To Run the server with Port Number
apli.listen(3311, () =>
  // puerto pagina web diferente al de BD xampp
  console.log("Express server is running at port no : 3311")
);


apli.get("/almacenamiento", (req, res) => {
  var sql = "CALL SELECT_TABLAS();";
  mysqlConnection.query(sql, (err, datos) => {
    if (err) {
      return err;
    } else {
      console.log(datos);
      res.json({ mensaje: "Selección con exito", datos });
    }
  });
});




apli.post("/almacenamiento", (req, res) => {
  const sql =
    "SET @p0= ?; \
    SET @p1= ?;\
     SET @p2= ?;\
      SET @p3= ?;\
       SET @p4= ?;\
        SET @p5= ?;\
        SET @p6= ?; \
        CALL `INSERTAR_ARCHIVOCONSUCARPETA`(@p0, @p1, @p2, @p3, @p4, @p5, @p6);";
  console.log(Object.values(req.body));
  const valores = req.body;

  mysqlConnection.query(
    sql,
    [
      valores.p0,
      valores.p1,
      valores.p2,
      valores.p3,
      valores.p4,
      valores.p5,
      valores.p6,
    ],
    (err, datos) => {
      if (err) {
        console.log(err);
        return err;
      }

      res.json({ mensaje: "INSERTADO", datos });
    }
  );
});


apli.post("/almacenamiento", (req, res) => {
  let alm = req.body;
  var sql = "SET @p0=?;\
   SET @p1=?; \
  CALL `CREAR_NUEVO_DISCO`(@p0, @p1);";

  mysqlConnection.query(sql, [alm.p0, alm.p1], (err, rows, fields) => {
    if (!err) {
      res.send("NUEVO DISCO");
    } else {
      console.log(err);
    }
  });
});
// eliminar archivo y su carpeta

apli.delete("/almacenamiento", (req, res) => {
  const sql = "SET @p0=?; CALL `ELIMINAR_ARCHIVOYSUCARPETA`(@p0);";
  const cod = req.body;
  mysqlConnection.query(sql, [cod.p0], (err, datos) => {
    if (err) {
      return err;
    } else {
      console.log(datos);
      res.json({ mensaje: "ELIMINADO", datos });
    }
  });
});



apli.put("/almacenamiento", (req, res) => {
  const sql =
    "SET @p0=?; \
    SET @p1=?; \
    SET @p2=?;\
     SET @p3=?;\
      SET @p4=?;\
       SET @p5=?;\
        SET @p6=?;\
         CALL `UPDATE_ARCHIVO`(@p0, @p1, @p2, @p3, @p4, @p5, @p6);";

  console.log(Object.values(req.body));
  const valores = req.body;

  mysqlConnection.query(
    sql,
    [
      valores.p0,
      valores.p1,
      valores.p2,
      valores.p3,
      valores.p4,
      valores.p5,
      valores.p6,
    ],
    (err, datos) => {
      if (err) {
        console.log(err);
        return err;
      }

      res.json({ mensaje: "ACTUALIZADO", datos });
    }
  );
});



apli.put("/almacenamiento", (req, res) => {
  const sql =
    "SET @p0=?; SET @p1=?;  SET @p2=?; CALL `UPDATE_CARPETA`(@p0, @p1, @p2);";
  console.log(Object.values(req.body));
  const valores = req.body;

  mysqlConnection.query(
    sql,
    [valores.p0, valores.p1, valores.p2],
    (err, datos) => {
      if (err) {
        console.log(err);
        return err;
      }

      res.json({ mensaje: "ACTUALIZADO", datos });
    }
  );
});