
// numberInput is the formName
$(document).ready(function() {
  $("#beep-boop-bop").submit(function(event) {
    event.preventDefault();
    var usersNumber = $("#numberInput").val();
        usersNumber = parseInt(usersNumber);


    for (var i = 0; i<=usersNumber; i++) {
      if (i % 3 === 0) {
        $("#output").append("I'm sorry, Dave. I'm afraid I can't do that.<br>");
      } else if (i.toString().match(0) !== null){
            $("#output").append("BEEP<br>");
    } else if (i.toString().match(1) !== null){
          $("#output").append("BOOP<br>");
  } else {
      $("#output").append(i + " ");
    }
  };
  $("#output").append("<strong> GOODBYE </strong>");
});
})







// $("#panic").click(function() {
    //   $("#output").append("panic fired")
    //     $("#panic").hide();
    //     $(".revealed").show();
    //   });



// $("#panic").hide();
// $("#numberInput").show();
// $("#output").append( "ready!" );
