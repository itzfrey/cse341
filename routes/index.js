const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.freyRoute);

routes.get('/delaw', lesson1Controller.delawRoute);

routes.get('/dija', lesson1Controller.dijaRoute);


module.exports = routes;