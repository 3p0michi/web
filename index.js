$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return;
    });
  });

$('.nav_toggle, .nav').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
});

$('.Simage img').on('click', function(){
    var s=$(this).attr('src')
    $('.Rimage img').fadeOut('slow',function(){
        $('.Rimage img').attr('src',s);
        $('.Rimage img').fadeIn('slow');
    });
});

jQuery(function() {
    var pagetop = $('#pageTop');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
