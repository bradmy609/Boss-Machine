const express = require('express');
const apiRouter = express.Router();
const database = require('./db');

/* DB exported functions
database models: 'minions', 'ideas', 'meetings', 'work'

  createMeeting,
  getAllFromDatabase(modelName)
  getFromDatabaseById(modelName, stringId)
  addToDatabase(modelName, newObject)
  updateInstanceInDatabase(modelName, updateObject)
  deleteFromDatabasebyId(modelName, stringId)
  deleteAllFromDatabase(modelName)
  */

const minionsRouter = require('./minions');
apiRouter.use('/minions', minionsRouter);

const ideasRouter = require('./ideas');
apiRouter.use('/ideas', ideasRouter);

const meetingsRouter = require('./meetings');
apiRouter.use('/meetings', meetingsRouter);


module.exports = apiRouter;
