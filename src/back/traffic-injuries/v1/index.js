module.exports = function(app, express, bodyParser, path) {
    console.log('Registering traffic-injuries API V1...');

    const dataStore = require('nedb');

    const dbFileName = path.join(__dirname, '/traffic-injuries.db');
    const BASE_API_URL = '/api/v1';

    app.use(bodyParser.json());

    const db = new dataStore({
        filename: dbFileName,
        autoload: true
    });

    var initialTrafficInjuries = [
        {
            auto_com: 'andalusia',
            year: 2018,
            accident: 17066,
            dead: 274,
            injure: 242
        },
        {
            auto_com: 'aragon',
            year: 2018,
            accident: 2228,
            dead: 85,
            injure: 2915
        },
        {
            auto_com: 'asturias',
            year: 2018,
            accident: 2103,
            dead: 43,
            injure: 2873
        },
        {
            auto_com: 'balearic-islands',
            year: 2018,
            accident: 3501,
            dead: 53,
            injure: 4642
        },
        {
            auto_com: 'canary-islands',
            year: 2018,
            accident: 3506,
            dead: 68,
            injure: 496
        },
        {
            auto_com: 'cantabria',
            year: 2018,
            accident: 647,
            dead: 23,
            injure: 971
        },
        {
            auto_com: 'castile-leon',
            year: 2018,
            accident: 2586,
            dead: 100,
            injure: 3649
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2018,
            accident: 4425,
            dead: 176,
            injure: 5869
        },
        {
            auto_com: 'catalonia',
            year: 2018,
            accident: 27202,
            dead: 326,
            injure: 35426
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2018,
            accident: 1504,
            dead: 51,
            injure: 2068
        },
        {
            auto_com: 'valencia',
            year: 2018,
            accident: 4519,
            dead: 144,
            injure: 6267
        },
        {
            auto_com: 'extremadura',
            year: 2018,
            accident: 16724,
            dead: 114,
            injure: 21285
        },
        {
            auto_com: 'galicia',
            year: 2018,
            accident: 258,
            dead: 66,
            injure: 3456
        },
        {
            auto_com: 'madrid',
            year: 2018,
            accident: 855,
            dead: 35,
            injure: 1067
        },
        {
            auto_com: 'murcia',
            year: 2018,
            accident: 612,
            dead: 10,
            injure: 819
        },
        {
            auto_com: 'navarre',
            year: 2018,
            accident: 836,
            dead: 183,
            injure: 1096
        },
        {
            auto_com: 'basque-country',
            year: 2018,
            accident: 4798,
            dead: 49,
            injure: 6151
        },
        {
            auto_com: 'the-rioja',
            year: 2018,
            accident: 762,
            dead: 6,
            injure: 1031
        },
        {
            auto_com: 'andalusia',
            year: 2017,
            accident: 15671,
            dead: 305,
            injure: 22303
        },
        {
            auto_com: 'aragon',
            year: 2017,
            accident: 2483,
            dead: 80,
            injure: 3289
        },
        {
            auto_com: 'asturias',
            year: 2017,
            accident: 2348,
            dead: 37,
            injure: 3197
        },
        {
            auto_com: 'balearic-islands',
            year: 2017,
            accident: 3846,
            dead: 68,
            injure: 5017
        },
        {
            auto_com: 'canary-islands',
            year: 2017,
            accident: 358,
            dead: 67,
            injure: 5133
        },
        {
            auto_com: 'cantabria',
            year: 2017,
            accident: 734,
            dead: 22,
            injure: 1017
        },
        {
            auto_com: 'castile-leon',
            year: 2017,
            accident: 2761,
            dead: 129,
            injure: 3783
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2017,
            accident: 4492,
            dead: 164,
            injure: 5877
        },
        {
            auto_com: 'catalonia',
            year: 2017,
            accident: 27305,
            dead: 283,
            injure: 35884
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2017,
            accident: 1546,
            dead: 62,
            injure: 2137
        },
        {
            auto_com: 'valencia',
            year: 2017,
            accident: 4741,
            dead: 117,
            injure: 6716
        },
        {
            auto_com: 'extremadura',
            year: 2017,
            accident: 16364,
            dead: 125,
            injure: 2094
        },
        {
            auto_com: 'galicia',
            year: 2017,
            accident: 2552,
            dead: 85,
            injure: 3453
        },
        {
            auto_com: 'madrid',
            year: 2017,
            accident: 898,
            dead: 29,
            injure: 1156
        },
        {
            auto_com: 'murcia',
            year: 2017,
            accident: 730,
            dead: 26,
            injure: 917
        },
        {
            auto_com: 'navarre',
            year: 2017,
            accident: 8206,
            dead: 176,
            injure: 10882
        },
        {
            auto_com: 'basque-country',
            year: 2017,
            accident: 4769,
            dead: 51,
            injure: 6213
        },
        {
            auto_com: 'the-rioja',
            year: 2017,
            accident: 879,
            dead: 4,
            injure: 1248
        },
        {
            auto_com: 'andalusia',
            year: 2016,
            accident: 15859,
            dead: 303,
            injure: 22988
        },
        {
            auto_com: 'aragon',
            year: 2016,
            accident: 2239,
            dead: 73,
            injure: 2991
        },
        {
            auto_com: 'asturias',
            year: 2016,
            accident: 2258,
            dead: 35,
            injure: 3156
        },
        {
            auto_com: 'balearic-islands',
            year: 2016,
            accident: 3872,
            dead: 60,
            injure: 5276
        },
        {
            auto_com: 'canary-islands',
            year: 2016,
            accident: 3639,
            dead: 71,
            injure: 5184
        },
        {
            auto_com: 'cantabria',
            year: 2016,
            accident: 728,
            dead: 21,
            injure: 1068
        },
        {
            auto_com: 'castile-leon',
            year: 2016,
            accident: 2928,
            dead: 118,
            injure: 4098
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2016,
            accident: 4735,
            dead: 175,
            injure: 6432
        },
        {
            auto_com: 'catalonia',
            year: 2016,
            accident: 27244,
            dead: 282,
            injure: 35999
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2016,
            accident: 1366,
            dead: 62,
            injure: 1853
        },
        {
            auto_com: 'valencia',
            year: 2016,
            accident: 4874,
            dead: 141,
            injure: 6848
        },
        {
            auto_com: 'extremadura',
            year: 2016,
            accident: 1627,
            dead: 121,
            injure: 20659
        },
        {
            auto_com: 'galicia',
            year: 2016,
            accident: 2354,
            dead: 58,
            injure: 3222
        },
        {
            auto_com: 'madrid',
            year: 2016,
            accident: 756,
            dead: 26,
            injure: 944
        },
        {
            auto_com: 'murcia',
            year: 2016,
            accident: 733,
            dead: 25,
            injure: 958
        },
        {
            auto_com: 'navarre',
            year: 2016,
            accident: 8388,
            dead: 180,
            injure: 11104
        },
        {
            auto_com: 'basque-country',
            year: 2016,
            accident: 492,
            dead: 56,
            injure: 6369
        },
        {
            auto_com: 'the-rioja',
            year: 2016,
            accident: 862,
            dead: 3,
            injure: 1241
        },
        {
            auto_com: 'andalusia',
            year: 2015,
            accident: 16431,
            dead: 262,
            injure: 23897
        },
        {
            auto_com: 'aragon',
            year: 2015,
            accident: 2264,
            dead: 71,
            injure: 2962
        },
        {
            auto_com: 'asturias',
            year: 2015,
            accident: 2408,
            dead: 36,
            injure: 3425
        },
        {
            auto_com: 'balearic-islands',
            year: 2015,
            accident: 3513,
            dead: 53,
            injure: 4724
        },
        {
            auto_com: 'canary-islands',
            year: 2015,
            accident: 333,
            dead: 62,
            injure: 4669
        },
        {
            auto_com: 'cantabria',
            year: 2015,
            accident: 723,
            dead: 22,
            injure: 1043
        },
        {
            auto_com: 'castile-leon',
            year: 2015,
            accident: 2727,
            dead: 107,
            injure: 3776
        },
        {
            auto_com: 'castile-la-mancha',
            year: 2015,
            accident: 4503,
            dead: 181,
            injure: 6192
        },
        {
            auto_com: 'catalonia',
            year: 2015,
            accident: 25554,
            dead: 291,
            injure: 33675
        },
        {
            auto_com: 'ceuta-melilla',
            year: 2015,
            accident: 1446,
            dead: 54,
            injure: 203
        },
        {
            auto_com: 'valencia',
            year: 2015,
            accident: 4581,
            dead: 123,
            injure: 6526
        },
        {
            auto_com: 'extremadura',
            year: 2015,
            accident: 15523,
            dead: 111,
            injure: 20003
        },
        {
            auto_com: 'galicia',
            year: 2015,
            accident: 1796,
            dead: 44,
            injure: 2517
        },
        {
            auto_com: 'madrid',
            year: 2015,
            accident: 475,
            dead: 26,
            injure: 586
        },
        {
            auto_com: 'murcia',
            year: 2015,
            accident: 723,
            dead: 20,
            injure: 957
        },
        {
            auto_com: 'navarre',
            year: 2015,
            accident: 7787,
            dead: 154,
            injure: 10213
        },
        {
            auto_com: 'basque-country',
            year: 2015,
            accident: 4613,
            dead: 67,
            injure: 5982
        },
        {
            auto_com: 'the-rioja',
            year: 2015,
            accident: 918,
            dead: 5,
            injure: 1278
        }
    ];

    // Redirect to postman url
    app.get('/api/v1/traffic-injuries/docs', (req, res) => {
        res.redirect('https://documenter.getpostman.com/view/10693282/SzYT5gnd');
    });

    // GET LoadInitialData
    app.get(BASE_API_URL + '/traffic-injuries/loadInitialData', (req, res) => {
        db.insert(initialTrafficInjuries);
        res.send(initialTrafficInjuries);
        console.log(
            'START - LOAD INITIAL DATA\n' +
                JSON.stringify(initialTrafficInjuries, null, 2) +
                '\nEND - LOAD INITIAL DATA'
        );
    });

    // a) GET /traffic-injuries
    app.get(BASE_API_URL + '/traffic-injuries', (req, res) => {
		var limit = parseInt(req.query.limit);
		var offset = parseInt(req.query.offset);
		var search = {};
		
		if(req.query.auto_com) search["auto_com"] = req.query.auto_com;
		if(req.query.year) search["year"] = parseInt(req.query.year);
		if(req.query.accident) search["accident"] = parseInt(req.query.accident);
		if(req.query.dead) search["dead"] = parseInt(req.query.dead);
		if(req.query.injure) search["injure"] = parseInt(req.query.injure);
		
        db
            .find(search)
            .sort({ auto_com: 1, year: -1 , accident: -2, dead: -3, injure: -4})
            .skip(offset)
            .limit(limit)
            .exec((err, docs) => {
                if (docs.length == 0) {
                    res.sendStatus(204);
                    console.log('\nNO CONTENT TO SHOW');
                } else {
                    res.send(
                        docs.map(ti => {
                            delete ti._id;
                            return ti;
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

    // b) POST /traffic-injuries
    app.post(BASE_API_URL + '/traffic-injuries', (req, res) => {
        var newTrafficInjury = req.body;

        if (
            newTrafficInjury.auto_com == null ||
            newTrafficInjury.year == null ||
            newTrafficInjury.accident == null ||
            newTrafficInjury.dead == null ||
            newTrafficInjury.injure == null ||
            newTrafficInjury == ''
        ) {
            res.sendStatus(400);
            console.log('\n400 - TRAFFIC INJURY CAN NOT BE EMPTY OR NULL');
        } else {
            db.insert(newTrafficInjury);
            res.sendStatus(201);
            console.log(
                '\nSTART - ADD NEW DATA TO DB\n' +
                    JSON.stringify(newTrafficInjury, null, 2) +
                    '\nEND - ADD NEW DATA TO DB'
            );
        }
    });

    // c) GET /traffic-injuries/auto_com
    app.get(BASE_API_URL + '/traffic-injuries/:auto_com', (req, res) => {
        var auto_com_url = req.params.auto_com;

        db.find({ auto_com: auto_com_url }, (err, docs) => {
            if (docs.length >= 1) {
                res.send(
                    docs.map(ti => {
                        delete ti._id;
                        return ti;
                    })
                );

                console.log(
                    '\nSTART - SHOW THOSE DATA FROM DB\n' +
                        JSON.stringify(docs, null, 2) +
                        '\nEND - SHOW THOSE DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('\n404 - TRAFFIC INJURIES NOT FOUND');
            }
        });
    });

    // c) GET /traffic-injuries/auto_com/year
    app.get(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        var auto_com_url = req.params.auto_com;
        var year_url = req.params.year;

        db.find({ auto_com: auto_com_url, year: parseInt(year_url) }, (err, docs) => {
            if (docs.length >= 1) {
                res.send(
                    docs.map(ti => {
                        delete ti._id;
                        return ti;
                    })[0]
                );

                console.log(
                    '\nSTART - SHOW THIS DATA FROM DB\n' +
                        JSON.stringify(docs, null, 2) +
                        '\nEND - SHOW THIS DATA FROM DB\n'
                );
            } else {
                res.sendStatus(404);
                console.log('\n404 - TRAFFIC INJURY NOT FOUND');
            }
        });
    });

    // d) DELETE /traffic-injuries/auto_com
    app.delete(BASE_API_URL + '/traffic-injuries/:auto_com', (req, res) => {
        var auto_com_url = req.params.auto_com;

        db.remove({ auto_com: auto_com_url }, { multi: true }, (err, numRemoved) => {
            if (numRemoved == 0) {
                res.sendStatus(404);
                console.log('TRAFFIC INJURIES NOT FOUND');
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

    // d) DELETE /traffic-injuries/auto_com/year
    app.delete(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        var auto_com_url = req.params.auto_com;
        var year_url = req.params.year;

        db.remove({ auto_com: auto_com_url, year: parseInt(year_url) }, {}, (err, numRemoved) => {
            if (numRemoved == 0) {
                res.sendStatus(404);
                console.log('TRAFFIC INJURY NOT FOUND');
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

    // e) PUT /traffic-injuries/auto_com/year
    app.put(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        var newTrafficInjury = req.body;
        var auto_com_url = req.params.auto_com;
        var year_url = req.params.year;

        if (
            newTrafficInjury.auto_com == null ||
            newTrafficInjury.year == null ||
            newTrafficInjury.accident == null ||
            newTrafficInjury.dead == null ||
            newTrafficInjury.injure == null ||
            newTrafficInjury == ''
        ) {
            res.sendStatus(400);
            console.log('\n400 - TRAFFIC INJURY CAN NOT BE EMPTY OR NULL');
        } else {
            db.update(
                { auto_com: auto_com_url, year: parseInt(year_url) },
                {
                    auto_com: newTrafficInjury.auto_com,
                    year: newTrafficInjury.year,
                    accident: newTrafficInjury.accident,
                    dead: newTrafficInjury.dead,
                    injure: newTrafficInjury.injure
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

    // f) POST /traffic-injuries/auto_com/
    // f.1) POST /traffic-injuries/auto_com/year
    app.post(BASE_API_URL + '/traffic-injuries/:auto_com', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    app.post(BASE_API_URL + '/traffic-injuries/:auto_com/:year', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    // g) PUT /traffic-injuries
    // g.1) PUT /traffic-injuries/auto_com
    app.put(BASE_API_URL + '/traffic-injuries', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED\n');
    });

    app.put(BASE_API_URL + '/traffic-injuries/:auto_com', (req, res) => {
        res.sendStatus(405);
        console.log('METHOD NOT ALLOWED');
    });

    // h) DELETE /traffic-injuries
    app.delete(BASE_API_URL + '/traffic-injuries', (req, res) => {
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

    console.log('Registered traffic-injuries API! V1\n');
};