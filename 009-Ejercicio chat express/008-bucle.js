const express = require("express");

let aplicacion = express();
var mensajes = []
var temporizador;
aplicacion.get('/enviamensaje',(req,res) =>{
    mensajes.push({mensaje:req.query.mensaje});
    res.end("")
})
aplicacion.get('/damemensajes',(req,res) =>{
    res.write(JSON.stringify(mensajes))
    res.end("")
})


aplicacion.listen(80)