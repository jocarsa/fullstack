var archivos = require('fs');

archivos.writeFile("prueba.txt",'Este es el nuevo contenido',function(err,data){
    console.log("ok");     
})