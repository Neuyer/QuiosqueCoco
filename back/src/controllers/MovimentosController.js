
const movimentoService = require('../services/MovimentosService');

module.exports = {
    index: movimentoService.index,
    criar: movimentoService.create,
}