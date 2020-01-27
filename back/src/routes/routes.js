const { Router } = require('express');
const MovimentosController = require('../controllers/MovimentosController');
const ADMController = require('../controllers/ADMController');
const Verify = require('../services/VerifyService');
var bodyParser = require('body-parser');
const routes = Router();

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());



routes.get('/movimentos',Verify.verify, MovimentosController.index);

routes.post('/movimentos', MovimentosController.criar);

routes.post('/signin', ADMController.signIn);

routes.post('/login', ADMController.logIn);


module.exports = routes;