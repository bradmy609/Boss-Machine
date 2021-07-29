const express = require('express');
const database = require('./db');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    const allMeetings = database.getAllFromDatabase('meetings');
    res.send(allMeetings);
});

meetingsRouter.post('/', (req, res, next) => {
    const meetingObject = database.createMeeting();
    const newMeeting = database.addToDatabase('meetings', meetingObject);
    res.status(201).send(newMeeting);
});

meetingsRouter.delete('/', (req, res, next) => {
    const deleted = database.deleteAllFromDatabase('meetings');
    if (deleted) {
        res.status(204).send(deleted);
    } else { res.status(404).send() }
});

module.exports = meetingsRouter;
