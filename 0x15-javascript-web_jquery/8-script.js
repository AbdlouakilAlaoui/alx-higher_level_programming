$(document).ready(function() {
    $.ajax({
        url: "https://swapi-api.alx-tools.com/api/films/?format=json",
        type: "GET",
        success: function(response) {
            response.results.forEach(function(movie) {
                $("#list_movies").append("<li>" + movie.title + "</li>"); // Append movie title to #list_movies ul
            });
        },
        error: function(xhr, status, error) {
            console.log("Error fetching movies:", error);
        }
    });
});
