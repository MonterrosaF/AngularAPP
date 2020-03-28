"use strict";

let User = require("./../models/user");

function getUser(req, res) {
  let userId = req.params.id;
  User.findById(userId, (err, user) => {
    if (err) return res.status(500).send({ message: "Error en la peticion" });
    if (!user) return res.status(404).send({ message: "Usuario no existe" });
    followThisUser(req.user.sub, userId).then(value => {
      user.password = undefined;
      return res.status(200).send({
        user,
        following: value.following,
        followed: value.followed
      });
    });
  });
}
