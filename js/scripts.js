$(document).ready(function() {
  $("#survey").submit(function(e) {

    const answer1 = parseInt($("input:radio[name=question1]:checked").val());
    const answer2 = parseInt($("input:radio[name=question2]:checked").val());
    const answer3 = parseInt($("input:radio[name=question3]:checked").val());
    const answer4 = parseInt($("input:radio[name=question4]:checked").val());
    const answer5 = parseInt($("input:radio[name=question5]:checked").val());
    const combo = (answer1 + answer2 + answer3 + answer4 + answer5);

    $("#python, #csharp, #js, #rails").hide();
    if (combo < 6) {
      $("#python").show();
    } else if (combo >= 6 && combo < 9) {
      $("#csharp").show();
    } else if (combo >= 9 && combo <= 14) {
      $("#js").show();
    } else if (combo === 0) {
      $("#rails").show();
    }
      else {
      alert("It looks like ya missed something!");
    }

    e.preventDefault();
  });
});