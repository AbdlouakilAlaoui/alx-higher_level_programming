$(document).ready(function() {
    $.ajax({
        url: "https://hellosalut.stefanbohacek.dev/?lang=fr",
        type: "GET",
        success: function(response) {
            $("#hello").text(response.hello); // Display translation of "hello" in #hello div
        },
        error: function(xhr, status, error) {
            console.log("Error fetching translation:", error);
        }
    });
});
