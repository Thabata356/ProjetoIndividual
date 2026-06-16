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
    var nomeLivro = req.params.nomeLivro;
    var nomeAutor = req.params.nomeAutor;
    var qtdPaginas = req.body.qtdPaginas;
    var paginasLidas = req.body.paginasLidas;

    livroModel.atualizarPaginasLidas(paginasLidas, qtdPaginas, nomeLivro, nomeAutor)
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