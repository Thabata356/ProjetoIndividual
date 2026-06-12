-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE FolhasdaMinhaVida;

USE FolhasdaMinhaVida;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

-- Mudar o aquario para livro
CREATE TABLE livro (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	autor VARCHAR(100),
	genero VARCHAR(45),
	editora VARCHAR(45),
	total_paginas INT,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- Mudar o medidas para historico

create table historico_leitura (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	paginas_lidas INT,
	data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
	descricao VARCHAR(300),
	fk_livro int,
    fk_usuario int,
	CONSTRAINT fk_livro_historico_leitura FOREIGN KEY (fk_livro) REFERENCES livro(id),
	CONSTRAINT fk_usuario_historico_leitura FOREIGN KEY (fk_livro) REFERENCES livro(id)
);

INSERT INTO usuario (nome, email, senha) VALUES('Thabata', 't@gmail.com', '123456');

INSERT INTO livro(nome, autor, genero, editora, total_paginas, fk_usuario) VALUES('Jogos Vorazes', 'Suzanne Collins', 'Ficção Distópica', 'Rocco', 400, 1);

INSERT INTO livro(nome, autor, genero, editora, total_paginas, fk_usuario) VALUES('Em Chamas', 'Suzanne Collins', 'Ficção Distópica', 'Rocco', 416, 1);

INSERT INTO livro(nome, autor, genero, editora, total_paginas, fk_usuario) VALUES('A Esperança', 'Suzanne Collins', 'Ficção Distópica', 'Rocco', 424, 1);

INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 135, now(), 1, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 264, now(), 1, 1);

INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 135, now(), 2, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 264, now(), 2, 1);

INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 135, now(), 3, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 264, now(), 3, 1);