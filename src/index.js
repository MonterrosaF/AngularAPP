"use strict";

const mongoose = require("mongoose");
const app = require("./app");
app.set("port", process.env.PORT || 3000);

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/testDB", { useMongoClient: true })
  .then(() => {
    console.log("Conexion a testDB correcta");
    app.listen(port, () => {
      console.log("servidor corriendo en el puerto 3000");
    });
  });
