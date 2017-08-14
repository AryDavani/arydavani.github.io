$(function(){

// scroll functions
  $(window).scroll(function() {

    if ($(this).scrollTop() > $('#header').height() - 10) {
      $('#navbar').css('visibility', 'visible');
      $('#navbar').fadeIn(300);
    } else {
      $('#navbar').fadeOut(300);
    }
  });

  $('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 700);
    return false;
  });


  });
