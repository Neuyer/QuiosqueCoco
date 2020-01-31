const { Router } = require('express');
const MovimentosController = require('../controllers/MovimentosController');
const ADMController = require('../controllers/ADMController');
const Verify = require('../services/VerifyService');
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const routes = Router();

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.get('/notas', Verify.verify, MovimentosController.index);

routes.get('/notas/:id', Verify.verify, MovimentosController.findById);

routes.post('/notas', Verify.verify, MovimentosController.create);

routes.patch('/notas', Verify.verify, MovimentosController.update);

routes.delete('/notas', Verify.verify, MovimentosController.delete);

routes.post('/signin', ADMController.signIn);

routes.post('/login', ADMController.logIn);


module.exports = routes;