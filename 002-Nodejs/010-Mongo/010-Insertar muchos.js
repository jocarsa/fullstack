// npm install mongodb

const {MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

const basededatos = "blog";

const cliente = new MongoClient(
    url,
    {
       
    }
);

async function principal(){
    await cliente.connect();
    const base = cliente.db(basededatos);
    
    const coleccion = base.collection('entradas');
    await coleccion.insertMany(  
        [
            {
                'titulo':'Esta es la segunda entrada',
                'contenido':'Este es el contenido de la segunda entrada',
                'fecha':'2024-02-16'
            },
            {
                'titulo':'Esta es la tercera entrada',
                'contenido':'Este es el contenido de la tercera entrada',
                'fecha':'2024-02-17'
            }
        ]
        )
    await cliente.close()
}

principal();