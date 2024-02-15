db.entradas.updateOne(
    {
        titulo:"Esta es la segunda entrada"
    },
    {
        $set:{
            fecha:"2024-03-01"
        }
    }
);