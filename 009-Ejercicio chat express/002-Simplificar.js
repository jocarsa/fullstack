const express = require("express");

let aplicacion = express();

aplicacion.get('/',(req,res) =>{
    res.end("hola")
})

aplicacion.listen(80)