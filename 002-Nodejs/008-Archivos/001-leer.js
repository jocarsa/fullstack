var archivos = require('fs');

archivos.readFile("prueba.txt",'utf-8',function(err,data){
    console.log(data);     
})