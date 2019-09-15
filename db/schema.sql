-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS burger_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_names varchar(255) NOT NULL,
  devoured BOOLEAN default false, 
  PRIMARY KEY (id)
);

