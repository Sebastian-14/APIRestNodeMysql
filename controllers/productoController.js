let db = require('../models/dbconexion');

let productosXamarin = {
  listar( req, res ){
    let sql = "SELECT * FROM productosXamarin";
    db.query(sql,function(err, result){
      if( err ){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(result);
      }
    });
  },
  store( req, res ){
    val_nombre    =   req.body.descripcion;
    val_precio    =   req.body.precio;
    val_vendido   =   req.body.vendido
    let sql = "INSERT INTO productosXamarin(descripcion, precio, vendido) VALUES(?,?,?)";
    db.query(sql,[val_nombre,val_precio, val_vendido],function(err, newData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(newData);
      }
    });
  },
  show( req, res ){
    val_id = req.params.id;
    let sql = "SELECT * FROM productosXamarin WHERE codigo=?";
    db.query(sql,[val_id],function(err, rowData){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        res.json(rowData[0]);
      }
    });
  },
  edit( req, res ){
    val_id        =   req.body.codigo;
    val_nombre    =   req.body.descripcion;
    val_precio    =   req.body.precio;
    val_vendido   =   req.body.vendido
    let sql = "UPDATE productosXamarin SET descripcion=?, precio=? WHERE codigo=?";
    db.query(sql,[val_nombre,val_precio,val_id],function(err, newData){
      if(err){
        res.json(err);
        // res.sendStatus(500);
      }else{
        res.json(newData);
        // res.sendStatus(200);
      }
    });
  },
  delete( req, res ){
    val_id = req.params.id;
    let sql = "DELETE FROM productosXamarin WHERE codigo=?";
    db.query(sql,[val_id],function(err, newData){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(newData);
        // res.sendStatus(200);
      }
    });
  }
}

module.exports = productosXamarin;
