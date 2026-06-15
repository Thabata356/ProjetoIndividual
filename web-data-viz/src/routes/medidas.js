var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idLivro", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idLivro", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/cinco-generos/:idUsuario", function (req, res) {
    medidaController.buscarCincoGeneros(req, res);
})

module.exports = router;