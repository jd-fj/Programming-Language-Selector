// business logic
$(document).ready(function() {
  $("#survey").submit(function(e) {
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());

    // UI logic
    if (answer1 + answer2 + answer3 + answer4 + answer5 <= 5) {
      $("#python").show();
      } else if (answer1 + answer2 + answer3 + answer4 + answer5 <= 7) {
        $("#csharp").show();
      } else if (answer1 + answer2 + answer3 + answer4 + answer5 <= 14) {
        $("#js").show();
      } else (answer1 + answer2 + answer3 + answer4 + answer5 === 15); {
        $("#rails").show();
      }
    e.preventDefault();
  })
})