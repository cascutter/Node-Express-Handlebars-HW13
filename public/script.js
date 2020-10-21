// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    // Add a new burger.
    $(".add-btn").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".devour-btn").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".delete-btn").on("click", function() {
        const id = $(this).data("id");

        let currentURL = window.location.origin;
        // Send the DELETE request.
        $.ajax(currentURL + "/api/burgers/" + id, {
            type: "DELETE "
        }).then(function() {
            console.log("id: " + id + "is deleted!");
            $(".devoured-burger" + id).remove();
        });
    });

})