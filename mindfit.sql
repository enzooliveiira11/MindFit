create database mindfit;

use mindfit;

Create table usuarios (
 id INT PRIMARY KEY,
 nome VARCHAR (255),
 sobrenome VARCHAR(255),
 email VARCHAR (255) UNIQUE NOT NULL,
 senha VARCHAR (255) NOT NULL
 nascimento DATE,
 );
