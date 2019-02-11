// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".change-devoured").on("click", function(event) {
      // var id = $(this).data("id");
      var burger_name = $(this).data("burger_name").trim();
      console.log(burger_name, "burger_name");
      var newDevoured = true;
  
      console.log(newDevoured, "newDevoured");

      var newDevouredState = {
        burger_name: burger_name,
        devoured: newDevoured
      };

      console.log(newDevouredState, "newDevouredState");
  
      // Send the PUT request.
      $.ajax("/api/burger/" + burger_name, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        // devoured: $("[name=devoured]:checked").val().trim()
      };

      //This works
      console.log(newBurger, "newBurger");

      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  