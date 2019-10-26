


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
                .val()
                .trim(),
            devoured: 0
        };
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
        })
        console.log(newBurger)
    });

    $("#eatbutton").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $("#trashbutton").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        // send the DELETE request
        
        $.ajax({
            type: "DELETE",
            url: "/api/burger/" + id
        }).then(location.reload());
        });

