// business logic
$(document).ready(function() {
  $("#survey").submit(function(e) {
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());

    let combo = (answer1 + answer2 + answer3 + answer4 + answer5)

    console.log(combo)

    // UI logic
    if (combo <= 5) {
      $("#python").show();
      $("#rails").hide();
      } else if (combo >= 7 && combo < 8) {
        $("#csharp").show();
      } else if (combo >= 8 && combo <= 14) {
        $("#js").show();
      } else (combo === 15 && combo > 6); {
        $("#rails").show();
      } 
        
    e.preventDefault();
  }) 
})