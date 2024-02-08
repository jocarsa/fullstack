CREATE TABLE eventos 
(
    Identificador INT(10) NOT NULL AUTO_INCREMENT , 
    titulo VARCHAR(255),
    descripcion TEXT,
    contenido TEXT,
    imagen VARCHAR(255),
    autores_nombre INT(10),
    categorias_nombre INT(10),
    fechainicio DATE NOT NULL , 
    fechafinal DATE ,
    FOREIGN KEY (autores_nombre) REFERENCES autores(Identificador),
    FOREIGN KEY (categorias_nombre) REFERENCES categorias(Identificador),
    PRIMARY KEY (`Identificador`)
) ENGINE = InnoDB;