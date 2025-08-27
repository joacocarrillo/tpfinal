CREATE DATABASE IF NOT EXISTS mi_proyecto_db;
USE mi_proyecto_db;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

-- Productos
INSERT INTO productos (nombre, precio) VALUES
('Pelota de fútbol', 1200.50),
('Camiseta de River', 3500.00),
('Botines Nike', 8200.75),
('Conos de entrenamiento', 1500.00),
('Red de fútbol', 4500.00),
('Balón de básquet', 2300.25),
('Guantes de arquero', 1800.00),
('Camiseta de Boca', 3400.00),
('Short de entrenamiento', 1200.00),
('Medias deportivas', 400.00);
