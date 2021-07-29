const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');
const database = require('./db');
const ideasRouter = express.Router();

const checkMillionDollarIdea = require('./checkMillionDollarIdea');
ideasRouter.post('/', checkMillionDollarIdea);

ideasRouter.get('/', (req, res, next) => {
    const allIdeas = database.getAllFromDatabase('ideas');
    res.send(allIdeas);
});

ideasRouter.post('/', (req, res, next) => {
    console.log(req.body);
    const ideaObject = req.body;
    const newIdea = database.addToDatabase('ideas', ideaObject);
    res.status(201).send(newIdea);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    const id = String(req.params.ideaId);
    const ideaById = database.getFromDatabaseById('ideas', id);
    if (ideaById) {
        res.send(ideaById);
    } else { res.status(404).send() }
});

ideasRouter.put('/:ideaId', (req, res, next) => {
    const id = String(req.params.ideaId);
    const ideaObject = req.body;
    ideaObject.id = id;
    const ideaById = database.updateInstanceInDatabase('ideas', ideaObject);
    if (ideaById) {
        res.send(ideaById);
    } else { res.status(404).send() }
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const id = req.params.ideaId;
    const deleted = database.deleteFromDatabasebyId('ideas', id);
    if (deleted) {
        res.status(204).send(deleted);
    } else { res.status(404).send() }
});

module.exports = ideasRouter;
