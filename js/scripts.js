$(document).ready(function() {
  $("#survey").submit(function(e) {
    const answer1 = $("input#question1").val();

    $("#results").text(answer1)

    e.preventDefault();
    
  })
})