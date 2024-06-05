const express = require("express");

let aplicacion = express();
let contador = 0;

aplicacion.get('/',(req,res) =>{
    contador++;
    res.end("hola "+contador)
})

aplicacion.listen(80)