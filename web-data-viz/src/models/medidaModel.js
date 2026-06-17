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

function buscarMedidasEmTempoReal(idLivro, idUsuario) {

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

function buscarCincoGeneros(idUsuario) {

    var instrucaoSql = `
                        SELECT genero, COUNT(*) AS total 
                        FROM livro 
                        WHERE fk_usuario = ${idUsuario}
                        GROUP BY genero 
                        ORDER BY total ASC 
LIMIT 5;

                        `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosKpis(idUsuario) {

    var instrucaoSql = `SELECT
    (SELECT COUNT(id) AS total_livros FROM livro WHERE fk_usuario = ${idUsuario}) as kpi1,
    (SELECT ROUND(AVG(paginas_lidas), 0) AS media_paginas_lidas FROM historico_leitura WHERE fk_usuario =  ${idUsuario}) as kpi2,
    (SELECT SUM(sub.max_paginas) AS total_paginas_reais FROM (SELECT MAX(h.paginas_lidas) AS max_paginas FROM historico_leitura h JOIN livro l ON h.fk_livro = l.id WHERE h.fk_usuario = ${idUsuario} AND l.genero = 'Ficção Distópica' GROUP BY h.fk_livro) AS sub) as kpi3;
                        `;


    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarCincoGeneros,
    buscarDadosKpis
}
