
const express = require("express");
const musicaRouter = require("./routerMusica")
// se crea una funcion para que tenga un mejor matenimiento del codigo
function ApiMusica(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/avicii", musicaRouter);
}

module.exports = ApiMusica;