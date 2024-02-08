// npm install -g express
// npm install -g mysql
const express = require("express");
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:"localhost",
    user:"planesvalencia",
    password:"planesvalencia",
    database:"planesvalencia"
});
/*
conexion.connect(function(err){
    if(err) throw err;
    console.log("conectado")
    
 }) 
*/
let aplicacion = express();

aplicacion.get("/",(req,res) => {
    res.end("no")
})
aplicacion.get("/eventos",(req,res) => {
    conexion.query('SELECT * FROM vista_eventos',function(err,result,fields){
        if(err) throw err;
        res.end(JSON.stringify(result))
    })
})

aplicacion.get("/categorias",(req,res) => {
    conexion.query('SELECT nombre FROM categorias',function(err,result,fields){
        if(err) throw err;
        res.end(JSON.stringify(result))
    })
})
aplicacion.listen(8080, () =>{
    console.log("visita registrada");
})
