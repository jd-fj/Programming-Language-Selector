// business logic
$(document).ready(function() {
  $("#survey").submit(function(e) {
    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());

    const combo = (answer1 + answer2 + answer3 + answer4 + answer5)

    console.log(combo)

    // UI logic
    if (combo <= 5) {
        // $("#python").show();
        // $("#rails").hide(); 
        console.log("this is under 5")
      } else if (combo >= 6 && combo < 9) {
        $("#csharp").show();
      } else if (combo >= 9 && combo <= 14) {
        $("#js").show();
      } else (combo >= 15); {
        $("#rails").show();
      } 
        
    e.preventDefault();
  }) 
})

// what I'd like it to be:
// if 0 (NaN): show "looks like ya missed somthin"
// else if 1-5 ; show python
// else if 6-8 ; show c#
// else if 9-14 ; show js
// else it is 15 ; show rails