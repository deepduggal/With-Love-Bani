var width = $('body').innerWidth();;
var slideshow = window.setInterval(function() {
  var xPos = $('.portfolio').scrollLeft(),
        portfolio = $('.portfolio')[0],
        maxScroll = portfolio.scrollWidth - portfolio.clientWidth;

  //If reached end of scroll
  if(xPos >= maxScroll) {
    $('.portfolio').scrollLeft(0);
  }
  //Scroll
  else {
    $('.portfolio').scrollLeft(xPos + 1);
  }
}, 20);