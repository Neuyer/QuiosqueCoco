const { Router } = require('express');
const MovimentosController = require('../controllers/MovimentosController');

const routes = Router();

routes.get('/movimentos', MovimentosController.index);

routes.post('/movimentos', MovimentosController.criar);


module.exports = routes;