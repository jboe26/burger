CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (

id: INT NOT NULL AUTO_INCREMENT,

burger_name: VARCHAR(255),

devoured: BOOLEAN DEFAULT false,

PRIMARY KEY (id)

);
