






















$(document).ready(function() {

  $("#userInputForm").submit(function(event) {
    event.preventDefault();
    var userText = $("#userText").val();
    $("#encriptedResult").text(crypto(userText));
    $("#result").fadeIn();
  });

});
