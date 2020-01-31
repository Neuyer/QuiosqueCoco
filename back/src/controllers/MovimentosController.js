
const movimentoService = require('../services/MovimentosService');

module.exports = {
    index: movimentoService.index,
    findById: movimentoService.findById,
    create: movimentoService.create,
    update: movimentoService.update,
    delete: movimentoService.delete,
}