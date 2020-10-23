// business logic
$(document).ready(function() {
  $("#survey").submit(function(e) {
    const answer1 = $("input#question1").val();
    const answer2 = $("input#question2").val();
    const answer3 = $("input#question3").val();
    const answer4 = $("input#question4").val();
    const answer5 = $("input#question5").val();

    // UI logic
    $("#insertAnswer1").text(answer1)
    $("#insertAnswer2").text(answer2)
    $("#insertAnswer3").text(answer3)
    $("#insertAnswer4").text(answer4)
    $("#insertAnswer5").text(answer5)

    e.preventDefault();
    
  })
})