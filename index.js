const cool = require("cool-ascii-faces");	// Carga el mรณdulo en la variable cool
const express = require("express");

var app = express();	// Se construye un objeto

var port = process.env.PORT || 80;

app.get("/public", (request,response) => {
	response.sendFile(__dirname + "/public/index.html");
});


app.listen(80);		// Servidor web listo
console.log("Server ready! ");

console.log("I love js");
console.log(cool());