var archivos = require('fs');

archivos.appendFile("prueba.txt",'\nEste es el nuevo contenido',function(err,data){
    console.log("ok");     
})