// jshint esversion:10
$(document).ready(function() {
  // The base url for all API calls
  let apiBaseURL = 'https://api.themoviedb.org/3/';
  let apiKey = "177171d8e6052aa2e12394d9149a17aa";

  let imageBaseUrl = 'https://image.tmdb.org/t/p/';

  const upcomingURL = apiBaseURL + 'movie/upcoming?api_key=' + apiKey;

  function getUpcomingData() {
    $.getJSON(upcomingURL, function(upcomingData) {
      for (let i = 0; i < upcomingData.results.length; i++) {

        let dataRes = upcomingData.results[i].id;

        let thisMovieUrl = apiBaseURL + 'movie/' + dataRes + '/videos?api_key=' + apiKey;

        $.getJSON(thisMovieUrl, function(movieKey) {

          let poster = imageBaseUrl + 'w300' + upcomingData.results[i].poster_path;

          let title = upcomingData.results[i].original_title;

          let releaseDate = upcomingData.results[i].release_date;

          let overview = upcomingData.results[i].overview;

          let voteAverage = upcomingData.results[i].vote_average;

          let youtubeKey = movieKey.results[0].key;

          let youtubeLink = 'https://www.youtube.com/watch?v=' + youtubeKey;

          let upcomingHTML = '';

          upcomingHTML += '<div class="col-sm-3 eachMovie">';
          upcomingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal' + i + '" data-whatever="@' + i + '">' + '<img src="' + poster + '"></button>';
          upcomingHTML += '<div class="modal fade" id="exampleModal' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
          upcomingHTML += '<div class="modal-dialog" role="document">';
          upcomingHTML += '<div class="modal-content col-sm-12" style="display: block; flex-direction: row;">';
          upcomingHTML += '<div class="col-sm-6 moviePosterInModal">';
          upcomingHTML += '<a href="' + youtubeLink + '"><img src="' + poster + '"></a>';
          upcomingHTML += '</div><br>'; //close trailerLink
          upcomingHTML += '<div class="col-sm-6 movieDetails style="position: relative;">';
          upcomingHTML += '<div class="movieName">' + title + '</div><br>';
          upcomingHTML += '<div class="linkToTrailer"><a href="' + youtubeLink + '"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';
          upcomingHTML += '<div class="release">Release Date: ' + releaseDate + '</div><br>';
          upcomingHTML += '<div class="overview">' + overview + '</div><br>';
          upcomingHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div><br>';
          upcomingHTML += '</div>'; //close movieDetails
          upcomingHTML += '</div>'; //close modal-content
          upcomingHTML += '</div>'; //close modal-dialog
          upcomingHTML += '</div>'; //close modal
          upcomingHTML += '</div>'; //close off each div

          $('#movie-grid').append(upcomingHTML);
        });
      }
    });
  }

  getUpcomingData();

});
