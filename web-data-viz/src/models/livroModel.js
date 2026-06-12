var database = require("../database/config");

function buscarLivrosporUsuario(id) {

  var instrucaoSql = `SELECT * FROM livro a WHERE fk_usuario = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarLivrosporUsuario
}
