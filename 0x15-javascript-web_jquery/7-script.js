$(document).ready(function() {
    $.ajax({
        url: "https://swapi-api.alx-tools.com/api/people/5/?format=json",
        type: "GET",
        success: function(response) {
            $("#character").text(response.name); // Display character name in #character div
        },
        error: function(xhr, status, error) {
            console.log("Error fetching character name:", error);
        }
    });
});
