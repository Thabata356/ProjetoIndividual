var database = require("../database/config");

function buscarLivrosporUsuario(id) {

  var instrucaoSql = `SELECT * FROM livro a WHERE fk_usuario = ${id}`;

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


module.exports = {
  buscarLivrosporUsuario,
  atualizarPaginasLidas
}
