const { models } = require('../../../server/server.js');

module.exports.alterarNomeLivro = async function (context, fk, dados) {
  const livroId = fk;
  const usuario = context.instance.toObject();
  const { title } = dados;
  const livro = await models.Books.findOne({ where: { id: livroId, created_by: usuario.id } });

  await livro.updateAttributes({ title: title });

  return livro.title;
};
  