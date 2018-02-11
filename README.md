# liri-node-app

### Build an Siri Like app that uses the command line to take in parameters and give back data using node packages and the Twitter, Spotify, OMDB, and IMDB API's.

### Design Notes
	* Use Node packages to extract user input from terminal and output desired data to said terminal
	* node liri.js my-tweets
		* Show last 20 tweets and when they were created.
	* node liri.js spotify-this-song 'song name'
		* Show Artist
		* Show Song Title
		* Show Preview Link
		* Show Album Name
		* If no song title is given, liri will provide data to "The Sign" by Ace of Base
	* node liri.js movie-this 'movie title'
		* Show Movie Title
		* Show Year of Release
		* Show IMDB Rating
		* Show Rotten Tomatoes Rating
		* Show Production Country
		* Show Language
		* Show Movie Plot
		* Show Actors
		* if no movie is provided liri will provide data to "Mr. Nobody"
	* node liri do-what-it-says
		* Uses the fs Node package to take the contents of random.txt and runs the corresponding command.
		* Defaults to spotify-this-song "I Want it That Way" 

### Stack Used
	* Javascript
	* JQuery
	* Node Packages
		* Request
		* Spotify
		* Twitter