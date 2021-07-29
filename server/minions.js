const express = require('express');
const database = require('./db');
const minionsRouter = express.Router();

minionsRouter.use('/:minionId', (req, res, next) => {
    if (Number(req.params.minionId)) {
        req.minionId = String(req.params.minionId);
        next();
    } else {
        next();
    }
})

minionsRouter.get('/', (req, res, next) => {
    const allMinions = database.getAllFromDatabase('minions');
    res.send(allMinions);
});

minionsRouter.post('/', (req, res, next) => {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    const salary = req.body.salary;
    req.body.salary = Number(salary);
    const newMinion = database.addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
    const id = String(req.params.minionId);
    const minionById = database.getFromDatabaseById('minions', id);
    if (minionById) { 
        res.send(minionById);
    } else {
        res.status(404).send();
    }
});

minionsRouter.put('/:minionsId', (req, res, next) => {
    const id = String(req.params.minionsId);
    const newMinionObject = req.body;
    newMinionObject.id = id;
    const minionById = database.updateInstanceInDatabase('minions', newMinionObject);
    if (minionById) {
        res.send(minionById);
    } else { res.status(404).send() }
});

minionsRouter.delete('/:minionsId', (req, res, next) => {
    console.log(req.params)
    const id = String(req.params.minionsId);
    console.log(id);
    const deleted = database.deleteFromDatabasebyId('minions', id);
    if (deleted) {
        res.status(204).send(deleted);
    } else { res.status(404).send() }
});

const workRouter = require('./work');
minionsRouter.use('/:minionId/work', workRouter);

module.exports = minionsRouter;