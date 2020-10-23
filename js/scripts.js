$(document).ready(function() {
  $("#survey").submit(function(e) {
    const answer1 = $("input#question1").val();
    const answer2 = $("input#question2").val();
    const answer3 = $("input#question3").val();

    $("#insertAnswer1").text(answer1)
    $("#insertAnswer2").text(answer2)
    $("#insertAnswer3").text(answer3)

    e.preventDefault();
    
  })
})