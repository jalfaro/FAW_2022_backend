-- Consulta de una tabla
USE faw;
SELECT id, nombre, apellido, telefono, email FROM contacto;
-- Insertar una fila
USE faw;
INSERT INTO contacto (nombre, apellido, telefono, email) VALUES ('Juan Jose', 'Juarez Lopez', '11112222', 'jjuarez@gmail.com')
-- Modificacion
USE faw;
UPDATE contacto SET telefono = '44445566' WHERE id = 2
--Borrar fila
USE faw;
DELETE FROM contacto WHERE id = 2
-- Estructura de la tabla contacto
CREATE TABLE `contacto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `email` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;