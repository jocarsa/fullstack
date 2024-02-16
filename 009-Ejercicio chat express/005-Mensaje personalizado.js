const express = require("express");

let aplicacion = express();
var mensajes = []

aplicacion.get('/',(req,res) =>{
    mensajes.push({mensaje:req.query.mensaje});
    console.log(mensajes)
    res.end("ok")
})

aplicacion.listen(80)