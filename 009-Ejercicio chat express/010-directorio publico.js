const express = require("express");
const ruta = require("path");
let aplicacion = express();
aplicacion.use(express.static('public'));
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
aplicacion.get('/',(req,res) =>{
    res.sendFile(ruta.join(__dirname,'public','index.html'))
})

aplicacion.listen(80)