CREATE VIEW vista_eventos AS 
SELECT 
eventos.titulo,
eventos.descripcion,
eventos.contenido,
eventos.imagen,
eventos.fechainicio,
eventos.fechafinal,
CONCAT(autores.nombre," ",autores.apellidos) AS autor,
categorias.nombre AS categoria
FROM `eventos`
LEFT JOIN autores 
ON eventos.autores_nombre = autores.Identificador
LEFT JOIN categorias 
ON eventos.categorias_nombre = categorias.Identificador