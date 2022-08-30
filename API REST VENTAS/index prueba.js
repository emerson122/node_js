const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const colors = require('colors');
const { application } = require('express');
const read = require('body-parser/lib/read');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyparser.json());

//mysql 
const conexion = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'twot'
})

//Primera Ruta por el metodo get
app.get('/',(req,res)=>{
    res.send('Bienvenidos a la API de TWOT')
});

//Leer venta DATOS

app.get('/LeerV',(req, res)=>{
    const sql = `CALL PROC_VENTA('?','?','?','?','?','?','?','?','?','?',4,'')`
    conexion.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]);
        }else{
            res.send('No se pudo obtener resultados')
        }
    });  
    console.log('Datos leidos correctamente');
});

app.get('/LeerV/:id',(req, res)=>{
    const {id}= req.params
    const sql=`CALL PROC_VENTA('?','?','?','?','?','?','?','?','?','?',5,${id})`
    conexion.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el id');
});

app.post('/nuevaVenta',(req,res)=>{
    const objVentas ={
        COD_INV: req.body.COD_INV,
        COD_PERSONA : req.body.COD_PERSONA,
        COD_PRODUCTO: req.body.COD_PRODUCTO,
        NOM_PRODUCTO: req.body.NOM_PRODUCTO,
        CANT_PRODUCTO: req.body.CANT_PRODUCTO,
        PREC_UNITARIO: req.body.PREC_UNITARIO ,
        TOTAL_BRUTO: req.body.TOTAL_BRUTO,
        DESTINO_VENTA: req.body.DESTINO_VENTA,
        IMPUE_TOTAL: req.body.IMPUE_TOTAL,
        TOTAL_VENTA: req.body.TOTAL_VENTA,
        OPERACION: req.body.OPERACION,
        FILA: req.body.FILA
    }
    const sql = `CALL PROC_VENTA(${objVentas.COD_INV},${objVentas.COD_PERSONA},${objVentas.COD_PRODUCTO},${objVentas.NOM_PRODUCTO},${objVentas.CANT_PRODUCTO},${objVentas.PREC_UNITARIO},${objVentas.TOTAL_BRUTO},${objVentas.DESTINO_VENTA},${objVentas.IMPUE_TOTAL},${objVentas.TOTAL_VENTA},${objVentas.OPERACION},${objVentas.FILA})`
    conexion.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});
//actualizar
app.put('/actualizarV/:id',(req,res)=>{
    const  {id}= req.params;
    const objVentas ={
        COD_INV: req.body.COD_INV,
        COD_PERSONA : req.body.COD_PERSONA,
        COD_PRODUCTO: req.body.COD_PRODUCTO,
        NOM_PRODUCTO: req.body.NOM_PRODUCTO,
        CANT_PRODUCTO: req.body.CANT_PRODUCTO,
        PREC_UNITARIO: req.body.PREC_UNITARIO ,
        TOTAL_BRUTO: req.body.TOTAL_BRUTO,
        DESTINO_VENTA: req.body.DESTINO_VENTA,
        IMPUE_TOTAL: req.body.IMPUE_TOTAL,
        TOTAL_VENTA: req.body.TOTAL_VENTA
    }
    const sql = `CALL PROC_VENTA(${objVentas.COD_INV},${objVentas.COD_PERSONA},${objVentas.COD_PRODUCTO},${objVentas.NOM_PRODUCTO},${objVentas.CANT_PRODUCTO},${objVentas.PREC_UNITARIO},${objVentas.TOTAL_BRUTO},${objVentas.DESTINO_VENTA},${objVentas.IMPUE_TOTAL},${objVentas.TOTAL_VENTA},2,${id})`
    conexion.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
});

app.delete('/borrarV/:id',(req,res)=>{
    const{id}= req.params;
    const sql=`CALL PROC_VENTA('?','?','?','?','?','?','?','?','?','?',3,${id})`
    conexion.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
})

/*---------------------------------------------------------------------------------------------------- */
//insertar datos en la tabla compra

app.get('/LeerC',(req, res)=>{
    const sql = `CALL PROC_COMPRA('?', '?', '?','?','?', '?','?', '?','?','?', '?', '?', 4, '?');`
    conexion.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]);
        }else{
            res.send('No se pudo obtener resultados')
        }
    });  
    console.log('Datos leidos correctamente');
});

app.get('/LeerC/:id',(req, res)=>{
    const {id}= req.params
    const sql=`CALL PROC_COMPRA('?', '?', '?','?','?', '?','?', '?','?','?', '?', '?', 5,${id} );`
    conexion.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el id');
});
//Insertar Venta

app.post('/nuevaCompra',(req,res)=>{
    const objVentas ={
        COD_INV: req.body.COD_INV,
        COD_EMPRESA: req.body.COD_EMPRESA,
        COD_PRODUCTO: req.body.COD_PRODUCTO,
        COD_PERSONA: req.body.COD_PERSONA,
        NOM_PROD: req.body.NOM_PROD,
        DEST_PROD: req.body.DEST_PROD,
        DEST_CLIENT: req.body.DEST_CLIENT,
        DISP_PROD: req.body.DISP_PROD,
        CANT_PROD: req.body.CANT_PROD,
        PREC_COMP: req.body.PREC_COMP ,   
        IMPUE_COMP: req.body.IMPUE_COMP,
        TOTAL_COMP: req.body.TOTAL_COMP,
        OPERACION: req.body.OPERACION,
        FILA: req.body.FILA
    }
    const sql = `CALL PROC_COMPRA(${objVentas.COD_INV},${objVentas.COD_EMPRESA},${objVentas.COD_PRODUCTO},${objVentas.COD_PERSONA},${objVentas.NOM_PROD},${objVentas.DEST_PROD},${objVentas.DEST_CLIENT},${objVentas.DISP_PROD},${objVentas.CANT_PROD},${objVentas.PREC_COMP},${objVentas.IMPUE_COMP},${objVentas.TOTAL_COMP},1,'?')`
    conexion.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});

//actualizar
app.put('/actualizarC/:id',(req,res)=>{
    const  {id}= req.params;
    const objVentas ={
        COD_INV: req.body.COD_INV,
        COD_EMPRESA: req.body.COD_EMPRESA,
        COD_PRODUCTO: req.body.COD_PRODUCTO,
        COD_PERSONA: req.body.COD_PERSONA,
        NOM_PROD: req.body.NOM_PROD,
        DEST_PROD: req.body.DEST_PROD,
        DEST_CLIENT: req.body.DEST_CLIENT,
        DISP_PROD: req.body.DISP_PROD,
        CANT_PROD: req.body.CANT_PROD,
        PREC_COMP: req.body.PREC_COMP ,   
        IMPUE_COMP: req.body.IMPUE_COMP,
        TOTAL_COMP: req.body.TOTAL_COMP,
        OPERACION: req.body.OPERACION,
        FILA: req.body.FILA
    }
    const sql = `CALL PROC_COMPRA(${objVentas.COD_INV},${objVentas.COD_EMPRESA},${objVentas.COD_PRODUCTO},${objVentas.COD_PERSONA},${objVentas.NOM_PROD},${objVentas.DEST_PROD},${objVentas.DEST_CLIENT},${objVentas.DISP_PROD},${objVentas.CANT_PROD},${objVentas.PREC_COMP},${objVentas.IMPUE_COMP},${objVentas.TOTAL_COMP},2,${id})`
    conexion.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos insertados correctamente');
});
app.delete('/borrarC/:id',(req,res)=>{
    const{id}= req.params;
    const sql=`CALL PROC_COMPRA('?', '?', '?','?','?', '?','?', '?','?','?', '?', '?', 3,${id} );`
    conexion.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
})


//verificar conexion

conexion.connect(err=>{
    if (err) throw err // si hay un error lo lanza directamente
    console.log('Conexion exitosa'.bgBlue);
})

app.listen(PORT,()=> {
    console.log('');
    console.log('TTTTTTTTTTTTTTTTTTTTTTTWWWWWWWW                           WWWWWWWW     OOOOOOOOO     TTTTTTTTTTTTTTTTTTTTTTT'.yellow);
    console.log(`T:::::::::::::::::::::TW::::::W                           W::::::W   OO:::::::::OO   T:::::::::::::::::::::T`.yellow);
    console.log('T:::::::::::::::::::::TW::::::W                           W::::::W OO:::::::::::::OO T:::::::::::::::::::::T'.yellow);
    console.log('T:::::TT:::::::TT:::::TW::::::W                           W::::::WO:::::::OOO:::::::OT:::::TT:::::::TT:::::T'.yellow);
    console.log('TTTTTT  T:::::T  TTTTTT W:::::W           WWWWW           W:::::W O::::::O   O::::::OTTTTTT  T:::::T  TTTTTT'.yellow);
    console.log('        T:::::T          W:::::W         W:::::W         W:::::W  O:::::O     O:::::O        T:::::T        '.yellow);
    console.log('        T:::::T           W:::::W       W:::::::W       W:::::W   O:::::O     O:::::O        T:::::T        '.yellow);
    console.log('        T:::::T            W:::::W     W:::::::::W     W:::::W    O:::::O     O:::::O        T:::::T       '.yellow);
    console.log('        T:::::T             W:::::W   W:::::W:::::W   W:::::W     O:::::O     O:::::O        T:::::T       '.yellow);
    console.log('        T:::::T              W:::::W W:::::W W:::::W W:::::W      O:::::O     O:::::O        T:::::T      '.yellow);
    console.log('        T:::::T               W:::::W:::::W   W:::::W:::::W       O:::::O     O:::::O        T:::::T      '.yellow);
    console.log('        T:::::T                W:::::::::W     W:::::::::W        O::::::O   O::::::O        T:::::T      '.yellow);
    console.log('      TT:::::::TT               W:::::::W       W:::::::W         O:::::::OOO:::::::O      TT:::::::TT    '.yellow);
    console.log('      T:::::::::T                W:::::W         W:::::W           OO:::::::::::::OO       T:::::::::T   '.yellow);
    console.log('      T:::::::::T                 W:::W           W:::W              OO:::::::::OO         T:::::::::T  '.yellow);
    console.log('      TTTTTTTTTTT                  WWW             WWW                 OOOOOOOOO           TTTTTTTTTTT  '.yellow);
    console.log('');
    console.log('El servidor se esta ejecutando correctamente verifica en la url: '.green, `http://localhost:${PORT}/`.yellow);
    console.log('Para leer datos ejecutar url con:'.bold,`http://localhost:${PORT}/LeerV`.yellow);
    console.log('Para leer datos por id ejecutar url con:'.bold,`http://localhost:${PORT}/LeerV/1`.cyan);
    console.log('Para insertar nueva venta ejecutar url con:'.bold,`http://localhost:${PORT}/nuevaVenta`.yellow);
    console.log('Para actualizar Los datos ejecutar url con: '.bold,`http://localhost:${PORT}/actualizarV/1`.cyan);
    console.log('Para eliminar con id ejecutar url con: '.bold,`http://localhost:${PORT}/borrarV/1`.yellow);
})