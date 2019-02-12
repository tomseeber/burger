CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id int AUTO_INCREMENT NOT NULL,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false, 
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);