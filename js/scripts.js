//FRONT END LOGIC

$(document).ready(function() {
  $("form#favs").submit(function(event) {
    var blanks = ["flavor1", "flavor2", "flavor3"];
    debugger;
    for (var index = 0; index < blanks.length; index += 1) {
      var userInput = $("#" + blanks[index]).val();
      $("." + blanks[index]).text(userInput);
      $("#output").show();
    }
    event.preventDefault();

 });
});
