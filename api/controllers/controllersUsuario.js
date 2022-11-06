const crypto = require("bcrypt");

const usuario = require("../database/models/modelUsuario.js");

const controllers = {
  async cadastrarUsuario() {
    const [req, res] = arguments;
    const { senha, nome, sobrenome, email, role } = req.body;

    const senhaHashed = await crypto.hash(senha, 10);

    let usuarioCriado;
    try {
      usuarioCriado = await usuario.create({
        nome,
        sobrenome,
        email,
        role,
        senha: senhaHashed,

      });
      res.status(201).redirect('/');
    } catch (e) {
      res.status(400).json(e.errors);
    }
  },
};

module.exports = controllers;
