module.exports = function(app, express, bodyParser, path) {
    console.log('Registering driving-licenses API...');

    const dataStore = require('nedb');

    const dbFileName = path.join(__dirname, '/driving-licenses.json');
    const BASE_API_URL = '/api/v2';

    app.use(bodyParser.json());

    const db = new dataStore({
        filename: dbFileName,
        autoload: true
    });

    /////////////  DATOS ////////////////////////

    var initialDrivingLicenses = [
        {
            aut_com: 'andalusia',
            year: 2018,
            cars_men: 48446,
            cars_women: 46618,
            mot_men: 6505,
            mot_women: 782,
            total_cars: 95064,
            total_mot: 7287,
            rel_cars: 103.92, 
            rel_mot: 831.84
        },
        {
            aut_com: 'andalusia',
            year: 2017,
            cars_men: 37408,
            cars_women: 34766,
            mot_men: 5706,
            mot_women: 784,
            total_cars: 72174,
            total_mot: 6490,
            rel_cars: 107.6,
            rel_mot: 727.81
        },
        {
            aut_com: 'andalusia',
            year: 2016,
            cars_men: 44272,
            cars_women: 41941,
            mot_men: 4629,
            mot_women: 642,
            total_cars: 86213,
            total_mot: 5271,
            rel_cars: 105.56,
            rel_mot: 721.03
        },
        {
            aut_com: 'aragon',
            year: 2018,
            cars_men: 7694,
            cars_women: 6472,
            mot_men: 1034,
            mot_women: 119,
            total_cars: 14166,
            total_mot: 1153,
            rel_cars: 118.88,
            rel_mot: 868.91
        },
        {
            aut_com: 'aragon',
            year: 2017,
            cars_men: 6302,
            cars_women: 5251,
            mot_men: 903,
            mot_women: 86,
            total_cars: 11553,
            total_mot: 989,
            rel_cars: 120.02,
            rel_mot: 1050.0
        },
        {
            aut_com: 'aragon',
            year: 2016,
            cars_men: 7156,
            cars_women: 6008,
            mot_men: 781,
            mot_women: 64,
            total_cars: 13164,
            total_mot: 845,
            rel_cars: 119.11,
            rel_mot: 1220.31
        },
        {
            aut_com: 'asturias',
            year: 2018,
            cars_men: 4549,
            cars_women: 4424,
            mot_men: 742,
            mot_women: 124,
            total_cars: 8973,
            total_mot: 866,
            rel_cars: 102.83,
            rel_mot: 598.39
        },
        {
            aut_com: 'asturias',
            year: 2017,
            cars_men: 3125,
            cars_women: 3012,
            mot_men: 684,
            mot_women: 113,
            total_cars: 6137,
            total_mot: 797,
            rel_cars: 103.75,
            rel_mot: 605.31
        },
        {
            aut_com: 'asturias',
            year: 2016,
            cars_men: 4167,
            cars_women: 4096,
            mot_men: 558,
            mot_women: 69,
            total_cars: 8263,
            total_mot: 627,
            rel_cars: 101.73,
            rel_mot: 808.7
        },
        {
            aut_com: 'cantabria',
            year: 2018,
            cars_men: 2986,
            cars_women: 3019,
            mot_men: 341,
            mot_women: 25,
            total_cars: 6005,
            total_mot: 366,
            rel_cars: 98.91,
            rel_mot: 1364.0
        },
        {
            aut_com: 'cantabria',
            year: 2017,
            cars_men: 2244,
            cars_women: 2135,
            mot_men: 248,
            mot_women: 20,
            total_cars: 4379,
            total_mot: 268,
            rel_cars: 105.11,
            rel_mot: 1240.0
        },
        {
            aut_com: 'cantabria',
            year: 2016,
            cars_men: 2635,
            cars_women: 2431,
            mot_men: 249,
            mot_women: 25,
            total_cars: 5066,
            total_mot: 274,
            rel_cars: 108.39,
            rel_mot: 996.0
        },
        {
            aut_com: 'castile-la-mancha',
            year: 2018,
            cars_men: 17659,
            cars_women: 16818,
            mot_men: 1719,
            mot_women: 176,
            total_cars: 34477,
            total_mot: 1895,
            rel_cars: 105.0,
            rel_mot: 976.7
        },
        {
            aut_com: 'castile-la-mancha',
            year: 2017,
            cars_men: 12492,
            cars_women: 11561,
            mot_men: 1304,
            mot_women: 127,
            total_cars: 24053,
            total_mot: 1431,
            rel_cars: 108.05,
            rel_mot: 1026.77
        },
        {
            aut_com: 'castile-la-mancha',
            year: 2016,
            cars_men: 14874,
            cars_women: 13522,
            mot_men: 871,
            mot_women: 96,
            total_cars: 28396,
            total_mot: 967,
            rel_cars: 110.0,
            rel_mot: 907.29
        },
        {
            aut_com: 'castile-leon',
            year: 2018,
            cars_men: 14289,
            cars_women: 13398,
            mot_men: 1986,
            mot_women: 198,
            total_cars: 27687,
            total_mot: 2184,
            rel_cars: 106.65,
            rel_mot: 1003.03
        },
        {
            aut_com: 'castile-leon',
            year: 2017,
            cars_men: 12271,
            cars_women: 11020,
            mot_men: 1522,
            mot_women: 144,
            total_cars: 23291,
            total_mot: 1666,
            rel_cars: 111.35,
            rel_mot: 1056.94
        },
        {
            aut_com: 'castile-leon',
            year: 2016,
            cars_men: 12923,
            cars_women: 11954,
            mot_men: 1227,
            mot_women: 105,
            total_cars: 24877,
            total_mot: 1332,
            rel_cars: 108.11,
            rel_mot: 1168.57
        },
        {
            aut_com: 'catalonia',
            year: 2018,
            cars_men: 42653,
            cars_women: 39195,
            mot_men: 7341,
            mot_women: 995,
            total_cars: 81848,
            total_mot: 8336,
            rel_cars: 108.82,
            rel_mot: 737.79
        },
        {
            aut_com: 'catalonia',
            year: 2017,
            cars_men: 35051,
            cars_women: 32160,
            mot_men: 6823,
            mot_women: 901,
            total_cars: 67211,
            total_mot: 7724,
            rel_cars: 108.99,
            rel_mot: 757.27
        },
        {
            aut_com: 'catalonia',
            year: 2016,
            cars_men: 40976,
            cars_women: 38027,
            mot_men: 5865,
            mot_women: 815,
            total_cars: 79003,
            total_mot: 6680,
            rel_cars: 107.76,
            rel_mot: 719.63
        },
        {
            aut_com: 'ceuta',
            year: 2018,
            cars_men: 420,
            cars_women: 501,
            mot_men: 102,
            mot_women: 7,
            total_cars: 921,
            total_mot: 109,
            rel_cars: 83.83,
            rel_mot: 1457.14
        },
        {
            aut_com: 'ceuta',
            year: 2017,
            cars_men: 535,
            cars_women: 460,
            mot_men: 137,
            mot_women: 9,
            total_cars: 995,
            total_mot: 146,
            rel_cars: 116.3,
            rel_mot: 1522.22
        },
        {
            aut_com: 'ceuta',
            year: 2016,
            cars_men: 478,
            cars_women: 498,
            mot_men: 96,
            mot_women: 2,
            total_cars: 976,
            total_mot: 98,
            rel_cars: 95.98,
            rel_mot: 4800.0
        },
        {
            aut_com: 'extremadura',
            year: 2018,
            cars_men: 5315,
            cars_women: 5351,
            mot_men: 602,
            mot_women: 48,
            total_cars: 10666,
            total_mot: 650,
            rel_cars: 99.33,
            rel_mot: 1254.17
        },
        {
            aut_com: 'extremadura',
            year: 2017,
            cars_men: 5340,
            cars_women: 4461,
            mot_men: 504,
            mot_women: 47,
            total_cars: 9801,
            total_mot: 551,
            rel_cars: 119.7,
            rel_mot: 1072.34
        },
        {
            aut_com: 'extremadura',
            year: 2016,
            cars_men: 5802,
            cars_women: 5082,
            mot_men: 441,
            mot_women: 25,
            total_cars: 10884,
            total_mot: 466,
            rel_cars: 114.17,
            rel_mot: 1764.0
        },
        {
            aut_com: 'galicia',
            year: 2018,
            cars_men: 13652,
            cars_women: 12708,
            mot_men: 2188,
            mot_women: 329,
            total_cars: 26360,
            total_mot: 2517,
            rel_cars: 107.43,
            rel_mot: 665.05
        },
        {
            aut_com: 'galicia',
            year: 2017,
            cars_men: 10579,
            cars_women: 9825,
            mot_men: 2111,
            mot_women: 248,
            total_cars: 20404,
            total_mot: 2359,
            rel_cars: 107.67,
            rel_mot: 851.21
        },
        {
            aut_com: 'galicia',
            year: 2016,
            cars_men: 12644,
            cars_women: 11670,
            mot_men: 1569,
            mot_women: 233,
            total_cars: 24314,
            total_mot: 1802,
            rel_cars: 108.35,
            rel_mot: 673.39
        },
        {
            aut_com: 'balearic-islands',
            year: 2018,
            cars_men: 6574,
            cars_women: 6680,
            mot_men: 1075,
            mot_women: 404,
            total_cars: 13254,
            total_mot: 1479,
            rel_cars: 98.41,
            rel_mot: 266.09
        },
        {
            aut_com: 'balearic-islands',
            year: 2017,
            cars_men: 5567,
            cars_women: 6541,
            mot_men: 1043,
            mot_women: 324,
            total_cars: 12108,
            total_mot: 1367,
            rel_cars: 85.11,
            rel_mot: 321.91
        },
        {
            aut_com: 'balearic-islands',
            year: 2016,
            cars_men: 5638,
            cars_women: 8633,
            mot_men: 982,
            mot_women: 344,
            total_cars: 14271,
            total_mot: 1326,
            rel_cars: 65.31,
            rel_mot: 285.47
        },
        {
            aut_com: 'canary-islands',
            year: 2018,
            cars_men: 14503,
            cars_women: 13102,
            mot_men: 2535,
            mot_women: 551,
            total_cars: 27605,
            total_mot: 3086,
            rel_cars: 110.69,
            rel_mot: 460.07
        },
        {
            aut_com: 'canary-islands',
            year: 2017,
            cars_men: 12036,
            cars_women: 11088,
            mot_men: 2290,
            mot_women: 476,
            total_cars: 23124,
            total_mot: 2766,
            rel_cars: 108.55,
            rel_mot: 481.09
        },
        {
            aut_com: 'canary-islands',
            year: 2016,
            cars_men: 12547,
            cars_women: 11503,
            mot_men: 1948,
            mot_women: 476,
            total_cars: 24050,
            total_mot: 2424,
            rel_cars: 109.08,
            rel_mot: 409.24
        },
        {
            aut_com: 'the-rioja',
            year: 2018,
            cars_men: 2102,
            cars_women: 1818,
            mot_men: 228,
            mot_women: 31,
            total_cars: 3920,
            total_mot: 259,
            rel_cars: 115.62,
            rel_mot: 735.48
        },
        {
            aut_com: 'the-rioja',
            year: 2017,
            cars_men: 1608,
            cars_women: 1328,
            mot_men: 222,
            mot_women: 12,
            total_cars: 2936,
            total_mot: 234,
            rel_cars: 121.08,
            rel_mot: 1850.0
        },
        {
            aut_com: 'the-rioja',
            year: 2016,
            cars_men: 1797,
            cars_women: 1730,
            mot_men: 171,
            mot_women: 13,
            total_cars: 3527,
            total_mot: 184,
            rel_cars: 103.87,
            rel_mot: 1315.38
        },
        {
            aut_com: 'madrid',
            year: 2018,
            cars_men: 33130,
            cars_women: 31225,
            mot_men: 6270,
            mot_women: 758,
            total_cars: 64355,
            total_mot: 7028,
            rel_cars: 106.1,
            rel_mot: 827.18
        },
        {
            aut_com: 'madrid',
            year: 2017,
            cars_men: 30343,
            cars_women: 28724,
            mot_men: 6596,
            mot_women: 882,
            total_cars: 59067,
            total_mot: 7478,
            rel_cars: 105.64,
            rel_mot: 747.85
        },
        {
            aut_com: 'madrid',
            year: 2016,
            cars_men: 31461,
            cars_women: 31071,
            mot_men: 5788,
            mot_women: 773,
            total_cars: 62532,
            total_mot: 6561,
            rel_cars: 101.26,
            rel_mot: 748.77
        },
        {
            aut_com: 'melilla',
            year: 2018,
            cars_men: 672,
            cars_women: 565,
            mot_men: 60,
            mot_women: 4,
            total_cars: 1237,
            total_mot: 64,
            rel_cars: 118.94,
            rel_mot: 1500.0
        },
        {
            aut_com: 'melilla',
            year: 2017,
            cars_men: 576,
            cars_women: 527,
            mot_men: 47,
            mot_women: 5,
            total_cars: 1103,
            total_mot: 52,
            rel_cars: 109.3,
            rel_mot: 940.0
        },
        {
            aut_com: 'melilla',
            year: 2016,
            cars_men: 624,
            cars_women: 505,
            mot_men: 46,
            mot_women: 5,
            total_cars: 1129,
            total_mot: 51,
            rel_cars: 123.56,
            rel_mot: 920.0
        },
        {
            aut_com: 'murcia',
            year: 2018,
            cars_men: 10990,
            cars_women: 9516,
            mot_men: 1343,
            mot_women: 159,
            total_cars: 20506,
            total_mot: 1502,
            rel_cars: 115.49,
            rel_mot: 844.65
        },
        {
            aut_com: 'murcia',
            year: 2017,
            cars_men: 7723,
            cars_women: 6491,
            mot_men: 976,
            mot_women: 127,
            total_cars: 14214,
            total_mot: 1103,
            rel_cars: 118.98,
            rel_mot: 768.5
        },
        {
            aut_com: 'murcia',
            year: 2016,
            cars_men: 9861,
            cars_women: 8912,
            mot_men: 831,
            mot_women: 110,
            total_cars: 18773,
            total_mot: 941,
            rel_cars: 110.65,
            rel_mot: 755.45
        },
        {
            aut_com: 'navarre',
            year: 2018,
            cars_men: 3583,
            cars_women: 3093,
            mot_men: 310,
            mot_women: 53,
            total_cars: 6676,
            total_mot: 363,
            rel_cars: 115.84,
            rel_mot: 584.91
        },
        {
            aut_com: 'navarre',
            year: 2017,
            cars_men: 2326,
            cars_women: 1992,
            mot_men: 270,
            mot_women: 36,
            total_cars: 4318,
            total_mot: 306,
            rel_cars: 116.77,
            rel_mot: 750.0
        },
        {
            aut_com: 'navarre',
            year: 2016,
            cars_men: 3156,
            cars_women: 2642,
            mot_men: 255,
            mot_women: 19,
            total_cars: 5798,
            total_mot: 274,
            rel_cars: 119.45,
            rel_mot: 1342.11
        },
        {
            aut_com: 'basque-country',
            year: 2018,
            cars_men: 10634,
            cars_women: 8679,
            mot_men: 1515,
            mot_women: 160,
            total_cars: 19313,
            total_mot: 1675,
            rel_cars: 122.53,
            rel_mot: 946.88
        },
        {
            aut_com: 'basque-country',
            year: 2017,
            cars_men: 8073,
            cars_women: 6620,
            mot_men: 1144,
            mot_women: 98,
            total_cars: 14693,
            total_mot: 1242,
            rel_cars: 121.95,
            rel_mot: 1167.35
        },
        {
            aut_com: 'basque-country',
            year: 2016,
            cars_men: 9877,
            cars_women: 8094,
            mot_men: 989,
            mot_women: 74,
            total_cars: 17971,
            total_mot: 1063,
            rel_cars: 122.03,
            rel_mot: 1336.49
        },
        {
            aut_com: 'valencia',
            year: 2018,
            cars_men: 34003,
            cars_women: 28982,
            mot_men: 4671,
            mot_women: 598,
            total_cars: 62985,
            total_mot: 5269,
            rel_cars: 117.32,
            rel_mot: 781.1
        },
        {
            aut_com: 'valencia',
            year: 2017,
            cars_men: 26410,
            cars_women: 22862,
            mot_men: 3986,
            mot_women: 557,
            total_cars: 49272,
            total_mot: 4543,
            rel_cars: 115.52,
            rel_mot: 715.62
        },
        {
            aut_com: 'valencia',
            year: 2016,
            cars_men: 29045,
            cars_women: 25122,
            mot_men: 3288,
            mot_women: 451,
            total_cars: 54167,
            total_mot: 3739,
            rel_cars: 115.62,
            rel_mot: 729.05
        }
    ];

    var driving_licenses_aux = initialDrivingLicenses;

    ////// POSTMAN /////////////////////////

    app.get('/api/v2/driving-licenses/docs', (req, res) => {
        res.redirect('https://documenter.getpostman.com/view/10660202/Szme3xjQ');
    });

    // NEW GET LoadInitialData
    app.get(BASE_API_URL + '/driving-licenses/loadInitialData', (req, res) => {
        db.insert(initialDrivingLicenses);
        res.send(initialDrivingLicenses);
        console.log(
            'START - LOAD INITIAL DATA\n' +
                JSON.stringify(initialDrivingLicenses, null, 2) +
                '\nEND - LOAD INITIAL DATA'
        );
    });

    /*// GET LOAD INITIAL
app.get(BASE_API_URL + '/driving-licenses/loadInitialData', (req, res) => {
    driving_licenses = driving_licenses_aux;
    res.send(JSON.stringify(driving_licenses, null, 2));
    console.log('Data sent:' + JSON.stringify(driving_licenses, null, 2));
});*/

    // NEW a) GET /driving-licenses
    app.get(BASE_API_URL + '/driving-licenses', (req, res) => {
		var limit = parseInt(req.query.limit);
		var offset = parseInt(req.query.offset);
		var search = {};
		
		if(req.query.aut_com) search["aut_com"] = req.query.aut_com;
		if(req.query.year) search["year"] = parseInt(req.query.year);
		if(req.query.cars_men) search["cars_men"] = parseInt(req.query.cars_men);
		if(req.query.cars_women) search["cars_women"] = parseInt(req.query.cars_women);
		if(req.query.mot_men) search["mot_men"] = parseInt(req.query.mot_men);
		if(req.query.mot_women) search["mot_women"] = parseInt(req.query.mot_women);
		if(req.query.total_cars) search["total_cars"] = parseInt(req.query.total_cars);
		if(req.query.total_mot) search["total_mot"] = parseInt(req.query.total_mot);
		if(req.query.rel_cars) search["rel_cars"] = parseFloat(req.query.rel_cars);
		if(req.query.rel_mot) search["rel_mot"] = parseFloat(req.query.rel_mot);
		
        db
            .find(search)
            .sort({ aut_com: 1, year: -1 , cars_men: -2, cars_women: -3, mot_men: -4, mot_women: -5, total_cars: -6, total_cars: -7, total_mot: -8, rel_cars: -9, rel_mot: -10})
            .skip(offset)
            .limit(limit)
            .exec((err, docs) => {
                if (docs.length == 0) {
                    res.sendStatus(204);
                    console.log('\nNO CONTENT TO SHOW');
                } else {
                    res.send(
                        docs.map(dl => {
                            delete dl._id;
                            return dl;
                        })
                    );
                    console.log(
                        '\nSTART - SHOW ALL DATA OR AVAILABLE ON DB\n' +
                            JSON.stringify(docs, null, 2) +
                            '\nEND - SHOW ALL DATA OR AVAILABLE ON DB'
                    );
                }
            });
    });

    /*// GET DRIVING-LICENSES

app.get(BASE_API_URL + '/driving-licenses', (req, res) => {
    res.send(JSON.stringify(driving_licenses, null, 2));
    console.log('Data sent:' + JSON.stringify(driving_licenses, null, 2));
});*/

    // NEW b) POST /driving-licenses
	app.post(BASE_API_URL+"/driving-licenses",(req,res) =>{
        var newDrivingLicense = req.body;
        var aut_com = req.body.aut_com;
        var year = req.body.year;

		db.find({"aut_com":aut_com,"year":year}, (err, drivingLicense) => {
			if(drivingLicense!=0){
				res.sendStatus(409,"OBJECT ALREADY EXISTS");
				console.log("El dato ya existe");
            } else if(newDrivingLicense.aut_com=="" || newDrivingLicense.year=="" || newDrivingLicense.cars_men=="" || 
                newDrivingLicense.cars_women=="" ||  newDrivingLicense.mot_men=="" || newDrivingLicense.mot_women==""
                || newDrivingLicense.total_cars=="" ||  newDrivingLicense.total_mot=="" || newDrivingLicense.rel_cars==""
                || newDrivingLicense.rel_mot=="") {
				res.sendStatus(400,"BAD REQUEST");
				console.log("The format is incorrect");
			} else {
				db.insert(newAccident);
				res.sendStatus(201,"CREATED");
				console.log("Objet created with exit");
			}
		})
	});

    /*newDrivingLicense.aut_com == null ||
    newDrivingLicense.year == null ||
    newDrivingLicense.cars_men == null ||
    newDrivingLicense.cars_women == null ||
    newDrivingLicense.mot_men == null ||
    newDrivingLicense.mot_women == null ||
    newDrivingLicense.total_cars == null ||
    newDrivingLicense.total_mot == null ||
    newDrivingLicense.rel_cars == null ||
    newDrivingLicense.rel_mot == null ||
    newDrivingLicense == ''*/
    /*// POST DRIVING-LICENSES

app.post(BASE_API_URL + '/driving-licenses', (req, res) => {
    var newDriving_license = req.body;

    if (newDriving_license == '' || newDriving_license.aut_com == null) {
        res.sendStatus(400, 'BAD REQUEST');
    } else {
        driving_licenses.push(newDriving_license);
        res.sendStatus(201, 'CREATED');
    }
});*/
	
	    // c) GET /driving-licenses/aut_com
    app.get(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        var aut_com_url = req.params.aut_com;

        db.find({ aut_com: aut_com_url }, (err, docs) => {
            if (docs.length >= 1) {
                res.send(
                    docs.map(dl => {
                        delete dl._id;
                        return dl;
                    })
                );

                console.log(
                    '\nSTART - SHOW THOSE DATA FROM DB\n' +
                        JSON.stringify(docs, null, 2) +
                        '\nEND - SHOW THOSE DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('\n404 - DRIVING LICENSES NOT FOUND');
            }
        });
    });

    // c) GET /driving-licenses/aut_com/year
    app.get(BASE_API_URL + '/driving-licenses/:aut_com/:year', (req, res) => {
        var aut_com_url = req.params.aut_com;
        var year_url = req.params.year;

        db.find({ aut_com: aut_com_url, year: parseInt(year_url) }, (err, docs) => {
            if (docs.length >= 1) {
                res.send(
                    docs.map(dl => {
                        delete dl._id;
                        return dl;
                    })[0]
                );

                console.log(
                    '\nSTART - SHOW THIS DATA FROM DB\n' +
                        JSON.stringify(docs, null, 2) +
                        '\nEND - SHOW THIS DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('\n404 - DRIVING LICENSES NOT FOUND');
            }
        });
    });
	
	
	 // d) DELETE /driving-licenses/aut_com
    app.delete(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        var aut_com_url = req.params.aut_com;

        db.remove({ aut_com: aut_com_url }, { multi: true }, (err, numRemoved) => {
            if (numRemoved == 0) {
                res.sendStatus(404);
                console.log('DRIVING LICENSES NOT FOUND');
            } else {
                res.sendStatus(200);
                console.log(
                    '\nSTART - DELETE THOSE DATA FROM DB\n' +
                        numRemoved +
                        '\nEND - DELETE THOSE DATA FROM DB\n'
                );
            }
        });
    });

    // d) DELETE /driving-licenses/aut_com/year
    app.delete(BASE_API_URL + '/driving-licenses/:aut_com/:year', (req, res) => {
        var aut_com_url = req.params.aut_com;
        var year_url = req.params.year;

        db.remove({ aut_com: aut_com_url, year: parseInt(year_url) }, {}, (err, numRemoved) => {
            if (numRemoved == 0) {
                res.sendStatus(404);
                console.log('DRIVING LICENSE NOT FOUND');
            } else {
                res.sendStatus(200);
                console.log(
                    '\nSTART - DELETE THIS DATA FROM DB\n' +
                        numRemoved +
                        '\nEND - DELETE THIS DATA FROM DB\n'
                );
            }
        });
    });
	
	
	 // e) PUT /driving-licenses/aut_com/year
    app.put(BASE_API_URL + '/driving-licenses/:aut_com/:year', (req, res) => {
        var newDrivingLicense = req.body;
        var aut_com_url = req.params.aut_com;
        var year_url = req.params.year;

        if (
            newDrivingLicense.aut_com == null ||
            newDrivingLicense.year == null ||
            newDrivingLicense.cars_men == null ||
            newDrivingLicense.cars_women == null ||
            newDrivingLicense.mot_men == null ||
			newDrivingLicense.mot_women == null ||
			newDrivingLicense.total_cars == null ||
			newDrivingLicense.total_mot == null ||
			newDrivingLicense.rel_cars == null ||
			newDrivingLicense.rel_mot == null ||
            newDrivingLicense == ''
        ) {
            res.sendStatus(400);
            console.log('\n400 - DRIVING LICENSE CAN NOT BE EMPTY OR NULL');
        } else  {
            db.update(
                { aut_com: aut_com_url, year: parseInt(year_url) },
                {
                    aut_com: newDrivingLicense.aut_com,
                    year: newDrivingLicense.year,
                    cars_men: newDrivingLicense.cars_men,
                    cars_women: newDrivingLicense.cars_women,
                    mot_men: newDrivingLicense.mot_men,
					mot_women: newDrivingLicense.mot_women,
					total_cars: newDrivingLicense.total_cars,
					total_mot: newDrivingLicense.total_mot,
					rel_cars: newDrivingLicense.rel_cars,
					rel_mot: newDrivingLicense.rel_mot
                },
                {},
                (err, numReplaced) => {
                    res.sendStatus(200);
                    console.log(
                        '\nSTART - UPDATE THIS DATA FROM DB\n' +
                            numReplaced +
                            '\nEND - UPDATE THIS DATA FROM DB\n'
                    );
                }
            );
        }
    });
	
	    // f.1) POST /driving-licenses/aut_com/year
    app.post(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    app.post(BASE_API_URL + '/driving-licenses/:aut_com/:year', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    // g) PUT /driving-licenses
    // g.1) PUT /driving-licenses/aut_com
    app.put(BASE_API_URL + '/driving-licenses', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    app.put(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED');
    });

    // h) DELETE /driving-licenses
    app.delete(BASE_API_URL + '/driving-licenses', (req, res) => {
        db.remove({}, { multi: true }, function(err, numRemoved) {
            if (numRemoved >= 1) {
                res.sendStatus(200);
                console.log(
                    '\nSTART - DELETE ALL DATA FROM DB\n' +
                        numRemoved +
                        '\nEND - DELETE ALL DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('NO DATA TO REMOVE');
            }
        });
    });
	
	function existDrivingLicense(aut_com_url,year_url){
		var result;
		
		        db.find({ aut_com: aut_com_url, year: parseInt(year_url) }, (err, docs) => {
            if (docs.length >= 1) {
				result = 1;
            } else {
				result =0;
            }
        });
		//console.log(result);
		return result;
	}

	//// OLD CODE //////
	
    /*// POST DRIVING-LICENSES/XXX (ERROR)

    app.post(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        res.sendStatus(405, 'METHOD NOT ALLOW');
    });

    // DELETE DRIVING-LICENSES
    app.delete(BASE_API_URL + '/driving-licenses', (req, res) => {
        var filteredDriving_licenses = driving_licenses.filter(c => {
            return null;
        });

        if (filteredDriving_licenses.length < driving_licenses.length) {
            driving_licenses = filteredDriving_licenses;
            res.sendStatus(200);
        } else {
            res.sendStatus(404, 'DRIVING LICENSES NOT FOUND');
        }
    });

    // GET DRIVING-LICENSES

    app.get(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        var aut_com = req.params.aut_com;

        var filteredDriving_licenses = driving_licenses.filter(c => {
            return c.aut_com == aut_com;
        });

        if (filteredDriving_licenses.length >= 1) {
            res.send(filteredDriving_licenses[0]);
        } else {
            res.sendStatus(404, 'DRIVING LICENSES NOT FOUND');
        }
    });

    // PUT DRIVING-LICENSES (ERROR)

    app.put(BASE_API_URL + '/driving-licenses', (req, res) => {
        res.sendStatus(405, 'METHOD NOT ALLOW');
    });

    // PUT DRIVING-LICENSES/XXX
    app.put(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        var aut_com = req.params.aut_com;

        var newDriving_license = req.body;

        if (aut_com == newDriving_license.aut_com) {
            var filteredDriving_licenses = driving_licenses.filter(c => {
                return !(c.aut_com == aut_com);
            });

            if (!(filteredDriving_licenses == driving_licenses)) {
                driving_licenses = filteredDriving_licenses;
                if (newDriving_license == '' || newDriving_license.aut_com == null) {
                    res.sendStatus(400, 'BAD REQUEST');
                } else {
                    driving_licenses.push(newDriving_license);
                    res.sendStatus(201, 'UPDATED');
                }
            } else {
                res.sendStatus(400, 'BAD REQUEST');
            }
        } else {
            res.sendStatus(400, 'BAD REQUEST');
        }
    });

    // DELETE DRIVING-LICENSES/XXXX

    app.delete(BASE_API_URL + '/driving-licenses/:aut_com', (req, res) => {
        var aut_com = req.params.aut_com;

        var filteredDriving_licenses = driving_licenses.filter(c => {
            return c.aut_com != aut_com;
        });

        if (filteredDriving_licenses.length < driving_licenses.length) {
            driving_licenses = filteredDriving_licenses;
            res.sendStatus(200);
        } else {
            res.sendStatus(404, 'DRIVING LICENSES NOT FOUND');
        }
    });*/

    console.log('Registered driving-licenses API!\n');
};