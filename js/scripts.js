//business logic
function translator(i) {
  var responseStatement;
  if (i % 3 === 0) {
    responseStatement = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (i.toString().match(0) !== null){
        responseStatement = "beep";
  } else if (i.toString().match(1) !== null){
        responseStatement = "boop";
  } else {
    responseStatement = (i);
  }
    console.log(responseStatement);
    return responseStatement;
};
//user interface
$(document).ready(function() {
  $("#beep-boop-bop").submit(function(event) {
    event.preventDefault();
    var usersNumber = parseInt($("#numberInput").val());
    for (var i = 0 ; i < usersNumber+1 ; i++) {
      translatedNumber = translator(i).toString();
      console.log("translatednumber is " + translatedNumber);
      $("#output").append(" " + translatedNumber + " <br>");
    }
  })
});
