var width = $('body').innerWidth();

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

$('nav').click(function(event) {
  event.preventDefault();
  if(event.target.id === 'portfolio') {
    if(document.location.hash !== '#portfolio') {
        document.location.hash = '#portfolio';
    }
  }
  else if(event.target.id === 'about') {
    //If new page is selected
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

  }
})

window.onload = function() {
  window.onhashchange();
}

// //Touch Events
// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('swipe', function(event) {
//   $(event.target).scrollLeft($('body').innerWidth());
// });
// hammertime.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});