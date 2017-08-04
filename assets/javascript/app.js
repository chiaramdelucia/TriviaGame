let q = [1,2,3];


q.forEach(function(element){
	setTimeout(function(){
		console.log(element)
	}, 1000*5)
})

var display = q.reduce(function(){
	setTimeout(function(){
		for(let i=0;i<q.length;i++){
			console.log(i)
		}
	}, 1000 * 10)}, 0);

var timer = setTimeout(q.reduce(function(){
	for(let i = 0; i < q.length; i++){

	}
	}), 1000 *5);
function qTimed(){
	for (let i = 0; i <= q.length; i++){
		setInterval(function(){console.log(q[i])}, 1000 * 10);
	}

};

function qTimer(){
	setTimeout(function(){
		for (var i = 0; i <= q.length; i++) {
			console.log(q[i])
		}
	}, 1000*5)
}







//GLOBAL VARIABLES
//========================================================================

var correct = 0;
var wrong = 0;
var unanswered = 0;


//FUNCTIONS + CONDITIONAL STATEMENTS
//========================================================================

// Shows and Hides Questions
$("#q1").hide();
$("#q2").hide();
$("#q3").hide();
$("#q4").hide();
$("#q5").hide();
$("#q6").hide();
$("#q7").hide();
$("#q8").hide();
$("#q9").hide();
$("#q10").hide();
$("#gameOver").hide();


function startGame(){
	
	$("#q1").show();
	$(".btn").click(function () {
		showQ2();
	});


	function showQ2() {
		
		$("#q1").hide();
		$("#q2").show();
		$(".btn").click(function () {
			showQ3();
			clearTimeout(q2);
		});

	}

	var q2 = setTimeout(showQ2, 1000*10);

	function showQ3() {
		$("#q2").hide();
		$("#q3").show();
		$(".btn").click(function () {
			showQ4();
			clearTimeout(q3);
		});

	}

	var q3 = setTimeout(showQ3, 1000*20);

	function showQ4() {
		$("#q3").hide();
		$("#q4").show();
		$(".btn").click(function () {
			showQ5();
			clearTimeout(q4);
		});

	}

	var q4 = setTimeout(showQ4, 1000*30);

	function showQ5() {
		$("#q4").hide();
		$("#q5").show();
		$(".btn").click(function () {
			showQ6();
			clearTimeout(q5);
		});

	}

	var q5 = setTimeout(showQ5, 1000*40);

	function showQ6() {
		$("#q5").hide();
		$("#q6").show();
		$(".btn").click(function () {
			showQ7();
			clearTimeout(q6);
		});

	}

	var q6= setTimeout(showQ6, 1000*50);

	function showQ7() {
		$("#q6").hide();
		$("#q7").show();
		$(".btn").click(function () {
			showQ8();
			clearTimeout(q7);
		});

	}

	var q7 = setTimeout(showQ7, 1000*60);

	function showQ8() {
		$("#q7").hide();
		$("#q8").show();
		$(".btn").click(function () {
			showQ9();
			clearTimeout(q8);
		});

	}

	var q8 = setTimeout(showQ8, 1000*70);

	function showQ9() {
		$("#q8").hide();
		$("#q9").show();
		$(".btn").click(function () {
			showQ10();
			clearTimeout(q9);
		});

	}

	var q9 = setTimeout(showQ9, 1000*80);

	function showQ10() {
		$("#q9").hide();
		$("#q10").show();
		$(".btn").click(function () {
			showEnd();
			clearTimeout(q10);
		});

	}

	var q10 = setTimeout(showQ10, 1000*90);

	function showEnd() {
		$('#q10').hide();
		$("#gameOver").show();
	}

	

	
}

//Registers Answers
function answerResults () {

	$(".btn").click(function () {


    	if (this.id == "correct") {
        	correct++;
        	$("#wins").html("You guessed " + correct + " correct.");	
    	}

    	else if (this.id == "wrong") {
        	wrong++;
        	$("#losses").html("You guessed " + wrong + " wrong.");
		}
	console.log(correct);
	console.log(wrong);
	console.log(unanswered);

	});

};







//MAIN PROCESSES
////========================================================================
$("#start").click(function (){
	startGame();
});
answerResults();