var dotenv = require("dotenv").config();
var fs = require('fs');
var request = require('request');
var spotify = require('spotify');
var twitter = require('twitter');
var keys = require('./keys.js');

// Get user input from terminal
var liriArgs = process.argv.slice(2);
var liriCommand = liriArgs[0];
var liriData = liriArgs[1];

// console.log(liriArgs);
// console.log(liriCommand);
// console.log(liriData);
// console.log(process.argv);

// liri function to determine what process needs to be run
function liri(liriCommand){
	if (liriCommand==="my-tweets"){
		twitter();
	}

	else if (liriCommand==="spotify-this-song"){
		spotify();
	}

	else if (liriCommand==="movie-this"){
		movie();
	}

	else if (liriCommand==="do-what-it-says"){
		doWhatItays();
	}

	else{
		console.log("no command");
	}

}


