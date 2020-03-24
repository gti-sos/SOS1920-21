const cool = require("cool-ascii-faces");
const express = require("express");

var app = express();
var port = process.env.PORT || 80;

app.use("/", express.static("./public"));

app.get("/cool", (request,response) => {
	response.send("<html>" + cool() + "</html>");
});

const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL+"/", (req,res) =>{
	
});

app.post(BASE_API_URL+"/", (req,res) =>{
	
});


app.listen(port, () => {
	console.log("Server ready!");
});

console.log("Starting server...");
console.log(cool());