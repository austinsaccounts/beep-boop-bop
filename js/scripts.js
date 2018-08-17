
// numberInput is the formName
$(document).ready(function() {
  $("#beep-boop-bop").submit(function(event) {
    event.preventDefault();
    var usersNumber = $("#numberInput").val();
        usersNumber = parseInt(usersNumber);
    for (var i = 0; i<=usersNumber; i++) {
      if (i % 3 === 0) {
        console.log("divisible by 3");
      }
      else {
        console.log(i);
      }

    }





    $("#output").append(numberInput );
  });



    // $("#panic").click(function() {
    //   console.log("panic fired")
    //     $("#panic").hide();
    //     $(".revealed").show();
    //   });


});











// $("#panic").hide();
// $("#numberInput").show();
// console.log( "ready!" );
