// npm install express
const express = require("express");

let aplicacion = express();

aplicacion.get("/",(req,res) => {
    res.send("Yo soy la pagina de inicio");
})

aplicacion.get("/sobremi",(req,res) => {
    res.send("Yo soy la pagina de sobre mi");
})

aplicacion.listen(8080, () =>{
    console.log("visita registrada");
})