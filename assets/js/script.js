$(document).ready(function() {
    $(".faq-question").click(function() {
        $(this).next(".faq-answer").slideToggle(200);
        $(this).find(".icon").toggleClass("rotate");
        $(this).parent().siblings().find(".faq-answer").slideUp(200);
        $(this).parent().siblings().find(".icon").removeClass("rotate");
    });

    $('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});

    $('#nav-icon4').on('click', function() {
        const $menu = $('.header-nav-containor');
    
        if (!$menu.hasClass('header-nav-containor-mob-menu')) {
          $menu
            .addClass('header-nav-containor-mob-menu')
            .hide()
            .slideDown(300);
        } else {
          $menu
            .slideUp(300, function() {
              $menu.removeClass('header-nav-containor-mob-menu');
            });
        }
      });
});
