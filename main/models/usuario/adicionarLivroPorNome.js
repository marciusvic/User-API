const { models } = require('../../../server/server.js');

module.exports.adicionarLivroPorNome = async function (context, dados) {
    const usuario = context.instance.toObject();
    const { title } = dados;
    const livro = await models.Books.create({ title: title, created_by: usuario.id });

    return livro.title;
}