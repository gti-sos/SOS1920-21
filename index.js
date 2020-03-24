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

app.listen(port, () => {
	console.log("Server ready!");
});

console.log("Starting server...");
console.log(cool());