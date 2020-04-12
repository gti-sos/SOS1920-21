const cool = require('cool-ascii-faces');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const trafficInjuriesAPI = require(path.join(__dirname, 'APIs/traffic-injuries'));
const drivinglicensesAPI = require(path.join(__dirname, 'APIs/driving-licenses'));

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


// ==================================================

app.listen(port, () => {
    console.log('Server ready!');
});

console.log('Starting server...');
console.log(cool());

// ==================================================



// ==================================================
// =============== Start josdeonc =================
// ==================================================

app.get('/api/v1/public-transports/docs', (req, res) => {
    res.redirect('https://documenter.getpostman.com/view/10637326/SzYUaM2s');
});

var initial_public_transports = [
    {
        aut_com: 'andalusia',
        year: 2016,
        underground_rate_per_thousand: 6338,
        underground_compared_with_last_year_porcentage: 1.2,
        commuter_train_rate_per_thousand: 1514,
        commuter_train_compared_with_last_year_porcentage: 6.2,
        bus_rate_per_thousand: 18576,
        bus_compared_with_last_year_porcentage: 1.2
    },
    {
        aut_com: 'aragon',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 10091,
        bus_compared_with_last_year_porcentage: -3.3
    },
    {
        aut_com: 'asturias',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 2696,
        bus_compared_with_last_year_porcentage: 1.2
    },
    {
        aut_com: 'canary-islands',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 4746,
        bus_compared_with_last_year_porcentage: 3.3
    },
    {
        aut_com: 'castile-leon',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5647,
        bus_compared_with_last_year_porcentage: 1.8
    },
    {
        aut_com: 'castile-la-mancha',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1654,
        bus_compared_with_last_year_porcentage: 3.1
    },
    {
        aut_com: 'catalonia',
        year: 2016,
        underground_rate_per_thousand: 18274,
        underground_compared_with_last_year_porcentage: -5.2,
        commuter_train_rate_per_thousand: 30678,
        commuter_train_compared_with_last_year_porcentage: -5.2,
        bus_rate_per_thousand: 24942,
        bus_compared_with_last_year_porcentage: 6.4
    },
    {
        aut_com: 'valencia',
        year: 2016,
        underground_rate_per_thousand: 8301,
        underground_compared_with_last_year_porcentage: 3.3,
        commuter_train_rate_per_thousand: 5240,
        commuter_train_compared_with_last_year_porcentage: 3.3,
        bus_rate_per_thousand: 11623,
        bus_compared_with_last_year_porcentage: 4.9
    },
    {
        aut_com: 'extremadura',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 917,
        bus_compared_with_last_year_porcentage: 1.7
    },
    {
        aut_com: 'galicia',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5078,
        bus_compared_with_last_year_porcentage: -0.9
    },
    {
        aut_com: 'madrid',
        year: 2016,
        underground_rate_per_thousand: 37930,
        underground_compared_with_last_year_porcentage: 4.3,
        commuter_train_rate_per_thousand: 49535,
        commuter_train_compared_with_last_year_porcentage: 4.3,
        bus_rate_per_thousand: 42752,
        bus_compared_with_last_year_porcentage: 9.3
    },
    {
        aut_com: 'murcia',
        year: 2016,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1408,
        bus_compared_with_last_year_porcentage: 0.4
    },
    {
        aut_com: 'basque-country',
        year: 2016,
        underground_rate_per_thousand: 3139,
        underground_compared_with_last_year_porcentage: -0.9,
        commuter_train_rate_per_thousand: 7414,
        commuter_train_compared_with_last_year_porcentage: 0.8,
        bus_rate_per_thousand: 7307,
        bus_compared_with_last_year_porcentage: 1.8
    },
    {
        aut_com: 'andalusia',
        year: 2017,
        underground_rate_per_thousand: 7196,
        underground_compared_with_last_year_porcentage: -0.1,
        commuter_train_rate_per_thousand: 2053,
        commuter_train_compared_with_last_year_porcentage: 13,
        bus_rate_per_thousand: 19582,
        bus_compared_with_last_year_porcentage: 0.5
    },
    {
        aut_com: 'aragon',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 10623,
        bus_compared_with_last_year_porcentage: 0.8
    },
    {
        aut_com: 'asturias',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 2783,
        bus_compared_with_last_year_porcentage: -1
    },
    {
        aut_com: 'canary-islands',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5156,
        bus_compared_with_last_year_porcentage: 1.1
    },
    {
        aut_com: 'castile-leon',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 6043,
        bus_compared_with_last_year_porcentage: 2
    },
    {
        aut_com: 'castile-la-mancha',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1700,
        bus_compared_with_last_year_porcentage: -0.5
    },
    {
        aut_com: 'catalonia',
        year: 2017,
        underground_rate_per_thousand: 18056,
        underground_compared_with_last_year_porcentage: -0.8,
        commuter_train_rate_per_thousand: 33943,
        commuter_train_compared_with_last_year_porcentage: 0.9,
        bus_rate_per_thousand: 25150,
        bus_compared_with_last_year_porcentage: -0.9
    },
    {
        aut_com: 'valencia',
        year: 2017,
        underground_rate_per_thousand: 8657,
        underground_compared_with_last_year_porcentage: 1.4,
        commuter_train_rate_per_thousand: 5712,
        commuter_train_compared_with_last_year_porcentage: 1.5,
        bus_rate_per_thousand: 12232,
        bus_compared_with_last_year_porcentage: 4
    },
    {
        aut_com: 'extremadura',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1068,
        bus_compared_with_last_year_porcentage: 1.3
    },
    {
        aut_com: 'galicia',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5479,
        bus_compared_with_last_year_porcentage: 0.9
    },
    {
        aut_com: 'madrid',
        year: 2017,
        underground_rate_per_thousand: 38138,
        underground_compared_with_last_year_porcentage: 0.9,
        commuter_train_rate_per_thousand: 57721,
        commuter_train_compared_with_last_year_porcentage: 7.6,
        bus_rate_per_thousand: 43954,
        bus_compared_with_last_year_porcentage: 1.1
    },
    {
        aut_com: 'murcia',
        year: 2017,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1913,
        bus_compared_with_last_year_porcentage: 6
    },
    {
        aut_com: 'basque-country',
        year: 2017,
        underground_rate_per_thousand: 3290,
        underground_compared_with_last_year_porcentage: 0.1,
        commuter_train_rate_per_thousand: 7936,
        commuter_train_compared_with_last_year_porcentage: 1.4,
        bus_rate_per_thousand: 7840,
        bus_compared_with_last_year_porcentage: 1.7
    },
    {
        aut_com: 'andalusia',
        year: 2018,
        underground_rate_per_thousand: 11822,
        underground_compared_with_last_year_porcentage: 8.3,
        commuter_train_rate_per_thousand: 2307,
        commuter_train_compared_with_last_year_porcentage: 19.2,
        bus_rate_per_thousand: 21813,
        bus_compared_with_last_year_porcentage: 3.9
    },
    {
        aut_com: 'aragon',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 12468,
        bus_compared_with_last_year_porcentage: 2.3
    },
    {
        aut_com: 'asturias',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 2941,
        bus_compared_with_last_year_porcentage: 2.4
    },
    {
        aut_com: 'canary-islands',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5563,
        bus_compared_with_last_year_porcentage: 5.9
    },
    {
        aut_com: 'castile-leon',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 6292,
        bus_compared_with_last_year_porcentage: 5
    },
    {
        aut_com: 'castile-la-mancha',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1785,
        bus_compared_with_last_year_porcentage: 0.6
    },
    {
        aut_com: 'catalonia',
        year: 2018,
        underground_rate_per_thousand: 20709,
        underground_compared_with_last_year_porcentage: 11.8,
        commuter_train_rate_per_thousand: 37935,
        commuter_train_compared_with_last_year_porcentage: 11.8,
        bus_rate_per_thousand: 28697,
        bus_compared_with_last_year_porcentage: 11.2
    },
    {
        aut_com: 'valencia',
        year: 2018,
        underground_rate_per_thousand: 8679,
        underground_compared_with_last_year_porcentage: 0.9,
        commuter_train_rate_per_thousand: 6046,
        commuter_train_compared_with_last_year_porcentage: 7.8,
        bus_rate_per_thousand: 13097,
        bus_compared_with_last_year_porcentage: 1.8
    },
    {
        aut_com: 'extremadura',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1121,
        bus_compared_with_last_year_porcentage: 1.5
    },
    {
        aut_com: 'galicia',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5932,
        bus_compared_with_last_year_porcentage: 5.4
    },
    {
        aut_com: 'madrid',
        year: 2018,
        underground_rate_per_thousand: 40495,
        underground_compared_with_last_year_porcentage: 3.2,
        commuter_train_rate_per_thousand: 62907,
        commuter_train_compared_with_last_year_porcentage: 6.3,
        bus_rate_per_thousand: 46573,
        bus_compared_with_last_year_porcentage: 3.6
    },
    {
        aut_com: 'murcia',
        year: 2018,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 2086,
        bus_compared_with_last_year_porcentage: 7.7
    },
    {
        aut_com: 'basque-country',
        year: 2018,
        underground_rate_per_thousand: 3422,
        underground_compared_with_last_year_porcentage: 3,
        commuter_train_rate_per_thousand: 8220,
        commuter_train_compared_with_last_year_porcentage: 1.9,
        bus_rate_per_thousand: 8096,
        bus_compared_with_last_year_porcentage: 3.3
    },
    {
        aut_com: 'andalusia',
        year: 2019,
        underground_rate_per_thousand: 9396,
        underground_compared_with_last_year_porcentage: 4,
        commuter_train_rate_per_thousand: 1437,
        commuter_train_compared_with_last_year_porcentage: 15.9,
        bus_rate_per_thousand: 18.479,
        bus_compared_with_last_year_porcentage: 5.8
    },
    {
        aut_com: 'aragon',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 9.271,
        bus_compared_with_last_year_porcentage: 3.8
    },
    {
        aut_com: 'asturias',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 2.843,
        bus_compared_with_last_year_porcentage: 6.4
    },
    {
        aut_com: 'canary-islands',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5.384,
        bus_compared_with_last_year_porcentage: 10.9
    },
    {
        aut_com: 'castile-leon',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5.135,
        bus_compared_with_last_year_porcentage: 3.9
    },
    {
        aut_com: 'castile-la-mancha',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1.508,
        bus_compared_with_last_year_porcentage: 4.9
    },
    {
        aut_com: 'catalonia',
        year: 2019,
        underground_rate_per_thousand: 19986,
        underground_compared_with_last_year_porcentage: 6.9,
        commuter_train_rate_per_thousand: 32808,
        commuter_train_compared_with_last_year_porcentage: 4.5,
        bus_rate_per_thousand: 27.331,
        bus_compared_with_last_year_porcentage: 6.7
    },
    {
        aut_com: 'valencia',
        year: 2019,
        underground_rate_per_thousand: 7868,
        underground_compared_with_last_year_porcentage: 2,
        commuter_train_rate_per_thousand: 5363,
        commuter_train_compared_with_last_year_porcentage: 2.6,
        bus_rate_per_thousand: 12.464,
        bus_compared_with_last_year_porcentage: 2.4
    },
    {
        aut_com: 'extremadura',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 762,
        bus_compared_with_last_year_porcentage: 7.9
    },
    {
        aut_com: 'galicia',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 5.196,
        bus_compared_with_last_year_porcentage: 5.5
    },
    {
        aut_com: 'madrid',
        year: 2019,
        underground_rate_per_thousand: 32858,
        underground_compared_with_last_year_porcentage: 7.3,
        commuter_train_rate_per_thousand: 50950,
        commuter_train_compared_with_last_year_porcentage: 4.5,
        bus_rate_per_thousand: 37.5,
        bus_compared_with_last_year_porcentage: 7.3
    },
    {
        aut_com: 'murcia',
        year: 2019,
        underground_rate_per_thousand: 0,
        underground_compared_with_last_year_porcentage: 0,
        commuter_train_rate_per_thousand: 0,
        commuter_train_compared_with_last_year_porcentage: 0,
        bus_rate_per_thousand: 1.322,
        bus_compared_with_last_year_porcentage: 6.1
    },
    {
        aut_com: 'basque-country',
        year: 2019,
        underground_rate_per_thousand: 2630,
        underground_compared_with_last_year_porcentage: -0.1,
        commuter_train_rate_per_thousand: 6727,
        commuter_train_compared_with_last_year_porcentage: 3,
        bus_rate_per_thousand: 7.255,
        bus_compared_with_last_year_porcentage: 2
    }
];

// GET LOAD INITIAL

app.get(BASE_API_URL + 'loadInitialData', (req, res) => {
    db.insert(initial_public_transports);
    res.sendStatus(200);
    console.log(
        'Initial Public Trasport loaded:' + JSON.stringify(initial_public_transports, null, 2)
    );
});
/* 
var public_transports_aux = public_transports;
 
// GET LOAD INITIAL
 
app.get(BASE_API_URL+"/public_transports/loadInitialData", (req,res) =>{
	public_transports = public_transports_aux;
	res.send(JSON.stringify(public_transports,null,2));
	console.log("Data sent:"+JSON.stringify(public_transports,null,2));
}); */

//GET PUBLIC_TRANSPORTS

app.get(BASE_API_URL + '/public_transports', (req, res) => {
    res.send(JSON.stringify(public_transports, null, 2));
});

//POST PUBLIC_TRANSPORTS

app.post(BASE_API_URL + '/public_transports', (req, res) => {
    var newPublicTransports = req.body;

    if (newPublicTransports == '' || newPublicTransports.aut_com == null) {
        res.sendStatus(400, 'BAD REQUEST');
    } else {
        public_transports.push(newPublicTransports);
        res.sendStatus(201, 'CREATED');
    }
});

//DELETE PUBLIC_TRANSPORTS

app.delete(BASE_API_URL + '/public_transports', (req, res) => {
    if (public_transports.length >= 1) {
        public_transports = [];
        res.sendStatus(200, 'ALL DELETED');
    } else {
        res.sendStatus(400, 'BAD REQUEST');
    }
});

//GET PUBLIC_TRANSPORTS/XXXX

app.get(BASE_API_URL + '/public_transports/:aut_com', (req, res) => {
    var aut_com = req.params.aut_com;

    var filteredPublicTransports = public_transports.filter(c => {
        return c.aut_com == aut_com;
    });

    if (filteredPublicTransports.length >= 1) {
        res.send(filteredPublicTransports[0]);
    } else {
        res.sendStatus(404, 'NOT FOUND');
    }
});

//PUT PUBLIC_TRANSPORTS/XXXX

app.put(BASE_API_URL + '/public_transports/:aut_com/:year', (req, res) => {
    var newPublicTransports = req.body;
    if (
        newPublicTransports.aut_com == null ||
        newPublicTransports.year == null ||
        newPublicTransports.underground_rate_per_thousand == null ||
        newPublicTransports.underground_compared_with_last_year_porcentage == null ||
        newPublicTransports.commuter_train_rate_per_thousand == null ||
        newPublicTransports.commuter_train_compared_with_last_year_porcentage == null ||
        newPublicTransports.bus_rate_per_thousand == null ||
        newPublicTransports.bus_compared_with_last_year_porcentage == null ||
        newPublicTransports == ''
    ) {
        res.sendStatus(400, 'BAD REQUEST');
    } else {
        var newPublicTransports = public_transports.filter(v => {
            return v.auto_com != public_transports.auto_com && v.year != public_transports.year;
        });
        public_transports = newPublicTransports;
        public_transports.push(public_transports);
        res.sendStatus(200, 'UPDATE OK');
    }
});

//DELETE PUBLIC_TRANSPORTS/XXXX

app.delete(BASE_API_URL + '/public_transports/:aut_com', (req, res) => {
    var aut_com = req.params.aut_com;

    var filteredPublicTransports = public_transports.filter(c => {
        return c.aut_com != aut_com;
    });

    if (filteredPublicTransports.length < public_transports.length) {
        public_transports = filteredPublicTransports;
        res.sendStatus(200);
    } else {
        res.sendStatus(404, 'NOT FOUND');
    }
});

//POST PUBLIC_TRANSPORTS/XXXX

app.post(BASE_API_URL + '/public_transports/:aut_com', (req, res) => {
    res.sendStatus(405, 'METHOD NOT ALLOWED');
});

//PUT PUBLIC_TRANSPORTS/XXXX

app.put(BASE_API_URL + '/public_transports', (req, res) => {
    res.sendStatus(405, 'METHOD NOT ALLOWED');
});