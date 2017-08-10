let questionBank =[
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
	correct = 0,
	wrong = 0;

//HTML divs
questionDiv = document.getElementById('questionDiv');
optionsDiv = document.getElementById('optionDiv');
correctAnswer = document.getElementById('answer');
clock = document.getElementById('timer');
start = document.getElementById('start');
replay = document.getElementById('replay');

// new array of questionBank so as not to alter integrity of original
var newBank = questionBank.filter(newBank => (newBank));
// refresh newBank for replay without URL reload
function refreshBank(arr1){
	newBank = arr1.filter(arr2 => (arr2));
	console.log(newBank);
}
//Fisher-Yates shuffle used to make quiz questions random on every play
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
	return this;
}

start.addEventListener('click', gamePlay);

function gamePlay(){
	if (newBank.length === 0){
		refreshBank(questionBank);
		gameOver();
	}else{
		start.removeEventListener('click', gamePlay);
		replay.removeEventListener('click', gamePlay)
		displayQuestion();
		counter = setInterval(timer, 1000);	
	}
}

function displayQuestion(){
	//fisher-yates protoype function here
	console.log(newBank);
	randomQs = newBank.shuffle().splice(0, 1);
	q = randomQs[0].question,
	options = randomQs[0].options,
	answerIndex = randomQs[0].answer,
	answer = options[answerIndex];
	//add question to DOM and display on window
	questionDiv.innerHTML = q;
	//add answer buttons to DOM and display
	//also, iterate through each to set class and id for each
	for(let b = 0; b<options.length; b++){
		let btn = document.createElement('button');
			btn.setAttribute('class', 'optButton');
			btn.id = b;
			btn.innerHTML = options[b];
			optionsDiv.appendChild(btn);
	}

	buttons = document.getElementsByClassName('optButton');
	console.log(buttons);

	// for (var i = 0; i < buttons.length; i++) {
	// 	buttons[i].addEventListener('click', checkAnswer(buttons))
	// }
	timer();

}

// function checkAnswer(buttons){
// 	for (var c = 0; c < buttons.length; c++) {
// 		let buttonId = buttons[c].id;
// 		if(buttonId === answerIndex){
// 			console.log('correct');
// 			correct++;
// 			correctAnswer.innerHTML = `Good job! The correct answer is: ${answer}`
// 			reset();
// 		}else{
// 			console.log('wrong');
// 			wrong++;
// 			correctAnswer.innerHTML = `Wrong. The correct answer is: ${answer}`
// 			reset();
// 		}
// 	}		
// }

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

function reset(){
	count = 5;
	clearInterval(counter);
	setTimeout(clearBoard, 1000*5);
	setTimeout(gamePlay, 1000 * 5);
	
		// buttons.removeEventListener('click', function(){
		// 	console.log('removal successful');
		// })	
	
}

function clearBoard(){
	questionDiv.innerHTML = '';
	optionsDiv.innerHTML = '';
	correctAnswer.innerHTML = '';
}

function gameOver(){
	clock.innerHTML = 'Game Over';
	clearInterval(counter);
	clearBoard();
	correct = 0;
	wrong = 0;
	replay.addEventListener('click', gamePlay);
	// console.log(wrong);
	// console.log(correct);
}