const cool = require("cool-ascii-faces");
const express = require("express");
const bodyParser = require("body-parser");


var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 80;

app.use("/", express.static("./public"));

app.get("/cool", (request,response) => {
	response.send("<html>" + cool() + "</html>");
});

const BASE_API_URL = "/api/v1";

// ==================================================
// =============== Start antpritag ================= 
// ==================================================	

var driving_licenses = [
  {
    aut_com: "andalucia",
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
    aut_com: "andalucia",
    year: 2017,
    cars_men: 37408,
    cars_women: 34766,
    mot_men: 5706,
    mot_women: 784,
    total_cars: 72174,
    total_mot: 6490,
    rel_cars: 107.60,
    rel_mot: 727.81
  },
  {
    aut_com: "andalucia",
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
    aut_com: "aragon",
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
    aut_com: "aragon",
    year: 2017,
    cars_men: 6302,
    cars_women: 5251,
    mot_men: 903,
    mot_women: 86,
    total_cars: 11553,
    total_mot: 989,
    rel_cars: 120.02,
    rel_mot: 1050.00
  },
  {
    aut_com: "aragon",
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
    aut_com: "asturias",
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
    aut_com: "asturias",
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
    aut_com: "asturias",
    year: 2016,
    cars_men: 4167,
    cars_women: 4096,
    mot_men: 558,
    mot_women: 69,
    total_cars: 8263,
    total_mot: 627,
    rel_cars: 101.73,
    rel_mot: 808.70
  },
  {
    aut_com: "cantabria",
    year: 2018,
    cars_men: 2986,
    cars_women: 3019,
    mot_men: 341,
    mot_women: 25,
    total_cars: 6005,
    total_mot: 366,
    rel_cars: 98.91,
    rel_mot: 1364.00
  },
  {
    aut_com: "cantabria",
    year: 2017,
    cars_men: 2244,
    cars_women: 2135,
    mot_men: 248,
    mot_women: 20,
    total_cars: 4379,
    total_mot: 268,
    rel_cars: 105.11,
    rel_mot: 1240.00
  },
  {
    aut_com: "cantabria",
    year: 2016,
    cars_men: 2635,
    cars_women: 2431,
    mot_men: 249,
    mot_women: 25,
    total_cars: 5066,
    total_mot: 274,
    rel_cars: 108.39,
    rel_mot: 996.00
  },
  {
    aut_com: "c_mancha",
    year: 2018,
    cars_men: 17659,
    cars_women: 16818,
    mot_men: 1719,
    mot_women: 176,
    total_cars: 34477,
    total_mot: 1895,
    rel_cars: 105.00,
    rel_mot: 976.70
  },
  {
    aut_com: "c_mancha",
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
    aut_com: "c_mancha",
    year: 2016,
    cars_men: 14874,
    cars_women: 13522,
    mot_men: 871,
    mot_women: 96,
    total_cars: 28396,
    total_mot: 967,
    rel_cars: 110.00,
    rel_mot: 907.29
  },
  {
    aut_com: "c_leon",
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
    aut_com: "c_leon",
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
    aut_com: "c_leon",
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
    aut_com: "catalonia",
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
    aut_com: "catalonia",
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
    aut_com: "catalonia",
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
    aut_com: "ceuta",
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
    aut_com: "ceuta",
    year: 2017,
    cars_men: 535,
    cars_women: 460,
    mot_men: 137,
    mot_women: 9,
    total_cars: 995,
    total_mot: 146,
    rel_cars: 116.30,
    rel_mot: 1522.22
  },
  {
    aut_com: "ceuta",
    year: 2016,
    cars_men: 478,
    cars_women: 498,
    mot_men: 96,
    mot_women: 2,
    total_cars: 976,
    total_mot: 98,
    rel_cars: 95.98,
    rel_mot: 4800.00
  },
  {
    aut_com: "extremadura",
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
    aut_com: "extremadura",
    year: 2017,
    cars_men: 5340,
    cars_women: 4461,
    mot_men: 504,
    mot_women: 47,
    total_cars: 9801,
    total_mot: 551,
    rel_cars: 119.70,
    rel_mot: 1072.34
  },
  {
    aut_com: "extremadura",
    year: 2016,
    cars_men: 5802,
    cars_women: 5082,
    mot_men: 441,
    mot_women: 25,
    total_cars: 10884,
    total_mot: 466,
    rel_cars: 114.17,
    rel_mot: 1764.00
  },
  {
    aut_com: "galicia",
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
    aut_com: "galicia",
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
    aut_com: "galicia",
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
    aut_com: "baleares",
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
    aut_com: "baleares",
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
    aut_com: "baleares",
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
    aut_com: "canarias",
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
    aut_com: "canarias",
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
    aut_com: "canarias",
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
    aut_com: "rioja",
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
    aut_com: "rioja",
    year: 2017,
    cars_men: 1608,
    cars_women: 1328,
    mot_men: 222,
    mot_women: 12,
    total_cars: 2936,
    total_mot: 234,
    rel_cars: 121.08,
    rel_mot: 1850.00
  },
  {
    aut_com: "rioja",
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
    aut_com: "madrid",
    year: 2018,
    cars_men: 33130,
    cars_women: 31225,
    mot_men: 6270,
    mot_women: 758,
    total_cars: 64355,
    total_mot: 7028,
    rel_cars: 106.10,
    rel_mot: 827.18
  },
  {
    aut_com: "madrid",
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
    aut_com: "madrid",
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
    aut_com: "melilla",
    year: 2018,
    cars_men: 672,
    cars_women: 565,
    mot_men: 60,
    mot_women: 4,
    total_cars: 1237,
    total_mot: 64,
    rel_cars: 118.94,
    rel_mot: 1500.00
  },
  {
    aut_com: "melilla",
    year: 2017,
    cars_men: 576,
    cars_women: 527,
    mot_men: 47,
    mot_women: 5,
    total_cars: 1103,
    total_mot: 52,
    rel_cars: 109.30,
    rel_mot: 940.00
  },
  {
    aut_com: "melilla",
    year: 2016,
    cars_men: 624,
    cars_women: 505,
    mot_men: 46,
    mot_women: 5,
    total_cars: 1129,
    total_mot: 51,
    rel_cars: 123.56,
    rel_mot: 920.00
  },
  {
    aut_com: "murcia",
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
    aut_com: "murcia",
    year: 2017,
    cars_men: 7723,
    cars_women: 6491,
    mot_men: 976,
    mot_women: 127,
    total_cars: 14214,
    total_mot: 1103,
    rel_cars: 118.98,
    rel_mot: 768.50
  },
  {
    aut_com: "murcia",
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
    aut_com: "navarra",
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
    aut_com: "navarra",
    year: 2017,
    cars_men: 2326,
    cars_women: 1992,
    mot_men: 270,
    mot_women: 36,
    total_cars: 4318,
    total_mot: 306,
    rel_cars: 116.77,
    rel_mot: 750.00
  },
  {
    aut_com: "navarra",
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
    aut_com: "pais_vasco",
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
    aut_com: "pais_vasco",
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
    aut_com: "pais_vasco",
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
    aut_com: "com_valen",
    year: 2018,
    cars_men: 34003,
    cars_women: 28982,
    mot_men: 4671,
    mot_women: 598,
    total_cars: 62985,
    total_mot: 5269,
    rel_cars: 117.32,
    rel_mot: 781.10
  },
  {
    aut_com: "com_valen",
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
    aut_com: "com_valen",
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
]

var driving_licenses_aux = driving_licenses;

// GET LOAD INITIAL
app.get(BASE_API_URL+"/driving_licenses/loadInitialData", (req,res) =>{
	driving_licenses = driving_licenses_aux;
	res.send(JSON.stringify(driving_licenses,null,2));
	console.log("Data sent:"+JSON.stringify(driving_licenses,null,2));
});


// GET DRIVING-LICENSES

app.get(BASE_API_URL+"/driving_licenses", (req,res) =>{
	res.send(JSON.stringify(driving_licenses,null,2));
	console.log("Data sent:"+JSON.stringify(driving_licenses,null,2));
});


// POST DRIVING-LICENSES

app.post(BASE_API_URL+"/driving_licenses",(req,res) =>{
	
	var newDriving_license = req.body;
	
	if((newDriving_license == "") || (newDriving_license.aut_com == null)){
		res.sendStatus(400,"BAD REQUEST");
	} else {
		driving_licenses.push(newDriving_license); 	
		res.sendStatus(201,"CREATED");
	}
});

// POST DRIVING-LICENSES/XXX (ERROR)

app.post(BASE_API_URL+"/driving_licenses/:aut_com",(req,res) =>{
	
	res.sendStatus(405,"METHOD NOT ALLOW");
});

// DELETE DRIVING-LICENSES
app.delete(BASE_API_URL+"/driving_licenses", (req,res)=>{
	
	var filteredDriving_licenses = driving_licenses.filter((c) => {
		return null;
	});
	
	
	if(filteredDriving_licenses.length < driving_licenses.length){
		driving_licenses = filteredDriving_licenses;
		res.sendStatus(200);
	}else{
		res.sendStatus(404,"DRIVING LICENSES NOT FOUND");
	}
	
	
});

// GET DRIVING-LICENSES

app.get(BASE_API_URL+"/driving_licenses/:aut_com", (req,res)=>{
	
	var aut_com = req.params.aut_com;
	
	var filteredDriving_licenses = driving_licenses.filter((c) => {
		return (c.aut_com == aut_com);
	});
	
	
	if(filteredDriving_licenses.length >= 1){
		res.send(filteredDriving_licenses[0]);
	}else{
		res.sendStatus(404,"DRIVING LICENSES NOT FOUND");
	}
});

// PUT DRIVING-LICENSES (ERROR)

app.put(BASE_API_URL+"/driving_licenses",(req,res) =>{
	
	res.sendStatus(405,"METHOD NOT ALLOW");
});

// PUT DRIVING-LICENSES/XXX
app.put(BASE_API_URL+"/driving_licenses/:aut_com",(req,res) =>{

	var aut_com = req.params.aut_com;
	
	var newDriving_license = req.body;
	
	if(aut_com == newDriving_license.aut_com){
	var filteredDriving_licenses = driving_licenses.filter((c) => {
		return (!(c.aut_com == aut_com));
	});
	
	if(!(filteredDriving_licenses == driving_licenses)){
		driving_licenses = filteredDriving_licenses;
	if((newDriving_license == "") || (newDriving_license.aut_com == null)){
		res.sendStatus(400,"BAD REQUEST");
	} else {
		driving_licenses.push(newDriving_license); 	
		res.sendStatus(201,"UPDATED");
	}} else{
		res.sendStatus(400,"BAD REQUEST");
	}}else{
		res.sendStatus(400,"BAD REQUEST");	
	}
});

// DELETE DRIVING-LICENSES/XXX

app.delete(BASE_API_URL+"/driving_licenses/:aut_com", (req,res)=>{
	
	var aut_com = req.params.aut_com;
	
	var filteredDriving_licenses = driving_licenses.filter((c) => {
		return (c.aut_com != aut_com);
	});
	
	
	if(filteredDriving_licenses.length < driving_licenses.length){
		driving_licenses = filteredDriving_licenses;
		res.sendStatus(200);
	}else{
		res.sendStatus(404,"DRIVING LICENSES NOT FOUND");
	}
	
	
});

// ==================================================
// =============== Start juagommat ================= 
// ==================================================

var trafficInjuries = [];

// GET loadInitialData
app.get(BASE_API_URL + "/traffic-injuries/loadInitialData", (req,res) => {
    
	var initialDataTrafficInjuries = [
  {
    auto_com: "andalusia",
    year: 2018,
    accident: 17.066,
    dead: 274,
    injure: 24.2
  },
  {
    auto_com: "aragon",
    year: 2018,
    accident: 2.228,
    dead: 85,
    injure: 2.915
  },
  {
    auto_com: "asturias",
    year: 2018,
    accident: 2.103,
    dead: 43,
    injure: 2.873
  },
  {
    auto_com: "balearic-islands",
    year: 2018,
    accident: 3.501,
    dead: 53,
    injure: 4.642
  },
  {
    auto_com: "canary-islands",
    year: 2018,
    accident: 3.506,
    dead: 68,
    injure: 4.96
  },
  {
    auto_com: "cantabria",
    year: 2018,
    accident: 647,
    dead: 23,
    injure: 971
  },
  {
    auto_com: "castile-leon",
    year: 2018,
    accident: 2.586,
    dead: 100,
    injure: 3.649
  },
  {
    auto_com: "castile-la-mancha",
    year: 2018,
    accident: 4.425,
    dead: 176,
    injure: 5.869
  },
  {
    auto_com: "catalonia",
    year: 2018,
    accident: 27.202,
    dead: 326,
    injure: 35.426
  },
  {
    auto_com: "ceuta-melilla",
    year: 2018,
    accident: 1.504,
    dead: 51,
    injure: 2.068
  },
  {
    auto_com: "valencia",
    year: 2018,
    accident: 4.519,
    dead: 144,
    injure: 6.267
  },
  {
    auto_com: "extremadura",
    year: 2018,
    accident: 16.724,
    dead: 114,
    injure: 21.285
  },
  {
    auto_com: "galicia",
    year: 2018,
    accident: 2.58,
    dead: 66,
    injure: 3.456
  },
  {
    auto_com: "madrid",
    year: 2018,
    accident: 855,
    dead: 35,
    injure: 1.067
  },
  {
    auto_com: "murcia",
    year: 2018,
    accident: 612,
    dead: 10,
    injure: 819
  },
  {
    auto_com: "navarre",
    year: 2018,
    accident: 8.36,
    dead: 183,
    injure: 10.96
  },
  {
    auto_com: "basque-country",
    year: 2018,
    accident: 4.798,
    dead: 49,
    injure: 6.151
  },
  {
    auto_com: "the-rioja",
    year: 2018,
    accident: 762,
    dead: 6,
    injure: 1.031
  },
  {
    auto_com: "andalusia",
    year: 2017,
    accident: 15.671,
    dead: 305,
    injure: 22.303
  },
  {
    auto_com: "aragon",
    year: 2017,
    accident: 2.483,
    dead: 80,
    injure: 3.289
  },
  {
    auto_com: "asturias",
    year: 2017,
    accident: 2.348,
    dead: 37,
    injure: 3.197
  },
  {
    auto_com: "balearic-islands",
    year: 2017,
    accident: 3.846,
    dead: 68,
    injure: 5.017
  },
  {
    auto_com: "canary-islands",
    year: 2017,
    accident: 3.58,
    dead: 67,
    injure: 5.133
  },
  {
    auto_com: "cantabria",
    year: 2017,
    accident: 734,
    dead: 22,
    injure: 1.017
  },
  {
    auto_com: "castile-leon",
    year: 2017,
    accident: 2.761,
    dead: 129,
    injure: 3.783
  },
  {
    auto_com: "castile-la-mancha",
    year: 2017,
    accident: 4.492,
    dead: 164,
    injure: 5.877
  },
  {
    auto_com: "catalonia",
    year: 2017,
    accident: 27.305,
    dead: 283,
    injure: 35.884
  },
  {
    auto_com: "ceuta-melilla",
    year: 2017,
    accident: 1.546,
    dead: 62,
    injure: 2.137
  },
  {
    auto_com: "valencia",
    year: 2017,
    accident: 4.741,
    dead: 117,
    injure: 6.716
  },
  {
    auto_com: "extremadura",
    year: 2017,
    accident: 16.364,
    dead: 125,
    injure: 20.94
  },
  {
    auto_com: "galicia",
    year: 2017,
    accident: 2.552,
    dead: 85,
    injure: 3.453
  },
  {
    auto_com: "madrid",
    year: 2017,
    accident: 898,
    dead: 29,
    injure: 1.156
  },
  {
    auto_com: "murcia",
    year: 2017,
    accident: 730,
    dead: 26,
    injure: 917
  },
  {
    auto_com: "navarre",
    year: 2017,
    accident: 8.206,
    dead: 176,
    injure: 10.882
  },
  {
    auto_com: "basque-country",
    year: 2017,
    accident: 4.769,
    dead: 51,
    injure: 6.213
  },
  {
    auto_com: "the-rioja",
    year: 2017,
    accident: 879,
    dead: 4,
    injure: 1.248
  },
  {
    auto_com: "andalusia",
    year: 2016,
    accident: 15.859,
    dead: 303,
    injure: 22.988
  },
  {
    auto_com: "aragon",
    year: 2016,
    accident: 2.239,
    dead: 73,
    injure: 2.991
  },
  {
    auto_com: "asturias",
    year: 2016,
    accident: 2.258,
    dead: 35,
    injure: 3.156
  },
  {
    auto_com: "balearic-islands",
    year: 2016,
    accident: 3.872,
    dead: 60,
    injure: 5.276
  },
  {
    auto_com: "canary-islands",
    year: 2016,
    accident: 3.639,
    dead: 71,
    injure: 5.184
  },
  {
    auto_com: "cantabria",
    year: 2016,
    accident: 728,
    dead: 21,
    injure: 1.068
  },
  {
    auto_com: "castile-leon",
    year: 2016,
    accident: 2.928,
    dead: 118,
    injure: 4.098
  },
  {
    auto_com: "castile-la-mancha",
    year: 2016,
    accident: 4.735,
    dead: 175,
    injure: 6.432
  },
  {
    auto_com: "catalonia",
    year: 2016,
    accident: 27.244,
    dead: 282,
    injure: 35.999
  },
  {
    auto_com: "ceuta-melilla",
    year: 2016,
    accident: 1.366,
    dead: 62,
    injure: 1.853
  },
  {
    auto_com: "valencia",
    year: 2016,
    accident: 4.874,
    dead: 141,
    injure: 6.848
  },
  {
    auto_com: "extremadura",
    year: 2016,
    accident: 16.27,
    dead: 121,
    injure: 20.659
  },
  {
    auto_com: "galicia",
    year: 2016,
    accident: 2.354,
    dead: 58,
    injure: 3.222
  },
  {
    auto_com: "madrid",
    year: 2016,
    accident: 756,
    dead: 26,
    injure: 944
  },
  {
    auto_com: "murcia",
    year: 2016,
    accident: 733,
    dead: 25,
    injure: 958
  },
  {
    auto_com: "navarre",
    year: 2016,
    accident: 8.388,
    dead: 180,
    injure: 11.104
  },
  {
    auto_com: "basque-country",
    year: 2016,
    accident: 4.92,
    dead: 56,
    injure: 6.369
  },
  {
    auto_com: "the-rioja",
    year: 2016,
    accident: 862,
    dead: 3,
    injure: 1.241
  },
  {
    auto_com: "andalusia",
    year: 2015,
    accident: 16.431,
    dead: 262,
    injure: 23.897
  },
  {
    auto_com: "aragon",
    year: 2015,
    accident: 2.264,
    dead: 71,
    injure: 2.962
  },
  {
    auto_com: "asturias",
    year: 2015,
    accident: 2.408,
    dead: 36,
    injure: 3.425
  },
  {
    auto_com: "balearic-islands",
    year: 2015,
    accident: 3.513,
    dead: 53,
    injure: 4.724
  },
  {
    auto_com: "canary-islands",
    year: 2015,
    accident: 3.33,
    dead: 62,
    injure: 4.669
  },
  {
    auto_com: "cantabria",
    year: 2015,
    accident: 723,
    dead: 22,
    injure: 1.043
  },
  {
    auto_com: "castile-leon",
    year: 2015,
    accident: 2.727,
    dead: 107,
    injure: 3.776
  },
  {
    auto_com: "castile-la-mancha",
    year: 2015,
    accident: 4.503,
    dead: 181,
    injure: 6.192
  },
  {
    auto_com: "catalonia",
    year: 2015,
    accident: 25.554,
    dead: 291,
    injure: 33.675
  },
  {
    auto_com: "ceuta-melilla",
    year: 2015,
    accident: 1.446,
    dead: 54,
    injure: 2.03
  },
  {
    auto_com: "valencia",
    year: 2015,
    accident: 4.581,
    dead: 123,
    injure: 6.526
  },
  {
    auto_com: "extremadura",
    year: 2015,
    accident: 15.523,
    dead: 111,
    injure: 20.003
  },
  {
    auto_com: "galicia",
    year: 2015,
    accident: 1.796,
    dead: 44,
    injure: 2.517
  },
  {
    auto_com: "madrid",
    year: 2015,
    accident: 475,
    dead: 26,
    injure: 586
  },
  {
    auto_com: "murcia",
    year: 2015,
    accident: 723,
    dead: 20,
    injure: 957
  },
  {
    auto_com: "navarre",
    year: 2015,
    accident: 7.787,
    dead: 154,
    injure: 10.213
  },
  {
    auto_com: "basque-country",
    year: 2015,
    accident: 4.613,
    dead: 67,
    injure: 5.982
  },
  {
    auto_com: "the-rioja",
    year: 2015,
    accident: 918,
    dead: 5,
    injure: 1.278
  }
];
	
    if(trafficInjuries.length >=1){
        res.sendStatus(400,"BAD REQUEST");
		console.log("\n400 - BAD REQUEST - DATA ALREADY LOADED");
    }else{
        trafficInjuries = initialDataTrafficInjuries;
		res.send(JSON.stringify(trafficInjuries, null, 2));
		console.log("\nData sent: " + JSON.stringify(trafficInjuries,null,2));
    }
});

// Redirect to postman url
app.get("/api/v1/traffic-injuries/docs", (req, res)=>{
   res.redirect("https://documenter.getpostman.com/view/10693282/SzYT5gnd");
});

// a) GET /traffic-injuries
app.get(BASE_API_URL+"/traffic-injuries", (req,res) =>{
	res.send(JSON.stringify(trafficInjuries,null,2));
	console.log("\nDATA SENT: " + JSON.stringify(trafficInjuries,null,2));
});


// b) POST /traffic-injuries
app.post(BASE_API_URL+"/traffic-injuries",(req,res) =>{
	var newTrafficInjury = req.body;
	
	if((newTrafficInjury == "") || (newTrafficInjury.auto_com == null)){
		res.sendStatus(400,"BAD REQUEST");
		console.log("\n400 - BAD REQUEST");
	} else {
		trafficInjuries.push(newTrafficInjury); 	
		res.sendStatus(201,"TRAFFIC INJURY CREATED");
		console.log("\n201 - TRAFFIC INJURY CREATED");
	}
});

// c) GET /traffic-injuries/XXX
app.get(BASE_API_URL+"/traffic-injuries/:auto_com", (req, res)=>{
	var auto_com = req.params.auto_com;
	
	var filteredTrafficInjury = trafficInjuries.filter((c) =>{
		return (c.auto_com == auto_com);
	});
	
	if(filteredTrafficInjury.length >= 1){
		res.send(filteredTrafficInjury[0]);
	}else{
		res.sendStatus(404,"TRAFFIC INJURY NOT FOUND")
		console.log("\n404 - TRAFFIC INJURY NOT FOUND");
	}
})

// d) DELETE /traffic-injuries/XXX
app.delete(BASE_API_URL+"/traffic-injuries/:auto_com", (req, res)=>{
	var auto_com = req.params.auto_com;
	
	var filteredTrafficInjury = trafficInjuries.filter((c) =>{
		return (c.auto_com != auto_com);
	});
	
	if(filteredTrafficInjury.length < trafficInjuries.length){
		trafficInjuries = filteredTrafficInjury;
		res.sendStatus(200,"TRAFFIC INJURY DELETED");
		console.log("\n200 - TRAFFIC INJURY DELETED");
	}else{
		res.sendStatus(404,"TRAFFIC INJURY NOT FOUND")
		console.log("\n404 - TRAFFIC INJURY NOT FOUND");
	}
})

// e) PUT /traffic-injuries/XXX
app.put(BASE_API_URL+"/traffic-injuries/:auto_com", (req,res)=>{

});

// f) POST /traffic-injuries/XXX
app.post(BASE_API_URL+"/traffic-injuries/:auto_com", (req,res)=>{
	res.sendStatus(405, "METHOD NOT ALLOWED");
});

// g) PUT /traffic-injuries
app.put(BASE_API_URL+"/traffic-injuries", (req,res)=>{
	res.sendStatus(405, "METHOD NOT ALLOWED");
});

// h) DELETE /traffic-injuries
app.delete(BASE_API_URL + "/traffic-injuries", (req, res) => {
    if(trafficInjuries.length >=1){
    	trafficInjuries = [];
		res.sendStatus(200, "ALL TRAFFIC INJURIES DELETED");
		console.log("\n200 - ALL TRAFFIC INJURIES DELETED");
    }else{
		res.sendStatus(400,"BAD REQUEST");
		console.log("\n400 - BAD REQUEST NO DATA TO DELETE");
	}
});

// ==================================================
// =============== Start josdeonc ================= 
// ==================================================

[
  {
    autonomous_community: "andalusia",
    year: 2016,
    underground_rate_per_thousand: 6338,
    underground_compared_with_last_year_porcentage: 1.2,
    commuter_train_rate_per_thousand: 1514,
    commuter_train_compared_with_last_year_porcentage: 6.2,
    bus_rate_per_thousand: 18576,
    bus_compared_with_last_year_porcentage: 1.2
  },
  {
    autonomous_community: "aragon",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 10091,
    bus_compared_with_last_year_porcentage: -3.3
  },
  {
    autonomous_community: "asturias",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 2696,
    bus_compared_with_last_year_porcentage: 1.2
  },
  {
    autonomous_community: "canary-islands",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 4746,
    bus_compared_with_last_year_porcentage: 3.3
  },
  {
    autonomous_community: "castile-leon",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5647,
    bus_compared_with_last_year_porcentage: 1.8
  },
  {
    autonomous_community: "castile-la-mancha",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1654,
    bus_compared_with_last_year_porcentage: 3.1
  },
  {
    autonomous_community: "catalonia",
    year: 2016,
    underground_rate_per_thousand: 18274,
    underground_compared_with_last_year_porcentage: -5.2,
    commuter_train_rate_per_thousand: 30678,
    commuter_train_compared_with_last_year_porcentage: -5.2,
    bus_rate_per_thousand: 24942,
    bus_compared_with_last_year_porcentage: 6.4
  },
  {
    autonomous_community: "valencia",
    year: 2016,
    underground_rate_per_thousand: 8301,
    underground_compared_with_last_year_porcentage: 3.3,
    commuter_train_rate_per_thousand: 5240,
    commuter_train_compared_with_last_year_porcentage: 3.3,
    bus_rate_per_thousand: 11623,
    bus_compared_with_last_year_porcentage: 4.9
  },
  {
    autonomous_community: "extremadura",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 917,
    bus_compared_with_last_year_porcentage: 1.7
  },
  {
    autonomous_community: "galicia",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5078,
    bus_compared_with_last_year_porcentage: -0.9
  },
  {
    autonomous_community: "madrid",
    year: 2016,
    underground_rate_per_thousand: 37930,
    underground_compared_with_last_year_porcentage: 4.3,
    commuter_train_rate_per_thousand: 49535,
    commuter_train_compared_with_last_year_porcentage: 4.3,
    bus_rate_per_thousand: 42752,
    bus_compared_with_last_year_porcentage: 9.3
  },
  {
    autonomous_community: "murcia",
    year: 2016,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1408,
    bus_compared_with_last_year_porcentage: 0.4
  },
  {
    autonomous_community: "basque-country",
    year: 2016,
    underground_rate_per_thousand: 3139,
    underground_compared_with_last_year_porcentage: -0.9,
    commuter_train_rate_per_thousand: 7414,
    commuter_train_compared_with_last_year_porcentage: 0.8,
    bus_rate_per_thousand: 7307,
    bus_compared_with_last_year_porcentage: 1.8
  },
  {
    autonomous_community: "andalusia",
    year: 2017,
    underground_rate_per_thousand: 7196,
    underground_compared_with_last_year_porcentage: -0.1,
    commuter_train_rate_per_thousand: 2053,
    commuter_train_compared_with_last_year_porcentage: 13,
    bus_rate_per_thousand: 19582,
    bus_compared_with_last_year_porcentage: 0.5
  },
  {
    autonomous_community: "aragon",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 10623,
    bus_compared_with_last_year_porcentage: 0.8
  },
  {
    autonomous_community: "asturias",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 2783,
    bus_compared_with_last_year_porcentage: -1
  },
  {
    autonomous_community: "canary-islands",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5156,
    bus_compared_with_last_year_porcentage: 1.1
  },
  {
    autonomous_community: "castile-leon",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 6043,
    bus_compared_with_last_year_porcentage: 2
  },
  {
    autonomous_community: "castile-la-mancha",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1700,
    bus_compared_with_last_year_porcentage: -0.5
  },
  {
    autonomous_community: "catalonia",
    year: 2017,
    underground_rate_per_thousand: 18056,
    underground_compared_with_last_year_porcentage: -0.8,
    commuter_train_rate_per_thousand: 33943,
    commuter_train_compared_with_last_year_porcentage: 0.9,
    bus_rate_per_thousand: 25150,
    bus_compared_with_last_year_porcentage: -0.9
  },
  {
    autonomous_community: "valencia",
    year: 2017,
    underground_rate_per_thousand: 8657,
    underground_compared_with_last_year_porcentage: 1.4,
    commuter_train_rate_per_thousand: 5712,
    commuter_train_compared_with_last_year_porcentage: 1.5,
    bus_rate_per_thousand: 12232,
    bus_compared_with_last_year_porcentage: 4
  },
  {
    autonomous_community: "extremadura",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1068,
    bus_compared_with_last_year_porcentage: 1.3
  },
  {
    autonomous_community: "galicia",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5479,
    bus_compared_with_last_year_porcentage: 0.9
  },
  {
    autonomous_community: "madrid",
    year: 2017,
    underground_rate_per_thousand: 38138,
    underground_compared_with_last_year_porcentage: 0.9,
    commuter_train_rate_per_thousand: 57721,
    commuter_train_compared_with_last_year_porcentage: 7.6,
    bus_rate_per_thousand: 43954,
    bus_compared_with_last_year_porcentage: 1.1
  },
  {
    autonomous_community: "murcia",
    year: 2017,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1913,
    bus_compared_with_last_year_porcentage: 6
  },
  {
    autonomous_community: "basque-country",
    year: 2017,
    underground_rate_per_thousand: 3290,
    underground_compared_with_last_year_porcentage: 0.1,
    commuter_train_rate_per_thousand: 7936,
    commuter_train_compared_with_last_year_porcentage: 1.4,
    bus_rate_per_thousand: 7840,
    bus_compared_with_last_year_porcentage: 1.7
  },
  {
    autonomous_community: "andalusia",
    year: 2018,
    underground_rate_per_thousand: 11822,
    underground_compared_with_last_year_porcentage: 8.3,
    commuter_train_rate_per_thousand: 2307,
    commuter_train_compared_with_last_year_porcentage: 19.2,
    bus_rate_per_thousand: 21813,
    bus_compared_with_last_year_porcentage: 3.9
  },
  {
    autonomous_community: "aragon",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 12468,
    bus_compared_with_last_year_porcentage: 2.3
  },
  {
    autonomous_community: "asturias",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 2941,
    bus_compared_with_last_year_porcentage: 2.4
  },
  {
    autonomous_community: "canary-islands",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5563,
    bus_compared_with_last_year_porcentage: 5.9
  },
  {
    autonomous_community: "castile-leon",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 6292,
    bus_compared_with_last_year_porcentage: 5
  },
  {
    autonomous_community: "castile-la-mancha",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1785,
    bus_compared_with_last_year_porcentage: 0.6
  },
  {
    autonomous_community: "catalonia",
    year: 2018,
    underground_rate_per_thousand: 20709,
    underground_compared_with_last_year_porcentage: 11.8,
    commuter_train_rate_per_thousand: 37935,
    commuter_train_compared_with_last_year_porcentage: 11.8,
    bus_rate_per_thousand: 28697,
    bus_compared_with_last_year_porcentage: 11.2
  },
  {
    autonomous_community: "valencia",
    year: 2018,
    underground_rate_per_thousand: 8679,
    underground_compared_with_last_year_porcentage: 0.9,
    commuter_train_rate_per_thousand: 6046,
    commuter_train_compared_with_last_year_porcentage: 7.8,
    bus_rate_per_thousand: 13097,
    bus_compared_with_last_year_porcentage: 1.8
  },
  {
    autonomous_community: "extremadura",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1121,
    bus_compared_with_last_year_porcentage: 1.5
  },
  {
    autonomous_community: "galicia",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5932,
    bus_compared_with_last_year_porcentage: 5.4
  },
  {
    autonomous_community: "madrid",
    year: 2018,
    underground_rate_per_thousand: 40495,
    underground_compared_with_last_year_porcentage: 3.2,
    commuter_train_rate_per_thousand: 62907,
    commuter_train_compared_with_last_year_porcentage: 6.3,
    bus_rate_per_thousand: 46573,
    bus_compared_with_last_year_porcentage: 3.6
  },
  {
    autonomous_community: "murcia",
    year: 2018,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 2086,
    bus_compared_with_last_year_porcentage: 7.7
  },
  {
    autonomous_community: "basque-country",
    year: 2018,
    underground_rate_per_thousand: 3422,
    underground_compared_with_last_year_porcentage: 3,
    commuter_train_rate_per_thousand: 8220,
    commuter_train_compared_with_last_year_porcentage: 1.9,
    bus_rate_per_thousand: 8096,
    bus_compared_with_last_year_porcentage: 3.3
  },
  {
    autonomous_community: "andalusia",
    year: 2019,
    underground_rate_per_thousand: 9396,
    underground_compared_with_last_year_porcentage: 4,
    commuter_train_rate_per_thousand: 1437,
    commuter_train_compared_with_last_year_porcentage: 15.9,
    bus_rate_per_thousand: 18.479,
    bus_compared_with_last_year_porcentage: "5,8"
  },
  {
    autonomous_community: "aragon",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 9.271,
    bus_compared_with_last_year_porcentage: "3,8"
  },
  {
    autonomous_community: "asturias",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 2.843,
    bus_compared_with_last_year_porcentage: "6,4"
  },
  {
    autonomous_community: "canary-islands",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5.384,
    bus_compared_with_last_year_porcentage: "10,9"
  },
  {
    autonomous_community: "castile-leon",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5.135,
    bus_compared_with_last_year_porcentage: "3,9"
  },
  {
    autonomous_community: "castile-la-mancha",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1.508,
    bus_compared_with_last_year_porcentage: "4,9"
  },
  {
    autonomous_community: "catalonia",
    year: 2019,
    underground_rate_per_thousand: 19986,
    underground_compared_with_last_year_porcentage: 6.9,
    commuter_train_rate_per_thousand: 32808,
    commuter_train_compared_with_last_year_porcentage: 4.5,
    bus_rate_per_thousand: 27.331,
    bus_compared_with_last_year_porcentage: "6,7"
  },
  {
    autonomous_community: "valencia",
    year: 2019,
    underground_rate_per_thousand: 7868,
    underground_compared_with_last_year_porcentage: 2,
    commuter_train_rate_per_thousand: 5363,
    commuter_train_compared_with_last_year_porcentage: 2.6,
    bus_rate_per_thousand: 12.464,
    bus_compared_with_last_year_porcentage: "2,4"
  },
  {
    autonomous_community: "extremadura",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 762,
    bus_compared_with_last_year_porcentage: "7,9"
  },
  {
    autonomous_community: "galicia",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 5.196,
    bus_compared_with_last_year_porcentage: "5,5"
  },
  {
    autonomous_community: "madrid",
    year: 2019,
    underground_rate_per_thousand: 32858,
    underground_compared_with_last_year_porcentage: 7.3,
    commuter_train_rate_per_thousand: 50950,
    commuter_train_compared_with_last_year_porcentage: 4.5,
    bus_rate_per_thousand: 37.5,
    bus_compared_with_last_year_porcentage: "7,3"
  },
  {
    autonomous_community: "murcia",
    year: 2019,
    underground_rate_per_thousand: "",
    underground_compared_with_last_year_porcentage: "",
    commuter_train_rate_per_thousand: "",
    commuter_train_compared_with_last_year_porcentage: "",
    bus_rate_per_thousand: 1.322,
    bus_compared_with_last_year_porcentage: "6,1"
  },
  {
    autonomous_community: "basque-country",
    year: 2019,
    underground_rate_per_thousand: 2630,
    underground_compared_with_last_year_porcentage: -0.1,
    commuter_train_rate_per_thousand: 6727,
    commuter_train_compared_with_last_year_porcentage: 3,
    bus_rate_per_thousand: 7.255,
    bus_compared_with_last_year_porcentage: "2,0"
  }
]

app.listen(port, () => {
	console.log("Server ready!");
});

console.log("Starting server...");
console.log(cool());