const express = require("express");
const ruta = require("path");

let aplicacion = express();

aplicacion.get('/',(req,res) =>{
    res.end("hola")
})

const puerto = 80;
aplicacion.listen(puerto,()=>{
    console.log("ok funcionando");
})