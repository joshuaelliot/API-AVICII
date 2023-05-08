const express = require("express");
const app = express();
const cors = require("cors");
const ApiMusica = require("./router/index");
const dotenv= require("dotenv");

dotenv.config();
const PORT = process.env.PORT|| 4000;

app.use(cors());
app.use(express.json());

ApiMusica(app);

app.listen(PORT, () => {
  console.log("La Api esta funcionando correctamente");
})