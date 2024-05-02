$(document).ready(function() {
    function fetchTranslation() {
        var languageCode = $("#language_code").val();
        var apiUrl = "https://www.fourtonfish.com/hellosalut/hello/?lang=" + languageCode;

        $.ajax({
            url: apiUrl,
            type: "GET",
            success: function(response) {
                $("#hello").text(response.hello); // Display translation of "Hello" in #hello div
            },
            error: function(xhr, status, error) {
                console.log("Error fetching translation:", error);
            }
        });
    }

    $("#btn_translate").click(fetchTranslation);

    $("#language_code").keypress(function(event) {
        if (event.which === 13) { // Check if the Enter key is pressed (key code 13)
            fetchTranslation();
        }
    });
});
