const express = require('express');
const routes = express.Router();

const StockController = require('./controllers/StockController');

routes.post('/signup', StockController.signup);
routes.post('/login', StockController.login);

module.exports = routes;