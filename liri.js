var dotenv = require("dotenv").config();
var fs = require('fs');
var request = require('request');
var spotify = require('spotify');
var Twitter = require('twitter');

// var spotifyID = keys.spotify;

// Get user input from terminal
var liriCommand = process.argv[2];
var liriData = process.argv[3];

// console.log(twitterID);
// console.log(spotifyID);


// console.log(liriCommand);
// console.log(liriData);
// console.log(process.argv);

// liri function to determine what process needs to be run
function liri(liriCommand, liriData){


	if (liriCommand==="my-tweets"){
		twitter();
	}

	// else if (liriCommand==="spotify-this-song"){
	// 	spotify();
	// }

	// else if (liriCommand==="movie-this"){
	// 	movie();
	// }

	// else if (liriCommand==="do-what-it-says"){
	// 	doWhatItSays();
	// }

	// else{
	// 	console.log("no command");
	// }

}

function twitter(){
	var keys = require('./keys.js');
	var twitterID = keys.twitter;
	// console.log(twitterID.consumer_key);
	var client = new Twitter({
        consumer_key: twitterID.consumer_key,
        consumer_secret: twitterID.consumer_secret,
        access_token_key: twitterID.access_token_key,
        access_token_secret: twitterID.access_token_secret
    });
    console.log(client);
	var params = {Marveillesly: 'nodejs'};

    client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
        if (!error) {
            if (tweets.length < 20) {
                var numberTweets = tweets.length;
            } 
			else {
                var numberTweets = 20;
            }
            for (var i = 0; i < numberTweets; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
                console.log('-----------');
            }
        } else {
            console.log('Error occurred: ' + error);
        }
    });

}

// function spotify(song){

// }

// function movie(){

// }

// function doWhatItSays(){

// }

liri(liriCommand, liriData);

