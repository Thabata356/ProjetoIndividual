var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.get("/:idUsuario", function (req, res) {
  livroController.buscarLivrosporUsuario(req, res);
});

router.post("/atualizarPaginas", function (req, res) {
  livroController.atualizarPaginasLidas(req, res);
});

router.post("/cadastrarNovoLivro", function (req, res) {
  livroController.cadastrarLivro(req, res);
});


module.exports = router;