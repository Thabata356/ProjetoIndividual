var database = require("../database/config");

function buscarUltimasMedidas(idLivro, limite_linhas) {

    var instrucaoSql = `SELECT 
            paginas_lidas,
            data_registro,
                        DATE_FORMAT(data_registro, '%H:%i:%s') AS momento_grafico
                    FROM historico_leitura 
                    WHERE fk_livro = ${idLivro}
                    ORDER BY data_registro DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idLivro) {

    var instrucaoSql = `SELECT 
            paginas_lidas,
            data_registro,
                        DATE_FORMAT(data_registro, '%H:%i:%s') AS momento_grafico
                    FROM historico_leitura 
                    WHERE fk_livro = ${idLivro}
                    ORDER BY data_registro DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCincoGeneros() {

    var instrucaoSql = `SELECT genero, COUNT(*) AS total
                        FROM livro 
                        GROUP BY genero
                        wHERE fk_usuario =${idUsuario}
                        ORDER BY total DESC 
                        LIMIT 5;
                        `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarCincoGeneros
}
