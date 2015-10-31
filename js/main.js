$(document).ready(function(){

	// Попап
	var popupOpen;
	$(".popup_open").click(function(){
		$('.popup:visible').fadeOut(200);
		popupStatus = 0;
		popupOpen = $(this).attr('rel');
		loadPopup(popupOpen);
		var popupTop = $(window).scrollTop() + 70;
		$(popupOpen).css({'top' : popupTop + 'px'});
		return false;
	});
	$(".popup_close, .popup-close, .popup-bg").click(function(){
		disablePopup();
		return false;
	});
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});


	// Выбор языка
	$('.lange .eng').click(function(){
		$('.lange').addClass('active');
		return false;
	});
	$('.lange .rus').click(function(){
		$('.lange').removeClass('active');
		return false;
	});

	// открытие поиска
	$('.search-head-open').click(function(){
		$('.search-head').addClass('active');
		$('.search-head input').animate({'width' : 226 + 'px'});
		return false;
	});

	// placeholder
	$('input, textarea').focus(function(){
   		$(this).data('placeholder',$(this).attr('placeholder'))
   		$(this).attr('placeholder','');
 	});
 	$('input, textarea').blur(function(){
   		$(this).attr('placeholder',$(this).data('placeholder'));
 	});

 	// Карусель на главной
 	$('.slider').slick({

 		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
	    ]
 	});

 	// Контакты
 	$('.contacts-header').click(function(){
 		$(this).parents('.contacts-item').toggleClass('active');
 		$(this).parents('.contacts-item').find('.contact-list').slideToggle();
 	});
 	$('.contacts-item:first').addClass('active');
 	$('.contacts-item:first').find('.contact-list').show();

 	$(".fancybox").fancybox();

 	$('select').selectik({minScrollHeight: 20});

 	// Якорь
 	$('.form-tr-message a').click(function(){
	    var anchor = $(this).attr('href');
	    $('html, body').stop().animate({
	        scrollTop: $(anchor).offset().top
	    }, 1000);
 		return false;
 	});

 	// mobile menu
 	$('.menu-mob').click(function(){
 		$('.head-mob').slideToggle();
 		return false;
 	});
 	$('.head-mob-close').click(function(){
 		$('.head-mob').slideUp();
 		return false;
 	});

 	//
 	$('.menu-page-active a, .menu-page-active span').click(function(){
 		if($(window).width() < 767) {
 			$('.menu-page-lnk').slideToggle()
 			$(this).toggleClass('act');
 		};
 		return false;
 	})



});


// Попап
var popupStatus = 0;

function loadPopup(popupOpen){
	if(popupStatus==0){
		$(".popup-bg").css({
			"opacity": "0.7"
		});
		$(".popup-bg").fadeIn(200);
		$(popupOpen).fadeIn(200);
		popupStatus = 1;
	}
}

function disablePopup(){
	if(popupStatus==1){
		$(".popup-bg").fadeOut(200);
		$(".popup").fadeOut(200);
		popupStatus = 0;
	}
}