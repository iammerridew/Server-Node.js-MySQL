CREATE DATABASE ng_project;

USE ng_project;

CREATE TABLE customer (
  ID int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(65) NOT NULL,
  father_lastname varchar(65) NOT NULL,
  mother_lastname varchar(65) NOT NULL,
  rfc varchar(13) DEFAULT NULL,
  email varchar(65) NOT NULL,
  telephone varchar(15) DEFAULT NULL,
  fiscal_name varchar(120) DEFAULT NULL,
  contact varchar(280) DEFAULT NULL,
  longitude float NOT NULL,
  latitude float NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NULL
);

DESCRIBE customer;