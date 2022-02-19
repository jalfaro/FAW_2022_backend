CREATE TABLE `marvel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `identidad_secreta` varchar(45) DEFAULT NULL,
  `nombre_heroe` varchar(45) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
