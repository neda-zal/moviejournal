// jshint esversion:10
//document.getElementById('navbarDropdown').addEventListener('click', function() {
$('navbarDropdown').ready(function() {
	// The base url for all API calls
	let apiBaseURL = 'https://api.themoviedb.org/3/';
	let apiKey = "177171d8e6052aa2e12394d9149a17aa";

	const genresURL = apiBaseURL + 'genre/movie/list?api_key=' + apiKey + '&language=en-US'
	const genSearchURL = apiBaseURL + 'discover/movie?api_key=' + apiKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&page=1"

	function getGenres() {
		$.getJSON(genresURL, function(upcomingData) {
			var genres = upcomingData.genres;
			for (let i = 0; i < genres.length; i++) {
				let genre = genres[i].name;
				let genre_query = genSearchURL + "&with_genres=" + genres[i].id;
				console.log(genre_query);
				var genre_html = `<a class="dropdown-item" href="/genremovies?g=${genres[i].id}&genre_name=${genre}">${genre}</a>`
				document.getElementById('navbarDropdownMenu').innerHTML += genre_html
			}
		});
	}

	getGenres();
});
