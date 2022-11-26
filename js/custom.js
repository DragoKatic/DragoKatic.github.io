
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);

  // year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();


// Current URL: https://my-website.com/page_a
//const nextURL = 'https://dragokatic.github.io/home';
//const nextTitle = 'Drago Katić - Portfolio';
//const nextState = { additionalInformation: 'Updated the URL with JS' };

// This will create a new entry in the browser's history, without reloading
//window.history.pushState(nextState, nextTitle, nextURL);

// This will replace the current entry in the browser's history, without reloading
//window.history.replaceState(nextState, nextTitle, nextURL);

//if(location.pathname=="/index.html") alert('hey!');
//document.getElementById("alert").innerHTML = location.href;

window.history.pushState('object or string', 'Title', '/drago-katic.html');