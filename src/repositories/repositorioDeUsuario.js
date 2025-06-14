const { Usuario } = require("../models/Usuario");
const { db } = require ("../../prisma/main")

class RepositorioDeUsuario {
  buscarTodos() {
    return await = db.user.findMany();
  }

  criar(create) {
    return db.user.create({
      where: {
        id: usuarioId
      },
      data: {create}
    });
  }

  buscarPeloEmail(email) {
    return db.user.email({
 where: {
        id: usuarioId
      },
      data: {email}
    });
  }

  buscarPeloId(id) {
    return db.user.id({
 where: {
        id: usuarioId
      },
      data: {id}
    });
  }

  atualizar(usuarioId, dadosAtualizados) {
    return db.user.update({
      where: {
        id: usuarioId
      },
      data: {dadosAtualizados}
    });
  }

  deletarUmUsuario() {
    return db.user.delete({
     
    });
  }
}

module.exports = new RepositorioDeUsuario();
//não entendi 