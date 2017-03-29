$(function() {
  
  $('#question-up-arrow').click(function() {
    var voteScore = parseInt($('#question-vote-score').text());
    voteScore = voteScore + 1;
    $('#question-vote-score').text(voteScore);
  });

  $('#question-down-arrow').click(function() {
    var voteScore = parseInt($('#question-vote-score').text());
    voteScore = voteScore - 1;
    $('#question-vote-score').text(voteScore);
  });
});