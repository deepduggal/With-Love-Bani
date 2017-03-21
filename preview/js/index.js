var width = $('body').innerWidth();;
var slideshow;

window.onhashchange = function(){
    var hash = document.location.hash, 
          link = '';

    switch (hash) {
      case '#portfolio':
        link = 'portfolio.html';
        break;
      case '#about':
        link = 'about.html';
        break;
      case '#contact':
        link = 'contact.html';
        break;
      default:
        link = '';
        document.location.hash = '#portfolio';
        break;
    }

    if(link !== '') {
      $.ajax({
         url: link,
         global: false,
         type: "GET",
         dataType: "html",
         beforeSend: function() {
            $('.loading').css('display', 'block');
            $('.main').css('display', 'none');
            $('.logo').toggleClass('animated pulse infinite');
         },
         error: function(xhr, textStatus, error) {
            $('.main').html(textStatus);
         },
         success: function(data, textStatus, xhr) {
            $('.main').html(data);
            if(link === 'portfolio.html') {

              slideshow = window.setInterval(function() {
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

            }//end
         }, 
         complete: function(xhr, textStatus) {
            setTimeout(function() {
              $('.main').css('display', 'block');
              $('.loading').css('display', 'none');
              $('.logo').toggleClass('pulse infinite');
            }, 1000);
         },
       });
    }
}

//Change hash
$('nav').click(function(event) {
  event.preventDefault();

  /* Set hash*/
  if(event.target.id === 'portfolio') {
    if(document.location.hash !== '#portfolio') {
        document.location.hash = '#portfolio';
    }
  }
  else if(event.target.id === 'about') {
    if(document.location.hash !== '#about') {
        document.location.hash = '#about';
    }
    if(slideshow) {
      clearInterval(slideshow);
    }
  }
  else if(event.target.id === 'contact') {
    //If new page is selected
    if(document.location.hash !== '#contact') {
        document.location.hash = '#contact';
    }
    if(slideshow) {
      clearInterval(slideshow);
    }
  }
  else if(event.target.id === 'logo') {
    if(document.location.hash !== '#portfolio') {
        document.location.hash = '#portfolio';
    }
  }
});

window.onload = function() {
  window.onhashchange();
};