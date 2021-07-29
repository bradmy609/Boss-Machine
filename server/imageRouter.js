const express = require('express');
const homeRouter = express.Router();
const database = require('./db');

homeRouter.get('/', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/index.html');
});

homeRouter.get('/public/css/style.css', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/css/style.css');
});

homeRouter.get('/public/css/reset.css', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/css/reset.css');
});

homeRouter.get('/public/js/bundle.js', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/js/bundle.js');
});

homeRouter.get('/public/img/favicon.ico', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/favicon.ico');
});

homeRouter.get('/public/img/logo.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/logo.svg');
});

homeRouter.get('/public/img/minion_icon_home.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/minion_icon_home.svg');
});

homeRouter.get('/public/img/minion_icon_money.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/minion_icon_money.svg');
});

homeRouter.get('/public/img/add_button.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/add_button.svg');
});

homeRouter.get('/public/img/arrow.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/arrow.svg');
});

homeRouter.get('/public/img/minion.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/minion.svg');
});

homeRouter.get('/public/img/x_button.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/x_button.svg');
});

homeRouter.get('/public/img/x_button-trans.svg', (req, res, next) => {
    res.sendFile('C:/Users/Brad/OneDrive/Documents/Projects/Boss Machine/public/img/x_button-trans.svg');
});

module.exports = homeRouter;