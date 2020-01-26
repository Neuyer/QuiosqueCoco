const { Router } = require('express');
const MovimentosController = require('../controllers/MovimentosController');
const LoginController = require('../controllers/LoginController');

const routes = Router();

routes.get('/movimentos', MovimentosController.index);

routes.post('/movimentos', MovimentosController.criar);

routes.post('/sigin', LoginController.signIn);

routes.post('/login', LoginController.logIn);


module.exports = routes;