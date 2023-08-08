const { Router } = require("express");
const { getContas } = require("../controllers/contas.controller");
const routes = Router();

routes.get("/contas", getContas);

module.exports = routes;