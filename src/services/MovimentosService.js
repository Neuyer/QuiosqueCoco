const Movimentacoes = require('../models/MovimentacaoSchema');

module.exports = {
    async index(req, res) {
        try {
            const movimentacoes = await Movimentacoes.find();
            return res.json(movimentacoes);
        }
        catch(error){
            console.log(error);
        }
    },

    async create(req, res) {
        const { quantidade, fornecedor, valor, isPago } = req.body;
        const data = new Date();
        try {
            movimentacao = await Movimentacoes.create({
              quantidade, fornecedor, data, valor, isPago  
            });

            return res.json(movimentacao);
        }
        catch(error){
            console.log(error);
        }
    },


}