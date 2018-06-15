/*
This function compares the input values from the home team (royals) and away team (visitor)
and displays a message based on the comparison.
It also checks to make sure that a number has been entered in the input fields and alerts you to enter one if you have not.
*/
'use strict';
function compareScore(){
	let royals = parseInt(document.getElementById("homeTeam").value); //stores value of hometeam input and converts it to an integer
	let visitor = parseInt(document.getElementById("awayTeam").value); //stores value of awayteam input and converts it to an integer
	let scr_request = document.querySelector("p#scoreRequest");
    let pizzaWin = document.getElementById("pizzaWin");
    let win = document.getElementById("win");
    let lose = document.getElementById("lose");
    let finalScore = document.getElementById("finalScore");

	scr_request.classList.add('isHidden'); //adds class 'isHidden' to set display: none;
	
	finalScore.classList.remove('isHidden'); //removes class 'isHidden'
	finalScore.classList.add('isVisible'); //adds class 'isVisible' to set display: block;

	if(isNaN(royals) || isNaN(visitor)){
		alert("Please enter a score for each team");
		scr_request.classList.add('isVisible');
		scr_request.classList.remove('isHidden');
		finalScore.classList.add('isHidden');
	} else if (royals === visitor){
		alert("It\'s a tie!");
	} else if (royals >=5 && royals > visitor){
		pizzaWin.classList.add('isVisible');
		pizzaWin.classList.remove('isHidden');
	} else if (royals > visitor){
		win.classList.add('isVisible');
		win.classList.remove('isHidden');
	} else if (royals < visitor){
		lose.classList.add('isVisible');
		lose.classList.remove('isHidden');
	}
};
//This function resets the page.
function pageReset(){
	document.getElementById("homeTeam").value = ""; // sets value of input to empty stirng 
	document.getElementById("awayTeam").value = ""; // sets value of input to empty stirng 
	document.getElementById("homeTeam").focus(); // brings focus to the royals input
	let scr_request = document.querySelector("p#scoreRequest");
	let pizzaWin = document.getElementById("pizzaWin"); // stores h1 with pizza win message to a variable
	let win = document.getElementById("win"); // stores h1 with win message to a variable
	let lose = document.getElementById("lose"); // stores h1 with lose message to a variable
	let finalScore = document.getElementById("finalScore");
	
	
	if(pizzaWin.classList.contains('isVisible')){ // if pizzaWin message is displayed, hide it.
		pizzaWin.classList.remove('isVisible'); //remove 'isVisible'
		pizzaWin.classList.add('isHidden'); // add 'isHidden'
	}
	if(win.classList.contains('isVisible')){ // if win message is displayed, hide it.
		win.classList.remove('isVisible');
		win.classList.add('isHidden');
	} 
	if(lose.classList.contains('isVisible')){ // if lose message is displayed, hide it.
		lose.classList.remove('isVisible'); 
		lose.classList.add('isHidden');
	}
	scr_request.classList.remove('isHidden'); //show the score request sentence
	finalScore.classList.remove('isVisible'); //remove display: block;
	finalScore.classList.add('isHidden');     //add display: none;
};

//the outcome button calls the compareScore function when clicked
let outcome_btn = document.getElementById("outcome");
outcome_btn.addEventListener('click', compareScore);


//the clear button calls the pageReset function when clicked
let clear_btn = document.getElementById("clear");
clear_btn.addEventListener('click', pageReset);
	



/***********************************************************************************************
NEW CLOCK CODE - W3 SCHOOLS -- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
/***********************************************************************************************/
// Set the date we're counting down to
let endDate = new Date("June 30, 2018 20:36:00").getTime();

// Update the count down every 1 second
let timer = setInterval(function() {

    // Get todays date and time
    let today = new Date().getTime();
    
    // Find the distance between now and the count down date
    let distance = endDate - today;
    
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="clockdiv"
    let clock = document.querySelector(".clockdiv");
  	let daysSpan = clock.querySelector('.days');
  	let hoursSpan = clock.querySelector('.hours');
  	let minutesSpan = clock.querySelector('.minutes');
  	let secondsSpan = clock.querySelector('.seconds');

  	daysSpan.innerHTML = ('0' + days).slice(-2);
    hoursSpan.innerHTML = ('0' + hours).slice(-2);
    minutesSpan.innerHTML = ('0' + minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + seconds).slice(-2);
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(timer);
      	let target = document.querySelector(".clockdiv");
      	let target2 = document.getElementById("target2");
      	target.innerHTML = "PLAY BALL!!"
      	target.classList.add('targetStyle');
      	target2.classList.add('isHidden');

    }
}, 1000);







//create overlay for the page
//create a letiable called myNode and assign it to the div with the ID openingDay
let myNode = document.querySelector("#openingDay");

//add event listener to myNode
myNode.addEventListener("click", function(e){

	if(e.target.tagName === "H3"){
		//add overlay to the page;
		let myOverlay = document.createElement('div');
		myOverlay.id = "overlay";
		document.body.appendChild(myOverlay);
        //remove overlay from the page
		myOverlay.addEventListener('click', function(){
			if(myOverlay) {
				myOverlay.parentNode.removeChild(myOverlay);
			}
		}, false)

		window.addEventListener('resize', function(){
			if(myOverlay) {
				myOverlay.style.width = window.innerWidth + 'px';
				myOverlay.style.height = window.innerHeight + 'px';
				myOverlay.style.top = window.pageYOffset + 'px';
				myOverlay.style.left = window.pageXOffset + 'px';
			}
		}, false)
	}

});


//hide h1(s) on page load
window.onload = function(){
	document.getElementById("win").classList.add('isHidden');
	document.getElementById("lose").classList.add('isHidden');
	document.getElementById("pizzaWin").classList.add('isHidden');
};



//https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/ -- javascript timer code source