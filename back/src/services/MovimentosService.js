const Movimentacoes = require('../models/MovimentacaoSchema');

module.exports = {
    async create(req, res) {
        const { admId, quantidade, fornecedor, valor, isPago } = req.body;
        const data = new Date();
        try {
            movimentacao = await Movimentacoes.create({
                admId, quantidade, fornecedor, data, valor, isPago
            });
            res.status(201);
            return res.json(movimentacao);
        }
        catch (error) {
            console.log(error);
        }
    },
    async index(req, res) {
        const { admId } = req.body;
        try {
            const movimentacoes = await Movimentacoes.find({ "admId": admId });
            return res.json(movimentacoes);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send("erro ao buscar dados.");
        }
    },
    async findById(req, res) {
        const  movimentacaoId = req.params.id;
        if(movimentacaoId) {
            try {
                const movimentacoes = await Movimentacoes.findOne({ "_id": movimentacaoId });
                return res.json(movimentacoes);
            }
            catch (error) {
                console.log(error);
                return res.status(500).send("erro ao buscar dados.");
            }
        } else {
            return res.status(400).send("id nulo");
        }
    },
    async update(req, res) {
        const { _id, quantidade, fornecedor, valor, isPago } = req.body;
        try {
            movimentacao = await Movimentacoes.findOne({ '_id': _id });
            console.log(movimentacao);
            if (quantidade) movimentacao.quantidade = quantidade;
            if (fornecedor) movimentacao.fornecedor = fornecedor;
            if (valor) movimentacao.valor = valor;
            movimentacao.isPago = isPago;
            try {
                await Movimentacoes.updateOne({ '_id': _id }, movimentacao);
                return res.json(movimentacao);
            } catch (error) {
                console.log(error)
                return res.status(500).send("falha ao atualizar.")
            }

        } catch (error) {
            return res.status(404).send("movimentação não encontrada.");
        }
    },
    async delete(req, res) {
        const { _id } = req.body;
        try {
            movimentacao = await Movimentacoes.findOne({ '_id': _id });
            console.log(movimentacao)
            if (!movimentacao) return res.status(409).send("movimentação já excluída.");
            try {
                await Movimentacoes.deleteOne({ '_id': _id });
                return res.status(200).send("movimentação excluída com sucesso.");
            } catch (error) {
                res.status(500).send("erro ao excluir a movimentação.");
            }
        } catch (error) {
            res.status(404).send("movimentação não encontrada.");
        }
    },
}