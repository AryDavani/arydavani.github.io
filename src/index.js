$(function(){

// scroll functions
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('#header').height()) {
      $('#navbar').css('visibility', 'visible');
      $('#navbar').fadeIn('fast');
    } else {
      $('#navbar').fadeOut('fast');
    }
  });


  $('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 1000);
    return false;
  });

  });
