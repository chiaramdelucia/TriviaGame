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
		question: "What kind of rug really tied the Dude’s room together?",
		options: ['Modern', 'Persian', 'White', 'Oriental'],
		answer: 3		
	}
]


//global variables
let count = 5,
	trivia = 3,
	correct = 0,
	wrong = 0;

//HTML divs
questionDiv = document.getElementById('questionDiv');
optionsDiv = document.getElementById('optionDiv');
correctAnswer = document.getElementById('answer')
clock = document.getElementById('timer');
replay = document.getElementById('replay');

//Fisher-Yates shuffle
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    console.log("this: " + this);
	return this;

}


function displayQuestion(){

	let randomQs = questionBank.shuffle().slice(0);
	console.log(randomQs);

	if (trivia ==== 0){
		gameOver();
	}else{
		trivia --;
		let q = randomQs[0].question;
		let options = randomQs[0].options;
		let answerIndex = randomQs[0].answer;
		let answer = options[answerIndex]

		questionDiv.innerHTML = q;
		optionsDiv.innerHTML = options;

		counter = setInterval(timer, 1000);
		function timer (){
			if (count<=0){
				clock.innerHTML = 'Time is Up'
				correctAnswer.innerHTML = `The correct answer is: ${answer}`
				reset();
			}else{
				count--;
				clock.innerHTML = `Time Left: ${count} seconds`; 
			}		
		}
	}	

}

function reset(){
	count = 5;
	clearInterval(counter);
	setTimeout(clearBoard, 1000*5);
	setTimeout(displayQuestion, 1000 * 5);
}

function gameOver(){
	clock.innerHTML = 'Game Over';
	clearInterval(counter);
	clearBoard();
	replay.addEventListener('click', function(){
		trivia = 3;
		displayQuestion();
	});
	console.log('counter, ' + counter);
	console.log(questionBank);

}

function clearBoard(){
	questionDiv.innerHTML = '';
	optionsDiv.innerHTML = '';
	correctAnswer.innerHTML = ''
}
