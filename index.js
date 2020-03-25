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
	}
]

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

// DELETE DRIVING-LICENSES

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

// PUT DRIVING-LICENSES/XXX

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

// Redirect to postman url
app.get("/api/v1/trafic-injuries/docs", (req, res)=>{
   res.redirect("https://documenter.getpostman.com/view/10693282/SzYT5gnd");
});

var traficInjuries = [
  {
    autoCom: "andalusia",
    year: 2018,
    accident: 17.066,
    dead: 274,
    injure: 24.2
  },
  {
    autoCom: "aragon",
    year: 2018,
    accident: 2.228,
    dead: 85,
    injure: 2.915
  },
  {
    autoCom: "asturias",
    year: 2018,
    accident: 2.103,
    dead: 43,
    injure: 2.873
  },
  {
    autoCom: "balearic-islands",
    year: 2018,
    accident: 3.501,
    dead: 53,
    injure: 4.642
  },
  {
    autoCom: "canary-islands",
    year: 2018,
    accident: 3.506,
    dead: 68,
    injure: 4.96
  },
  {
    autoCom: "cantabria",
    year: 2018,
    accident: 647,
    dead: 23,
    injure: 971
  },
  {
    autoCom: "castile-leon",
    year: 2018,
    accident: 2.586,
    dead: 100,
    injure: 3.649
  },
  {
    autoCom: "castile-la-mancha",
    year: 2018,
    accident: 4.425,
    dead: 176,
    injure: 5.869
  },
  {
    autoCom: "catalonia",
    year: 2018,
    accident: 27.202,
    dead: 326,
    injure: 35.426
  },
  {
    autoCom: "ceuta-melilla",
    year: 2018,
    accident: 1.504,
    dead: 51,
    injure: 2.068
  },
  {
    autoCom: "valencia",
    year: 2018,
    accident: 4.519,
    dead: 144,
    injure: 6.267
  },
  {
    autoCom: "extremadura",
    year: 2018,
    accident: 16.724,
    dead: 114,
    injure: 21.285
  },
  {
    autoCom: "galicia",
    year: 2018,
    accident: 2.58,
    dead: 66,
    injure: 3.456
  },
  {
    autoCom: "madrid",
    year: 2018,
    accident: 855,
    dead: 35,
    injure: 1.067
  },
  {
    autoCom: "murcia",
    year: 2018,
    accident: 612,
    dead: 10,
    injure: 819
  },
  {
    autoCom: "navarre",
    year: 2018,
    accident: 8.36,
    dead: 183,
    injure: 10.96
  },
  {
    autoCom: "basque-country",
    year: 2018,
    accident: 4.798,
    dead: 49,
    injure: 6.151
  },
  {
    autoCom: "the-rioja",
    year: 2018,
    accident: 762,
    dead: 6,
    injure: 1.031
  },
  {
    autoCom: "",
    year: "",
    accident: "",
    dead: "",
    injure: ""
  },
  {
    autoCom: "andalusia",
    year: 2017,
    accident: 15.671,
    dead: 305,
    injure: 22.303
  },
  {
    autoCom: "aragon",
    year: 2017,
    accident: 2.483,
    dead: 80,
    injure: 3.289
  },
  {
    autoCom: "asturias",
    year: 2017,
    accident: 2.348,
    dead: 37,
    injure: 3.197
  },
  {
    autoCom: "balearic-islands",
    year: 2017,
    accident: 3.846,
    dead: 68,
    injure: 5.017
  },
  {
    autoCom: "canary-islands",
    year: 2017,
    accident: 3.58,
    dead: 67,
    injure: 5.133
  },
  {
    autoCom: "cantabria",
    year: 2017,
    accident: 734,
    dead: 22,
    injure: 1.017
  },
  {
    autoCom: "castile-leon",
    year: 2017,
    accident: 2.761,
    dead: 129,
    injure: 3.783
  },
  {
    autoCom: "castile-la-mancha",
    year: 2017,
    accident: 4.492,
    dead: 164,
    injure: 5.877
  },
  {
    autoCom: "catalonia",
    year: 2017,
    accident: 27.305,
    dead: 283,
    injure: 35.884
  },
  {
    autoCom: "ceuta-melilla",
    year: 2017,
    accident: 1.546,
    dead: 62,
    injure: 2.137
  },
  {
    autoCom: "valencia",
    year: 2017,
    accident: 4.741,
    dead: 117,
    injure: 6.716
  },
  {
    autoCom: "extremadura",
    year: 2017,
    accident: 16.364,
    dead: 125,
    injure: 20.94
  },
  {
    autoCom: "galicia",
    year: 2017,
    accident: 2.552,
    dead: 85,
    injure: 3.453
  },
  {
    autoCom: "madrid",
    year: 2017,
    accident: 898,
    dead: 29,
    injure: 1.156
  },
  {
    autoCom: "murcia",
    year: 2017,
    accident: 730,
    dead: 26,
    injure: 917
  },
  {
    autoCom: "navarre",
    year: 2017,
    accident: 8.206,
    dead: 176,
    injure: 10.882
  },
  {
    autoCom: "basque-country",
    year: 2017,
    accident: 4.769,
    dead: 51,
    injure: 6.213
  },
  {
    autoCom: "the-rioja",
    year: 2017,
    accident: 879,
    dead: 4,
    injure: 1.248
  },
  {
    autoCom: "",
    year: "",
    accident: "",
    dead: "",
    injure: ""
  },
  {
    autoCom: "andalusia",
    year: 2016,
    accident: 15.859,
    dead: 303,
    injure: 22.988
  },
  {
    autoCom: "aragon",
    year: 2016,
    accident: 2.239,
    dead: 73,
    injure: 2.991
  },
  {
    autoCom: "asturias",
    year: 2016,
    accident: 2.258,
    dead: 35,
    injure: 3.156
  },
  {
    autoCom: "balearic-islands",
    year: 2016,
    accident: 3.872,
    dead: 60,
    injure: 5.276
  },
  {
    autoCom: "canary-islands",
    year: 2016,
    accident: 3.639,
    dead: 71,
    injure: 5.184
  },
  {
    autoCom: "cantabria",
    year: 2016,
    accident: 728,
    dead: 21,
    injure: 1.068
  },
  {
    autoCom: "castile-leon",
    year: 2016,
    accident: 2.928,
    dead: 118,
    injure: 4.098
  },
  {
    autoCom: "castile-la-mancha",
    year: 2016,
    accident: 4.735,
    dead: 175,
    injure: 6.432
  },
  {
    autoCom: "catalonia",
    year: 2016,
    accident: 27.244,
    dead: 282,
    injure: 35.999
  },
  {
    autoCom: "ceuta-melilla",
    year: 2016,
    accident: 1.366,
    dead: 62,
    injure: 1.853
  },
  {
    autoCom: "valencia",
    year: 2016,
    accident: 4.874,
    dead: 141,
    injure: 6.848
  },
  {
    autoCom: "extremadura",
    year: 2016,
    accident: 16.27,
    dead: 121,
    injure: 20.659
  },
  {
    autoCom: "galicia",
    year: 2016,
    accident: 2.354,
    dead: 58,
    injure: 3.222
  },
  {
    autoCom: "madrid",
    year: 2016,
    accident: 756,
    dead: 26,
    injure: 944
  },
  {
    autoCom: "murcia",
    year: 2016,
    accident: 733,
    dead: 25,
    injure: 958
  },
  {
    autoCom: "navarre",
    year: 2016,
    accident: 8.388,
    dead: 180,
    injure: 11.104
  },
  {
    autoCom: "basque-country",
    year: 2016,
    accident: 4.92,
    dead: 56,
    injure: 6.369
  },
  {
    autoCom: "the-rioja",
    year: 2016,
    accident: 862,
    dead: 3,
    injure: 1.241
  },
  {
    autoCom: "",
    year: "",
    accident: "",
    dead: "",
    injure: ""
  },
  {
    autoCom: "andalusia",
    year: 2015,
    accident: 16.431,
    dead: 262,
    injure: 23.897
  },
  {
    autoCom: "aragon",
    year: 2015,
    accident: 2.264,
    dead: 71,
    injure: 2.962
  },
  {
    autoCom: "asturias",
    year: 2015,
    accident: 2.408,
    dead: 36,
    injure: 3.425
  },
  {
    autoCom: "balearic-islands",
    year: 2015,
    accident: 3.513,
    dead: 53,
    injure: 4.724
  },
  {
    autoCom: "canary-islands",
    year: 2015,
    accident: 3.33,
    dead: 62,
    injure: 4.669
  },
  {
    autoCom: "cantabria",
    year: 2015,
    accident: 723,
    dead: 22,
    injure: 1.043
  },
  {
    autoCom: "castile-leon",
    year: 2015,
    accident: 2.727,
    dead: 107,
    injure: 3.776
  },
  {
    autoCom: "castile-la-mancha",
    year: 2015,
    accident: 4.503,
    dead: 181,
    injure: 6.192
  },
  {
    autoCom: "catalonia",
    year: 2015,
    accident: 25.554,
    dead: 291,
    injure: 33.675
  },
  {
    autoCom: "ceuta-melilla",
    year: 2015,
    accident: 1.446,
    dead: 54,
    injure: 2.03
  },
  {
    autoCom: "valencia",
    year: 2015,
    accident: 4.581,
    dead: 123,
    injure: 6.526
  },
  {
    autoCom: "extremadura",
    year: 2015,
    accident: 15.523,
    dead: 111,
    injure: 20.003
  },
  {
    autoCom: "galicia",
    year: 2015,
    accident: 1.796,
    dead: 44,
    injure: 2.517
  },
  {
    autoCom: "madrid",
    year: 2015,
    accident: 475,
    dead: 26,
    injure: 586
  },
  {
    autoCom: "murcia",
    year: 2015,
    accident: 723,
    dead: 20,
    injure: 957
  },
  {
    autoCom: "navarre",
    year: 2015,
    accident: 7.787,
    dead: 154,
    injure: 10.213
  },
  {
    autoCom: "basque-country",
    year: 2015,
    accident: 4.613,
    dead: 67,
    injure: 5.982
  },
  {
    autoCom: "the-rioja",
    year: 2015,
    accident: 918,
    dead: 5,
    injure: 1.278
  }
];

// a) GET trafic-injuries
app.get(BASE_API_URL+"/trafic-injuries", (req,res) =>{
	res.send(JSON.stringify(traficInjuries,null,2));
	console.log("\nData sent: " + JSON.stringify(traficInjuries,null,2));
});


// POST trafic-injuries
app.post(BASE_API_URL+"/trafic-injuries",(req,res) =>{
	
	var newContact = req.body;
	
	if((newContact == "") || (newContact.name == null)){
		res.sendStatus(400,"BAD REQUEST");
	} else {
		contacts.push(newContact); 	
		res.sendStatus(201,"CREATED");
	}
});

// DELETE trafic-injuries

// GET trafic-injuries/XXX

app.get(BASE_API_URL+"/trafic-injuries/:name", (req, res)=>{
	var name = req.params.name;
	
	var filteredContacts = traficInjuries.filter((c) =>{
		return (c.name == name);
	});
	
	if(filteredContacts.length >= 1){
		res.send(filteredContacts[0]);
	}else{
		res.sendStatus(404,"TRAFIC INJURIE NOT FOUND")
	}
})

// PUT trafic-injuries/XXX

// DELETE trafic-injuries/XXX
app.delete(BASE_API_URL+"/trafic-injuries/:name", (req, res)=>{
	var name = req.params.name;
	
	var filteredContacts = traficInjuries.filter((c) =>{
		return (c.name != name);
	});
	
	if(filteredContacts.length < traficInjuries.length){
		traficInjuries = filteredContacts;
		res.sendStatus(200);
	}else{
		res.sendStatus(404,"TRAFIC INJURIE NOT FOUND")
	}
})

// ==================================================
// =============== Start josdeonc ================= 
// ==================================================

app.listen(port, () => {
	console.log("Server ready!");
});

console.log("Starting server...");
console.log(cool());