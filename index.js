const cool = require('cool-ascii-faces');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const drivinglicensesAPI = require(path.join(__dirname, 'APIs/driving-licenses'));
const trafficInjuriesAPI = require(path.join(__dirname, 'APIs/traffic-injuries'));
const publicTransportsAPI = require(path.join(__dirname, 'APIs/public-transports'));

const port = process.env.PORT || 80;

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./public'));

app.get('/cool', (request, response) => {
    response.send('<html>' + cool() + '</html>');
});

const BASE_API_URL = '/api/v1';

// ==================================================
// =============== Start antpritag ==================
// ==================================================

drivinglicensesAPI(app, express, bodyParser, path);

// ==================================================
// =============== Start juagommat ==================
// ==================================================

trafficInjuriesAPI(app, express, bodyParser, path);

// ==================================================
// =============== Start josdeonc ===================
// ==================================================

publicTransportsAPI(app, express, bodyParser, path);

// ==================================================

app.listen(port, () => {
    console.log('Server ready!');
});

console.log('Starting server...');
console.log(cool());