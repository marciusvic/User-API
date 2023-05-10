const { alterarNomeLivro } = require('../../main/models/usuario/alterarNomeLivro.js');
const { adicionarLivroPorNome } = require('../../main/models/usuario/adicionarLivroPorNome.js');

module.exports = function(Usuario) {
    Usuario.prototype.alterarNomeLivro = alterarNomeLivro;
    Usuario.prototype.adicionarLivroPorNome = adicionarLivroPorNome;
};

