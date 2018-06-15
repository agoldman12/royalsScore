//https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/ -- javascript timer code source

//countdown to Opening Day - countdown clock
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var days = Math.floor( t/(1000*60*60*24) );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var minutes = Math.floor( (t/1000/60) % 60 ); 
  var seconds = Math.floor( (t/1000) % 60 );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
//output clock data inside of a div
function initializeClock(id, endtime){
  var clock = document.getElementById("clockdiv");
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
    var t = getTimeRemaining(endtime); 
    daysSpan.innerHTML = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var target = document.getElementById("clockdiv");
      target.innerHTML = "PLAY BALL!!"
      target.style.fontSize = "80px";
    }
}

updateClock(); // run function once at first to avoid delay
var timeinterval = setInterval(updateClock,1000);

}

var deadline = new Date('june 21 2017 20:52:00'); 
initializeClock('clockdiv', deadline);
//end clock
