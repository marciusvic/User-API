const { alterarNomeLivro } = require('../../main/models/books/alterarNomeLivro.js');

module.exports = function(Usuario) {
    Usuario.prototype.alterarNomeLivro = alterarNomeLivro;
};

