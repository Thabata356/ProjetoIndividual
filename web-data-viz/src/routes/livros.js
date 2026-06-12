var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.get("/:id", function (req, res) {
  livroController.buscarLivrosporUsuario(req, res);
});

module.exports = router;