var questionBank =[
	{
		"question": 'What does the Dude drink?',
		"options": ['Jack&Coke', 'White Russian', '7&7', 'Martini'],
		"answer": 1
	},	
	{
		question: 'What is the name of Uli + the Nihlists band?',
		options: ['Autobahn', 'Blitz Kreig', 'The Berlin 8', 'Sauerkraut Soup'],
		answer: 0		
	},
	{
		question: 'What kind of rug really tied the Dude’s room together?',
		options: ['Modern', 'Persian', 'White', 'Oriental'],
		answer: 3		
	}
]


questionDiv = document.getElementById('questionDiv');
optionsDiv = document.getElementById('optionDiv');
correctAnswer = document.getElementById('answer')
clock = document.getElementById('timer');



function displayQuestion(){

	let randomQ = Math.floor(Math.random() * questionBank.length);
	let q = questionBank[randomQ].question;
	let options = questionBank[randomQ].options;
	let answerIndex = questionBank[randomQ].answer;
	let answer = options[answerIndex]

	questionDiv.innerHTML = q;
	optionsDiv.innerHTML = options;

	let count = 5;
	counter = setInterval(timer, 1000);
	function timer (){
		if (count<=0){
			clock.innerHTML = 'Time is Up'
			correctAnswer.innerHTML = `The correct answer is: ${answer}`
			reset();
		}else{
			count--;
			clock.innerHTML = `Time Left: ${count} seconds`; 
			console.log(count);
		}		
	}


}

function reset(){
	count = 5;
	clearInterval(counter);
	clearAnswer = setTimeout(removeAnswer, 1000*5);
	function removeAnswer(){
		correctAnswer.innerHTML = ''
	}
	setTimeout(displayQuestion, 1000 * 5);
}




displayQuestion();