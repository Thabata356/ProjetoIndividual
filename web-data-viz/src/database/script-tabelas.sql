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
	CONSTRAINT fk_usuario_historico_leitura FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

INSERT INTO usuario (nome, email, senha) VALUES('Thabata', 't@gmail.com', '123456');

INSERT INTO livro(nome, autor, genero, editora, total_paginas, fk_usuario) VALUES('Jogos Vorazes', 'Suzanne Collins', 'Ficção Distópica', 'Rocco', 400, 1);

INSERT INTO livro(nome, autor, genero, editora, total_paginas, fk_usuario) VALUES('Em Chamas', 'Suzanne Collins', 'Ficção Distópica', 'Rocco', 416, 1);

INSERT INTO livro(nome, autor, genero, editora, total_paginas, fk_usuario) VALUES('A Esperança', 'Suzanne Collins', 'Ficção Distópica', 'Rocco', 424, 1);

INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 135, now(), 1, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 264, now(), 1, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 344, now(), 1, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 379, now(), 1, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 400, now(), 1, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 470, now(), 1, 1);

INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 135, now(), 2, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 264, now(), 2, 1);

INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 135, now(), 3, 1);
INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario) VALUES( 264, now(), 3, 1);



SELECT 
            paginas_lidas,
            data_registro,
                        DATE_FORMAT(data_registro, '%H:%i:%s') AS momento_grafico
                    FROM historico_leitura 
                    WHERE fk_livro = 1
                    ORDER BY data_registro;
                    
                    
                    SELECT 
            paginas_lidas,
            data_registro,
                        DATE_FORMAT(data_registro, '%H:%i:%s') AS momento_grafico
                    FROM historico_leitura 
                    WHERE fk_livro = 1
                    ORDER BY data_registro;
                    
select * from historico_leitura;

select * from livro;

SELECT COUNT(id) AS total_livros 
FROM livro 
WHERE fk_usuario = 1;

SELECT ROUND(AVG(paginas_lidas), 2) AS media_paginas_lidas 
FROM historico_leitura 
WHERE fk_usuario = 1;

SELECT SUM(sub.max_paginas) AS total_paginas_reais
FROM (
    SELECT MAX(h.paginas_lidas) AS max_paginas
    FROM historico_leitura h
    JOIN livro l ON h.fk_livro = l.id
    WHERE h.fk_usuario = 1 AND l.genero = 'Ficção Distópica'
    GROUP BY h.fk_livro
) AS sub;