// business logic
$(document).ready(function() {
  $("#survey").submit(function(e) {
    const answer1 = $("input:radio[name=question1]:checked").val();
    const answer2 = $("input:radio[name=question2]:checked").val();
    const answer3 = $("input:radio[name=question3]:checked").val();
    const answer4 = $("input:radio[name=question4]:checked").val();
    const answer5 = $("input:radio[name=question5]:checked").val();

    console.log(answer1);
    
    // UI logic
    if (answer1 <= 5) {
      
    }
    
    // $("#insertAnswer1").text(answer1)
    // $("#insertAnswer2").text(answer2)
    // $("#insertAnswer3").text(answer3)
    // $("#insertAnswer4").text(answer4)
    // $("#insertAnswer5").text(answer5)

    e.preventDefault();
    
  })
})