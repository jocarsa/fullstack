// npm install express
const express = require("express");
const ruta = require("path");

let aplicacion = express();

//aplicacion.use(express.static(ruta.join(__dirname,"public")));

aplicacion.get('/',(req,res) =>{
    res.sendFile(ruta.join(__dirname,'public','index.html'))
})
aplicacion.get('/sobremi',(req,res) =>{
    res.sendFile(ruta.join(__dirname,'public','sobremi.html'))
})

const puerto = 3000;
aplicacion.listen(puerto,()=>{
    console.log("ok funcionando");
})