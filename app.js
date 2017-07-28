const express = require('express');
const bodyParser = require('body-parser');

// Init app
const app = express();
// Middelwares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// libs
const config = require('./config');
const db = require('./models/db');
const routes = require('./routes')(app);
// Other variables
const port = config.port;

// Error handling
app.use((err, req, res, next) => {
  res.status(422).send(err._message);
  next();
});

app.listen(port, err => console.log( err ? 'Error executing app.js' : `Listening app on port ${port}`));
