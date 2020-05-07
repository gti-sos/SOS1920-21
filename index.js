const cool = require('cool-ascii-faces');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const drivinglicensesAPI = require(path.join(__dirname, 'src/back/driving-licenses'));
const trafficInjuriesAPIV1 = require(path.join(__dirname, 'src/back/traffic-injuries/v1'));
const trafficInjuriesAPIV2 = require(path.join(__dirname, 'src/back/traffic-injuries/v2'));
const publicTransportsAPI = require(path.join(__dirname, 'src/back/public-transports'));

const port = process.env.PORT || 80;
const app = express();

app.use(bodyParser.json());

app.use('/', express.static('./public'));

// ==================================================
// ================== antpritag =====================
// ==================================================

drivinglicensesAPI(app, express, bodyParser, path);

// ==================================================
// ================== juagommat =====================
// ==================================================

trafficInjuriesAPIV1(app, express, bodyParser, path);
trafficInjuriesAPIV2(app, express, bodyParser, path);

// ==================================================
// ================== josdeonc ======================
// ==================================================

publicTransportsAPI(app, express, bodyParser, path);

// ==================================================

app.listen(port, () => {
    console.log('Server ready!');
});

console.log('Starting server...');
console.log(cool());