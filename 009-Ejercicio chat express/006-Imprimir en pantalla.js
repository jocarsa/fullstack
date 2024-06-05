const express = require("express");

let aplicacion = express();
var mensajes = []

aplicacion.get('/',(req,res) =>{
    mensajes.push({mensaje:req.query.mensaje});
    for(let i = 0;i<mensajes.length;i++){
        res.write('<div class="mensaje">'+mensajes[i].mensaje+'</div>')
    }
    res.end("ok")
})

aplicacion.listen(80)