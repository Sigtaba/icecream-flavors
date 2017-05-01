//FRONT END LOGIC

$(document).ready(function() {
  $("form#favs").submit(function(event) {
      // event.preventDefault();

      var blanks = ["flavor1", "flavor2", "flavor3"]

      blanks.forEach(function(blank) {
        var userInput = $("#" + blank).val();
        $("." + blank).text(userInput);
      });

      $("#output").show();
      // $("#output").append("<li>" + flavor1 + "</li><li>" + flavor2 + "</li><li>" + flavor3);

      event.preventDefault();

 });
});
