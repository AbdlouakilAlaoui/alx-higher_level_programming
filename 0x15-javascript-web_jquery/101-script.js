$(document).ready(function() {
    $("#add_item").click(function() {
        $("ul.my_list").append("<li>Item</li>"); // Add new <li> element to UL.my_list
    });

    $("#remove_item").click(function() {
        $("ul.my_list li:last-child").remove(); // Remove last <li> element from UL.my_list
    });

    $("#clear_list").click(function() {
        $("ul.my_list").empty(); // Remove all <li> elements from UL.my_list
    });
});
