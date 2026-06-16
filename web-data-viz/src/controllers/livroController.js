var livroModel = require("../models/livroModel");

function buscarLivrosporUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  livroModel.buscarLivrosporUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function atualizarPaginasLidas(req, res) {
    var paginasLidas = req.body.paginasLidas;
    var qtdPaginas = req.body.qtdPaginas;
    var nomeLivro = req.body.nomeLivro;
    var nomeAutor = req.body.nomeAutor;
    var idUsuario = req.body.idUsuario;

    livroModel.atualizarPaginasLidas(paginasLidas, qtdPaginas, nomeLivro, nomeAutor, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
  buscarLivrosporUsuario,
  atualizarPaginasLidas
}