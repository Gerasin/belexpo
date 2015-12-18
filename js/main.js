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



	// открытие поиска
	$('.search-head-open').click(function(){
		$('.search-head').addClass('active');
		if($(window).width() > 767) {
			$('.search-head input').animate({'width' : 226 + 'px'});
			if($(window).width() < 1000) {
				$('.menu').hide();
			};
		} else {
			$('.search-head input').animate({'width' : 127 + 'px'})
		};
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
 		speed: 800,
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
 	if($(window).width() < 767) {
 		$('.slider').slick('unslick');
 	};

 	// Контакты
 	$('.contacts-header').click(function(){
 		$(this).parents('.contacts-item').toggleClass('active');
 		$(this).parents('.contacts-item').find('.contact-list').slideToggle();
 	});
 	$('.contacts-item:first').addClass('active');
 	$('.contacts-item:first').find('.contact-list').show();

 	if($(window).width() > 767) {
 		if($(".photo-img").length) {
 			$(".photo-img").fancybox()
 		};
 	} else {
 		$(".photo-img").click(function(){
 			return false;
 		})
 	};
 	if($(".photo-video").length) {
 		$(".photo-video").fancybox()
 	};

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
 	});


 	// Отправка формы подписки
 	/*$('.delivery-form button').click(function(){
 		var email = $('.delivery-form input').val();
 		return false;
 	});*/
	$('.message-close').click(function(){
		$(".message").fadeOut();
		return false;
	});
 	$('.delivery-btn').click(function() {
 		$(".message").fadeOut();
 		var inpEmail = $('.delivery-inp');
		if(inpEmail.val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if(pattern.test(inpEmail.val())){
				$('#message_subscription').fadeIn();
			} else {
				$('#message_error').fadeIn();
				$('#message_error span').text('Неверный почтовый ящик');
			}
		} else {
			$('#message_error').fadeIn();
			$('#message_error span').text('Укажите почтовый ящик');
		};
		setTimeout('$(".message").fadeOut()', 9000);
		return false;
	});

	textHeight();

	if($('.head-inner').length > 0) {
		var heightC = $(window).height() - ($('.head-inner').height() + $('.footer').height()) - 140;
	} else {
		var heightC = $(window).height() - ($('.head').height() + $('.footer').height()) - 98;
	}
	var heightCont = $('.height_center-pad').height();
	$('.height_center').css({'min-height' : heightC});
	if(heightC > heightCont) {
		var heightPad = (heightC - heightCont) / 2;
		heightPad = heightPad + 'px';
		$('.height_center-pad').css({'padding-top' : heightPad});
	};

	$('.head-txt-open a.lnk-open').click(function(){
		var txtHeight = $('.head-txt p').height();
		txtHeight = txtHeight + 'px';
		$('.head-txt').animate({'height' : txtHeight});
		$(this).hide();
		$('.head-txt-open a.lnk-close').show();
		return false;
	});
	$('.head-txt-open a.lnk-close').click(function(){
		var txtHeight = $('.head-txt p').height();
		txtHeight = 24 + 'px';
		$('.head-txt').animate({'height' : txtHeight});
		$(this).hide();
		$('.head-txt-open a.lnk-open').show();
		return false;
	});


	$('.js-tabs a').click(function(){
		$(this).parents('.js-tabs').find('li').removeClass('active');
		$(this).parents('li').addClass('active');
		$('.tabs-item').hide();
		var tabTag = $(this).attr('href');
		$(tabTag).show();
		return false;
	});
	$('.tabs-item:first').show();

	if($('.grid').length) {
	  var $grid = $('.grid').isotope({
	    itemSelector: '.grid-box',
	    percentPosition: true,
	    resizable : true,
	    transformsEnabled : true
	  });
	};

	

	$('.js-menu-tabs a').click(function(){
		var menuID = $(this).attr('href');
		$('.tab-page').hide();
		$(menuID).show();
		$(this).parents('.js-menu-tabs').find('li').removeClass('active');
		$(this).parents('li').addClass('active');
		var manuActText = $(this).text();
		$('.js-menu-act-text').text(manuActText);
		return false;
	});

	// Пагинация
	$('.tabs-item').each(function(){
		$(this).find('.photo-tab:not(:first)').hide();
	});
	$('.js-listing a').click(function(){
		$(this).parents('.js-listing').find('li').removeClass('active');
		$(this).parent().addClass('active');
		var listLeft = 0;
		var listRight = $(this).parents('.listing-lnk').find('li').length;
		var listAct = $(this).parent().index() + 1;
		console.log(listAct);
		$(this).parents('.listing-lnk').find('li').removeClass('lnk-show');
		if(listAct < 3) {
			for (i = 0; i < 5; i++) {
			  $(this).parents('.listing-lnk').find('li').eq(i).addClass('lnk-show');
			}
		};
		if(listAct > (listRight - 3)) {
			for (i = listRight - 5; i < listRight; i++) {
			  $(this).parents('.listing-lnk').find('li').eq(i).addClass('lnk-show');
			}
		};
		if(listAct > 2 && listAct < (listRight - 2)) {
			for (i = (listAct - 3); i < (listAct + 2); i++) {
			  $(this).parents('.listing-lnk').find('li').eq(i).addClass('lnk-show');
			}
		};
		$(this).parents('.tabs-item').find('.photo-tab').hide();
		listAct = --listAct;
		$(this).parents('.tabs-item').find('.photo-tab').eq(listAct).show();
		if(listAct == listRight - 1) {
			$(this).parents('.listing-page').find('.listing-next').addClass('listing-default');
		} else {
			$(this).parents('.listing-page').find('.listing-next').removeClass('listing-default');
		};
		if(listAct == 0) {
			$(this).parents('.listing-page').find('.listing-prev').addClass('listing-default');
		} else {
			$(this).parents('.listing-page').find('.listing-prev').removeClass('listing-default');
		};

		return false;
	});
	$('.listing-next a').click(function(){
		var listAct = $(this).parents('.listing-page').find('li.active').index() ;
		listAct = ++listAct;
		$(this).parents('.listing-page').find('li').eq(listAct).find('a').click();
		$(this).parents('.listing-page').find('.listing-prev').removeClass('listing-default');
		if(listAct == $(this).parents('.listing-page').find('li').length - 1) {
			$('.listing-next').addClass('listing-default');
		}
		return false;
	});
	$('.listing-prev a').click(function(){
		var listAct = $(this).parents('.listing-page').find('li.active').index() ;
		listAct = --listAct;
		$(this).parents('.listing-page').find('li').eq(listAct).find('a').click();
		$(this).parents('.listing-page').find('.listing-next').removeClass('listing-default');
		if(listAct == 0) {
			$('.listing-prev').addClass('listing-default');
		};
		return false;
	})


});

$(window).load(function(){
	$('.tab-page:not(:first)').hide();

	if($('.photo-page').length) {
	  var $grid = $('.photo-page').isotope({
	    itemSelector: '.photo-box',
	    percentPosition: true,
	    resizable : true,
	    transformsEnabled : true
	  });
	};
});


function textHeight() {
	$('.slider-h').each(function(){
		var textThis = $(this);
		var textH = textThis.find('span').height();
		var boxH = 215;
		if(textH > boxH) {
			var textSize = textThis.attr('rel');
			textSize = --textSize;
			textSizeN = textSize + 'px';
			var textSize = textThis.attr('rel', textSize);
			textThis.css('font-size', textSizeN);
			
		}
	});
	var indexStart = 0;
	$('.slider-h').each(function(){
		var textThis = $(this);
		var textH = textThis.find('span').height();
		var boxH = 215;
		if(textH > boxH) {
			indexStart = ++indexStart;
		};
	});
	if(indexStart > 0) {
		textHeight();
	};


	// Валидация формы
	$('.js-valid, .js-valid-phone-home').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			$(this).addClass('error-inp');
		} else {
			$(this).removeClass('error-inp');
		}
	});
	$('.js-valid-mail').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			$(this).addClass('error-inp');
		} else {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).removeClass('error-inp');
            } else {
               	$(this).addClass('error-inp');
            }
		}
	});

	if($('.js-valid-phone').length) {
		$('.js-valid-phone').mask("+375 00 000 00 00", {placeholder: "+375 __ ___ __ __"});
	};
	
	$('.js-valid-phone').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 17) {
			$(this).addClass('error-inp');
		} else {
			$(this).removeClass('error-inp');
		}
	});
	if($('.js-valid-phone-home').length) {
		$('.js-valid-phone-home').mask('000000000000');
	}

};


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