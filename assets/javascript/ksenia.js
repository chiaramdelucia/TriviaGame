var questionCount = 0;
var correctAnswersCount = 0;
var wrongAnswersCount = 0;
var index = 0;
var counter = null;

function renew() {
 $("#answer1, #answer2, #answer3, #answer4").empty();

 questionCount++;
 console.log(questionCount);

 if (questionCount === 5) {
  $(".triviaQuestion").empty();
  $(".triviaQuestion").append($('<p>').html("End of Questions!"));
  $(".triviaQuestion").append($('<br>'));
  $(".triviaQuestion").append($('<p>').html("Correct answers: " + correctAnswersCount));
  $(".triviaQuestion").append($('<br>'));
  $(".triviaQuestion").append($('<p>').html("Wrong answers: " + wrongAnswersCount));
 } else {
  setTimeout(newQuestion, 2000);
 }
}

function newQuestion() {
  
 var count = 15;
 timer();
 counter = setInterval(timer, 1000);

 function timer() {
    if (count <= 0) {
     clearInterval(counter);
       $(".question").html("Time is Up!");
       console.log("Time is Up!");
		wrongAnswersCount++;
       renew();

   return;
  }
     $("#timer").html( "Time remaining: " + count + " secs");
     count--;
 };
 
 index = arrayQuestions[questionCount];
 //Displaying question and corresponding answers
 $(".question").html(index.question);
 
 $("#answer1").data("answerID", 0).html(index.answers.answer[0]); //assigning data value to use for comparison
 $("#answer2").data("answerID", 1).html(index.answers.answer[1]);
 $("#answer3").data("answerID", 2).html(index.answers.answer[2]);
 $("#answer4").data("answerID", 3).html(index.answers.answer[3]);
 
}

$(document).ready(function() {
 newQuestion();

 $(".button").click(function() {
  console.log('click');
  
  if (index.correctAnswer === $(this).data("answerID")) {
   $(".question").html("Correct!");
   correctAnswersCount++;
  } else {
   $(".question").html("Sorry! The answer is " + index.answers.answer[index.correctAnswer]);
   wrongAnswersCount++;
  }

  clearInterval(counter);
  renew();
 });
});