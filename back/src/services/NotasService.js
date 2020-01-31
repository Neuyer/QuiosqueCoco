const Notas = require('../models/MovimentacaoSchema');

module.exports = {
    async create(req, res) {
        const { admId, quantidade, fornecedor, valor, isPago } = req.body;
        const data = new Date();
        try {
            nota = await Notas.create({
                admId, quantidade, fornecedor, data, valor, isPago
            });
            res.status(201);
            return res.json(nota);
        }
        catch (error) {
            console.log(error);
        }
    },
    async index(req, res) {
        const { admId } = req.body;
        try {
            const Notas = await Notas.find({ "admId": admId });
            return res.json(Notas);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send("erro ao buscar dados.");
        }
    },
    async findById(req, res) {
        const notaId = req.params.id;
        if (notaId) {
            try {
                const Notas = await Notas.findOne({ "_id": notaId });
                return res.json(Notas);
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
        const { quantidade, fornecedor, valor, isPago } = req.body;
        const notaId = req.params.id;
        if (notaId) {
            try {
                nota = await Notas.findOne({ '_id': notaId });
                console.log(nota);
                if (quantidade) nota.quantidade = quantidade;
                if (fornecedor) nota.fornecedor = fornecedor;
                if (valor) nota.valor = valor;
                nota.isPago = isPago;
                try {
                    await Notas.updateOne({ '_id': _id }, nota);
                    return res.json(nota);
                } catch (error) {
                    console.log(error)
                    return res.status(500).send("falha ao atualizar.")
                }
            } catch (error) {
                return res.status(404).send("movimentação não encontrada.");
            }
        } else {
            return res.status(400).send("id nulo");
        }
    },
    async delete(req, res) {
        const { _id } = req.body;
        try {
            nota = await Notas.findOne({ '_id': _id });
            console.log(nota)
            if (!nota) return res.status(409).send("movimentação já excluída.");
            try {
                await Notas.deleteOne({ '_id': _id });
                return res.status(200).send("movimentação excluída com sucesso.");
            } catch (error) {
                res.status(500).send("erro ao excluir a movimentação.");
            }
        } catch (error) {
            res.status(404).send("movimentação não encontrada.");
        }
    },
}