class Persona{
    constructor(){
        this.edad = 0;
        this.nombre = "";
    }
    saluda(){
        return("Me llamo "+this.nombre+" y te saludo");
    }
}

var JoseVicente = new Persona();
JoseVicente.nombre = "Jose Vicente";
console.log(JoseVicente.saluda());
