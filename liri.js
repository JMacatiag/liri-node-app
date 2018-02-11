var dotenv = require("dotenv").config();
var fs = require('fs');
var request = require('request');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

// Get user input from terminal
var liriCommand = process.argv[2];
var liriData = process.argv[3];
var inputArray=process.argv;

function liri(liriCommand){

	if (liriCommand==="my-tweets"){
		twitterRun();
	}

	else if (liriCommand==="spotify-this-song"){
		var song="";
		if (inputArray.length<4){
			song="The Sign Ace of Base";
			spotifyRun(song);
		}
		else{
			song=liriData;
			spotifyRun(song);
		}
		
	}

	else if (liriCommand==="movie-this"){
		var movie="";
		if (inputArray.length<4){
			movie="Mr. Nobody.";
			movieRun(movie);
		}
		else{
			movie=liriData;
			movieRun(movie);
		}
	}

	else if (liriCommand==="do-what-it-says"){
		doWhatItSays();
	}

	else{
		console.log("no command");
	}

}

// Function to access twitter and display necessary content
function twitterRun(){
	// Get the appropriate validation from twitter
	var keys = require('./keys.js');
	var twitterID = keys.twitter;
	var client = new Twitter({
        consumer_key: twitterID.consumer_key,
        consumer_secret: twitterID.consumer_secret,
        access_token_key: twitterID.access_token_key,
        access_token_secret: twitterID.access_token_secret
    });

    // Screen name of uses twitter account
	var params = {Marveillesly: 'nodejs'};

	// Access and display tweets
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
                console.log('*******************');
            }
        } else {
            console.log('Error occurred: ' + error);
        }
    });

}

function spotifyRun(song){
	var keys = require('./keys.js');
	  var spotify = new Spotify(keys.spotify);
    // Search for song 
    spotify.search({ type: 'track', query: song }, function(error, response) {

        // Display song details and show error if there is an error
        if (!error) {
            console.log('Artist Name: ' + response.tracks.items[0].artists[0].name);
            console.log('Song Name: ' + response.tracks.items[0].name);
            console.log('Preview URL: ' + response.tracks.items[0].preview_url);
            console.log('Album Name: ' + response.tracks.items[0].album.name);
        } else {
            console.log('Error occurred: ' + error);
        }
    });
}

function movieRun(movie){

	// Search for movie
	request("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        // Display song details and show error if there is an error

        if (!error && response.statusCode == 200) {
        	body = JSON.parse(body);
            console.log('Movie Title: ' + body.Title);
            console.log('Year Released: ' + body.Released);
            console.log('IMDB Rating: ' + body.Ratings[0].Value);
            console.log('Rotten Tomatoes Rating: ' + body.Ratings[1].Value);
            console.log('Production Country: ' + body.Country);
            console.log('Language: ' + body.Language);
            console.log('Plot: ' + body.Plot);
            console.log('Actors: ' + body.Actors);
        } 
        else {
            console.log('Error occurred: ' + error);
        }
    });
}

function doWhatItSays(){
	fs.readFile("random.txt", "utf8", function(error, data) {

		// If the code experiences any errors it will log the error to the console.
		if (error) {
			return console.log(error);
		}

		var dataArr = data.split(",");
		// console.log(dataArr);
		if (dataArr[0]==="spotify-this-song"){
			spotifyRun(dataArr[1]);
		}

		if (dataArr[0]==="movie-this"){
			movieRun(dataArr[1]);
		}

		if (dataArr[0]==="my-tweets"){
			twitterRun();
		}






	});
}

liri(liriCommand);