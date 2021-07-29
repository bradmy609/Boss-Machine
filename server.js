const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const cors = require('cors');


module.exports = app;

const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());


app.use(morgan('dev'));
// Add middleware for parsing request bodies here:
app.use(bodyParser.json());

//middleware for logging requests/response details
app.use(morgan('dev'));

app.use(errorhandler());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
const homeRouter = require('./server/homeRouter');

app.use(homeRouter);
app.use('/api', apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}
