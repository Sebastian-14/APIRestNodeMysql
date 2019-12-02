var express = require('express');
var router = express.Router();
let controller = require('../controllers/productoController');

// let db = require('../models/dbconexion');


// WS listar registros
router.get('/listar', function(req, res, next) {
  controller.listar(req, res);
});

// WS mostrar un registro por su id
router.get('/mostrar/:id', function(req, res, next) {
  controller.show(req, res);
});

// WS crear registro
router.post('/', function(req, res) {
  controller.store(req, res)
  // img_path = req.files;
  // val_nombre = req.body.descripcion;
  // val_precio = req.body.precio;
  // val_vendido = req.body.vendido;

  // let sql = "INSERT INTO productosXamarin(descripcion,precio,vendido) VALUES(?,?,?)";
  // db.query(sql,[val_nombre, val_precio, val_vendido],function(err, newData){
  //   if(err){
  //     console.log(err);
  //     res.sendStatus(500);
  //   }else{
  //     res.json(newData);
  //   }
  // });
});

// WS actualizar registro
router.put('/', function(req, res){
  controller.edit(req, res);
  // val_id = req.body.codigo;
  // val_nombre = req.body.descripcion;
  // val_precio = req.body.precio;
  // let sql = "UPDATE productosXamarin SET descripcion=?, precio=?, imagen=? WHERE codigo=?";
  // db.query(sql,[val_nombre, val_precio, val_imagen, val_id],function(err, newData){
  //   if(err){
  //     res.json(err);
  //     // res.sendStatus(500);
  //   }else{
  //     res.json(newData);
  //     // res.sendStatus(200);
  //   }
  // });
});

// WS eliminar registro
router.delete('/:id', function(req, res){
  controller.delete(req, res);
});


module.exports = router;
