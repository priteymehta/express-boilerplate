const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

/** GLOBAL VARIABLES */
// express instance
const app = express();

const corsOptions = {
    origin: 'http://xyz.com'
};

const headerOptions = {
    'contentSecurityPolicy': false,
    'Referrer-Policy': 'no-referrer',
    'X-Frame-Options': 'SAMEORIGIN'
};

/** MIDDLEWARES */
app.use(bodyParser.json()); // parse body params req.body
app.use(cors(corsOptions)); // set cors middleware and custom cors options
app.use(helmet(headerOptions)); // set custom headers
app.set('Content-Type', false);


app.get('/', function (req, res) {
    console.log(app.get('X-Do-Not-Track'));
    res.send('send');
})

const { port, env } = require('../config/variables.js');

app.listen(port, () => 
console.log(`Server started. Listening to ${port} (${env})`));

