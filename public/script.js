// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    
    $(".eat-burger").on("click", function(event) {
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
            console.log("Burger devoured!");
            location.reload();
        });
    });
    
    // Add a new burger.
    $(".burger-form").on("submit", function(event) {
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
            console.log("New burger added!");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".delete-burger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
        console.log("Burger deleted!")
    });

})