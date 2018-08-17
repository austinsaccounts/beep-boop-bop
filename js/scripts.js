
// numberInput is the formName
$(document).ready(function() {
  $("#beep-boop-bop").submit(function(event) {
    event.preventDefault();
    var usersNumber = $("#numberInput").val();
        usersNumber = parseInt(usersNumber);


    for (var i = 0; i<=usersNumber; i++) {
      if (i % 3 === 0) {
        console.log("I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (i.toString().match(0) !== null){
            console.log("BEEP");
    } else if (i.toString().match(1) !== null){
          console.log("BOOP");
  } else {
      console.log(i);
    }
    $("#output").append(numberInput );
  };
});
})







// $("#panic").click(function() {
    //   console.log("panic fired")
    //     $("#panic").hide();
    //     $(".revealed").show();
    //   });



// $("#panic").hide();
// $("#numberInput").show();
// console.log( "ready!" );
