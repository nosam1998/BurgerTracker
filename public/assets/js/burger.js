// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newBurgerState = {
            devoured: newBurger
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed sleep to", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});