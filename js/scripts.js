function translator(usersNumber) {
  var responseStatement = "";
  for (var i = 0; i<=usersNumber; i++) {
      if (i % 3 === 0) {
        responseStatement += ("I'm sorry, Dave. I'm afraid I can't do that. <br>");
        // $("#output").append("I'm sorry, Dave. I'm afraid I can't do that.<br>");
      } else if (i.toString().match(0) !== null){
        responseStatement += ("beep <br>");
            // $("#output").append("BEEP<br>");
    } else if (i.toString().match(1) !== null){
      responseStatement += ("boop <br>");
          // $("#output").append("BOOP<br>");
  } else {
    responseStatement += (" " + i + " <br>")

    }
  };
  return responseStatement;
};


$(document).ready(function() {
  $("#beep-boop-bop").submit(function(event) {
    event.preventDefault();
    var usersNumber = $("#numberInput").val();
        usersNumber = parseInt(usersNumber);
        $("#output").append(translator(usersNumber));
})
})







// $("#panic").click(function() {
    //   $("#output").append("panic fired")
    //     $("#panic").hide();
    //     $(".revealed").show();
    //   });



// $("#panic").hide();
// $("#numberInput").show();
// $("#output").append( "ready!" );
