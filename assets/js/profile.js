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

               let nowPlayingHTML = '';


               nowPlayingHTML += '<div class="col-sm-3 eachMovie">';

               nowPlayingHTML += '<div class="add-button-container">';
               nowPlayingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal' + i + '" data-whatever="@' + i + '">' + '<img src="' + poster + '"></button>';
               nowPlayingHTML += '<button type="button" class="btn btn-add-movie" data-toggle="modal" data-target="#modalAddMovie" data-toggle="tooltip" data-placement="bottom" title="Add movie to a list">Modify</button>';
               nowPlayingHTML += '<div class="modal fade" id="exampleModal' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
               nowPlayingHTML += '<div class="modal-dialog" role="document">';
               nowPlayingHTML += '<div class="modal-content col-sm-12">';
               nowPlayingHTML += '<div class="col-sm-6 moviePosterInModal">';
               nowPlayingHTML += '<a href="' + youtubeLink + '"><img src="' + poster + '"></a>';
               nowPlayingHTML += '</div><br>'; //close trailerLink
               nowPlayingHTML += '<div class="col-sm-6 movieDetails">';
               nowPlayingHTML += '<div class="movieName">' + title + '</div><br>';
               nowPlayingHTML += '<div class="linkToTrailer"><a href="' + youtubeLink + '"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';
               nowPlayingHTML += '<div class="release">Release Date: ' + releaseDate + '</div><br>';
               nowPlayingHTML += '<div class="overview">' + overview + '</div><br>';
               nowPlayingHTML += '<div class="rating">Rating: ' + voteAverage + '/10</div><br>';
               nowPlayingHTML += '</div>'; //close movieDetails
               nowPlayingHTML += '</div>'; //close modal-content
               nowPlayingHTML += '</div>'; //close modal-dialog
               nowPlayingHTML += '</div>'; //close modal
               nowPlayingHTML += '</div>'; //close off each div
               nowPlayingHTML += '</div>'; //close off each div add-button-container

               $('#movie-grid').append(nowPlayingHTML);
            });
         }
      });
   }

   getUpcomingData();

});

function profileValidation() {

   let a = document.getElementById('exampleInputPassword1');
   let b = document.getElementById('exampleInputPassword2');
   let c = document.getElementById('exampleInputUsername1');
   let d = document.getElementById('exampleInputEmail1');

   let badColor = "#ff6666";

   if (c.value === "" || d.value === "" || a.value.length < 6 || b.value.length < 6 ||
      a.value !== b.value) {
      if (c) {
         let message1 = document.getElementById('invalid-feedback');
         if (c.value.length < 6) {
            message1.style.color = badColor;
            message1.innerHTML = "Username should contain at least 6 characters";
         } else {
            message1.innerHTML = "";
         }
      }

      if (d) {
         let message2 = document.getElementById('invalid-feedback1');
         if (d.value === "") {
            message2.style.color = badColor;
            message2.innerHTML = "Please provide a valid email address";
         } else {
            message2.innerHTML = "";
         }
      }

      if (a) {
         let message3 = document.getElementById('invalid-feedback2');
         if (a.value.length < 6) {
            message3.style.color = badColor;
            message3.innerHTML = "Password should contain at least 6 characters";
         } else {
            message3.innerHTML = "";
         }
      }

      if(b) {
         let message4 = document.getElementById('invalid-feedback3');
         if (b.value.length < 6) {
            message4.style.color = badColor;
            message4.innerHTML = "Password should contain at least 6 characters";
         } else {
            message4.innerHTML = "";
         }
      }

      if(a.value !== b.value) {
         let message4 = document.getElementById('invalid-feedback3');
         message4.style.color = badColor;
         message4.innerHTML = "Passwords do not match";
      }

   } else {
      return true;
   }

}
