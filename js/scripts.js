$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var nameSpace =["question1", "question2", "question3", "question4", "question5"];
    // var characters = [["Tony Stark", "Loki"], ["hulk", "Thor"], [""]];
    debugger;

    var question1 = $("input#question1").val();
    var question2 = $("input#question2").val();
    var question3 = $("input#question3").val();
    var question4 = $("input#question4").val();
    var question5 = $("input#question5").val();

/*
    var counter = 0;
    nameSpace.forEach(function(index){
      var question = $("input#" + index).val();
      $("." + index).text(question);
      if (question === "yes" ) {
         counter++;
       }
    });



      if (counter === 0 ) {
        $(".character").text("big cry baby");
        $("#answer").show();
      }

      else if (counter === 1 ) {
        $(".character").text("Hulk");
        $("#answer").show();
      }
      else if (counter === 2 ) {
        $(".character").text("Captain America");
        $("#answer").show();
      }
      else if (counter === 3 ) {
        $(".character").text("Ironman");
        $("#answer").show();
      }
      else if (counter === 4 ) {
        $(".character").text("Punisher");
        $("#answer").show();
      }
      else if (counter === 5 ) {
        $(".character").text("Deadpool");
        $("#answer").show();
      }

*/
    if (question1 === "yes") {
        $("#q3").show();
        $("#q0").hide();
      }
    if(question1 === "no"){
        $("#q2").show();
      }

      if (question2 === "yes") {
        $("#q1").show();
      }
      if (question2 === "no") {
        $("#q4").show();
      }
      if (question3 === "yes") {
        $("#q1").show();
      }
      if (question3 === "no") {
        $("#q2").show();
      }

        event.preventDefault();
    });

  });
