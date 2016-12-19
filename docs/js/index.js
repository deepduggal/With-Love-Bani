var countdown = document.body.getElementsByClassName('countdown')[0], 
    progress = document.body.getElementsByTagName('progress')[0],
    seconds = 5;

//init
countdown.innerHTML = seconds;
progress.max = seconds*100;

var timer = setInterval(function() {
  if(seconds === 0) {
    location.href = 'http://facebook.com/withlovebani';
    clearInterval(timer);
  }
  else {
    seconds--;
    countdown.innerHTML = seconds;
  }
}, 1000);

var smoothProgress = setInterval(function() {
  progress.value += 1;
}, 10);

window.onload = timer();