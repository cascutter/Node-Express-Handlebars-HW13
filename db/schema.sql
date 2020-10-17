-- Create burger_db database, burgers table, with columns id, burger_name (string), devoured (boolean) --

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);