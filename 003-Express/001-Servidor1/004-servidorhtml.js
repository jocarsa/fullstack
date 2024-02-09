// npm install express
const express = require("express");
const ruta = require("path");

let aplicacion = express();

aplicacion.use(express.static(ruta.join(__dirname,"public")));

const puerto = 3000;
aplicacion.listen(puerto,()=>{
    console.log("ok funcionando");
})