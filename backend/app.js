// start the server: node app.js
// stop the server: control + c

// require cors
var cors = require("cors");

// install express and store in variable
const express = require("express");

// activates express server 
const app = express();

// use cors
app.use(cors());

// install router
const router = express.Router();

/*
// start web server
app.listen(3000, function(){
	console.log("Listening on port 3000...");
});

// api using routes (ties urls to a function)

// get request for /hello
app.get("/hello", function(req, resp) {
	resp.send("<h1>Hello, Express</h1>");
});

// get request for /goodbye
app.get("/goodbye", function(req, resp) {
	resp.send("<h1>Goodbye, Express</h1>");
});
*/

// send data (1 song as json)
router.get("/songs", function(req, resp){
	const song1 = {
		title: "Cemetary Gates",
		artist: "Pantera",
		populartity: 10,
		genre: ["Metal", "90s"]
	};
	const song2 = {
		title: "Thunderkiss '65",
		artist: "White Zombie",
		populartity: 10,
		genre: ["Metal", "90s"]
	};

	resp.json([song1, song2]);
});

// set all urls for api to localhost:3000/api
app.use("/api", router);

// listen on port 3000
app.listen(3000, function(){
	console.log("Listening on port 3000...");
});