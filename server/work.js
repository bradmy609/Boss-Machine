const express = require('express');
const database = require('./db');
const workRouter = express.Router();

workRouter.get('/', (req, res, next) => {
    const minionId = String(req.minionId);
    const minion = database.getFromDatabaseById('minions', minionId);
    if (minion) {
        const workList = database.getAllFromDatabase('work');
        const minionWorkList = workList.filter(element => {
            return (element.minionId === minionId)
        })
        res.send(minionWorkList);
    } else {
        res.status(404).send();
    }
});

workRouter.put('/:workId', (req, res, next) => {
    const minionId = req.minionId;
    const workId = String(req.params.workId);
    const newWorkObject = req.body;
    const minion = database.getFromDatabaseById('minions', minionId);
 
    if (!database.getFromDatabaseById('work', workId)) {
        res.status(404).send();
    }
    if (minion) {
        newWorkObject.id = workId;
        if (newWorkObject.minionId !== minionId) {
            res.status(400).send();
        } else {
            const updatedWorkObject = database.updateInstanceInDatabase('work', newWorkObject);
            if (updatedWorkObject) {
                res.send(updatedWorkObject);
            } else {
                res.status(400).send();
            }
        }
    } 
});

workRouter.post('/', (req, res, next) => {
    const minionId = req.minionId;
    const newWorkObject = req.body;
    const minion = database.getFromDatabaseById('minions', minionId);
    if (!minion) {
        res.status(400).send();
    }
    newWorkObject.minionId = minionId;
    console.log(newWorkObject);
    const createdWorkObject = database.addToDatabase('work', newWorkObject);
    if (createdWorkObject) {
        res.status(201).send(createdWorkObject);
    }
    res.status(404).send();
});

workRouter.delete('/:workId', (req, res, next) => {
    const minionId = req.minionId;
    const workId = String(req.params.workId);
    const minion = database.getFromDatabaseById('minions', minionId);
    if (!minion) {
        res.status(404).send();
    }
    const deleted = database.deleteFromDatabasebyId('work', workId);
    if (deleted) {
        res.status(204).send(deleted)
    } else {
        res.status(404).send();
    }
});


module.exports = workRouter;
