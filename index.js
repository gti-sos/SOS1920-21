const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const drivinglicensesAPIV1 = require(path.join(__dirname, 'src/back/driving-licenses/v1'));
const drivinglicensesAPIV2 = require(path.join(__dirname, 'src/back/driving-licenses/v2'))
const trafficInjuriesAPIV1 = require(path.join(__dirname, 'src/back/traffic-injuries/v1'));
const trafficInjuriesAPIV2 = require(path.join(__dirname, 'src/back/traffic-injuries/v2'));

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/', express.static('./public'));

// ==================================================
// ================== antpritag =====================
// ==================================================

drivinglicensesAPIV1(app, express, bodyParser, path);
drivinglicensesAPIV2(app, express, bodyParser, path);

// ==================================================
// ================== juagommat =====================
// ==================================================

trafficInjuriesAPIV1(app, express, bodyParser, path);
trafficInjuriesAPIV2(app, express, bodyParser, path);

// ==================================================

app.listen(port, () => {
    console.log('Server ready!');
    console.log('Running on http://localhost:3000')
});

console.log('Starting server...');