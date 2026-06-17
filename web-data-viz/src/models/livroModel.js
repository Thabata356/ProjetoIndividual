var database = require("../database/config");

function buscarLivrosporUsuario(idUsuario) {

  console.log("Model idUS: " + idUsuario)
  var instrucaoSql = `SELECT * FROM livro a WHERE fk_usuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarPaginasLidas(paginasLidas, qtdPaginas, nomeLivro, nomeAutor, idUsuario) {

  var instrucaoSql = `INSERT INTO historico_leitura (paginas_lidas, data_registro, fk_livro, fk_usuario)
                        SELECT ${paginasLidas}, now(), id , ${idUsuario}
                        FROM livro 
                        WHERE nome = '${nomeLivro}' 
                          AND autor = '${nomeAutor}' 
                          AND total_paginas = ${qtdPaginas};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarLivro(nomeLivro, nomeAutor, generoLivro, editoraLivro, qtdPaginas, idUsuario) {

  var instrucaoSql = `INSERT INTO livro (id, nome, autor, genero, editora, total_paginas, fk_usuario)
                        VALUES(id, '${nomeLivro}', '${nomeAutor}', '${generoLivro}', '${editoraLivro}', ${qtdPaginas}, ${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarLivrosporUsuario,
  atualizarPaginasLidas,
  cadastrarLivro
}
