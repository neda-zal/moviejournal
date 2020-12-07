// jshint esversion:10
//document.getElementById('navbarDropdown').addEventListener('click', function() {
$('navbarDropdown').ready(function() {
	// The base url for all API calls
	let apiBaseURL = 'https://api.themoviedb.org/3/';
	let apiKey = "177171d8e6052aa2e12394d9149a17aa";
	let imageBaseUrl = 'https://image.tmdb.org/t/p/';

	const genresURL = apiBaseURL + 'genre/movie/list?api_key=' + apiKey + '&language=en-US'
	const genSearchURL = apiBaseURL + 'discover/movie?api_key=' + apiKey + "&language=en-US&sort_by=popularity.desc&include_adult=false&page=1"
	var $_GET=[];
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});

	let genre_query = genSearchURL + "&with_genres=" + $_GET['g'];

	function getGenres() {
		$.getJSON(genre_query, function(upcomingData) {
			console.log(upcomingData);
			let films = upcomingData.results;
			for (let i = 0; i < films.length; i++) {
				let title = films[i].title;
				let poster = imageBaseUrl + 'w300' + films[i].poster_path;
				let releaseDate = films[i].release_date;
				let overview = films[i].overview;
				let voteAverage = films[i].vote_average;

				let filmHTML = '';
				filmHTML += '<div class="col-sm-3 eachMovie">';
				filmHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal' + i + '" data-whatever="@' + i + '">' + '<img src="' + poster + '"></button>';
				filmHTML += '<div class="modal fade" id="exampleModal' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
				filmHTML += '<div class="modal-dialog" role="document">';
				filmHTML += '<div class="modal-content col-sm-12" style="display: block; flex-direction: row;">';
				filmHTML += '<div class="col-sm-6 moviePosterInModal">';
				filmHTML += '<img src="' + poster + '">';
				filmHTML += '</div><br>'; //close trailerLink
				filmHTML += '<div class="col-sm-6 movieDetails">';
				filmHTML += '<form action="/addtowatchlist" method="post">';
				filmHTML += '<div class="movieName">' + title + '</div><br>';
				filmHTML += '<div class="release">Release Date: ' + releaseDate + '</div><br>';
				filmHTML += '<div class="overview">' + overview + '</div><br>';
				filmHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div><br>';
				filmHTML += '<input id="movieId" style="display: none;" name="movietitle" value="'+ title + '" />';
            filmHTML += '<input name="releaseDate" style="display: none;" value="' + releaseDate + '"/>';
            filmHTML += '<input name="rating" style="display: none;" value="' + voteAverage + '"/>';
            filmHTML += '<input name="overview" style="display: none;" value="' + overview + '"/>';
            filmHTML += '<input name="poster" style="display: none;" value="' + poster + '"/>';
				filmHTML += '<button type="submit" class="btn btn-primary pull-right mb-3">Add to watchlist</button><br>';
				filmHTML += '</form></div>'; //close movieDetails
				filmHTML += '</div>'; //close modal-content
				filmHTML += '</div>'; //close modal-dialog
				filmHTML += '</div>'; //close modal
				filmHTML += '</div>'; //close off each div

				$('#movie-grid').append(filmHTML);

			}
		});
	}

	getGenres();
});
