$(document).ready(function() {
    $("#add_item").click(function() {
        $("ul.my_list").append("<li>Item</li>"); // Append new <li> element to UL.my_list
    });
});
