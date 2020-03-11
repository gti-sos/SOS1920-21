const cool = require("cool-ascii-faces");
const express = require("express");

var app = express();
var port = process.env.PORT || 80;

app.get("/public", (request,response) => {
	response.sendFile(__dirname + "/public/index.html");
});

app.listen(port,() => {
	console.log("Server ready! ");
	console.log(cool());
});	