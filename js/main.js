$(document).ready(function(){

	$('.footer-padding').css({'height' : $('.footer').height() + 100});

	// Форма заявки
	$('.select-check').on( "change", function() {
  		if($(this).val() == 'other') {
  			$(this).parents('.form-tr-over').next('.select-radio').fadeIn();
  		} else {
  			$(this).parents('.form-tr-over').next('.select-radio').fadeOut();
  		}
	});

	$('.form-td-check input').on( "change", function() {
		if($(this).parents('.form-td-check').find('.other_input').prop("checked")) {
			$(this).parents('.select-radio').find('.check-radio-inp').show()
		} else {
			$(this).parents('.select-radio').find('.check-radio-inp').hide()
		}
	});


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
			$('.search-head input').animate({'width' : 190 + 'px'});
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


	if($(".slider-img").length) {
		var owl = $(".slider-img");
	 
		 owl.owlCarousel({
		    center: true,
		    items:1,
		    loop:true,
		    mouseDrag: false,
		    touchDrag: false,
		    pullDrag: false,
			animateOut: 'fadeOut',
			animateIn: 'flipInX',
		    responsive:{
		        600:{
		            items:1
		        }
		    }
		});

		var owl_text = $(".slider-text");
	 
		 owl_text.owlCarousel({
		    center: true,
		    items:1,
		    loop:true,
		    mouseDrag: false,
		    touchDrag: false,
		    pullDrag: false,
		    animateOut: 'fadeOut',
		    animateIn: 'flipInX',
		    responsive:{
		        600:{
		            items:1
		        }
		    }
		});

	 	if($(window).width() < 767) {
	 		$('.slider').slick('unslick');
	 	};

	 	$('.sl-prev').click(function(){
	 		owl.trigger('next.owl.carousel');
	 		owl_text.trigger('next.owl.carousel');
	 		return false
	 	});
	 	$('.sl-next').click(function(){
	 		owl.trigger('prev.owl.carousel');
	 		owl_text.trigger('prev.owl.carousel');
	 		return false
	 	});
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
	/*
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
	});*/

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
	});



	// Валидация формы
	$('.js-valid').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			$(this).addClass('error-inp');
			$(this).parents('.form-inp').addClass('item-error');
		} else {
			$(this).removeClass('error-inp');
			$(this).parents('.form-inp').removeClass('item-error');
			errorLnk();
		}
	});
	$('.active .js-valid-phone-home').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 6) {
			$(this).addClass('error-inp');
		} else {
			$(this).removeClass('error-inp');
			$(this).parents('.form-inp').removeClass('item-error');
			errorLnk();
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
                $(this).parents('.form-inp').removeClass('item-error');
                errorLnk();
            } else {
               	$(this).addClass('error-inp');
            }
		}
	});

	if($('.js-valid-phone').length) {
		$('.js-valid-phone').mask("+000 (00) 000 00 00", {placeholder: "+___ __ ___ __ __"});
	};
	if($('.js-phone').length) {
		$('.js-phone').mask("+000 (00) 000 00 00", {placeholder: "+___ __ ___ __ __"});
	};
	
	$('.active .js-valid-phone').focusout(function(){
		var validText = $(this).val().length;
		if(validText < 17) {
			$(this).addClass('error-inp');
		} else {
			$(this).removeClass('error-inp');
			errorLnk();
		}
	});
	if($('.js-valid-phone-home').length) {
		$('.js-valid-phone-home').mask('000000000000');
	}
	if($('.js-phone-home').length) {
		$('.js-phone-home').mask('000000000000');
	}


	$('.form-tr-btn button, .valid-button').click(function(){
		errorSearch();
		return false;
	});

	// Валидация почты

	$('.delivery-btn').click(function(){
		$('.delivery-inp').each(function(){
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
                $(this).parents('.delivery-form').removeClass('act-erro');
                $('.delivery-form, .delivery-h').hide();
                $('.delivery-next-txt').show();
            } else {
               	$(this).parents('.delivery-form').addClass('act-erro');
            }
		});
		return false;
	});

	$('.form-td-check label').click(function(){
		if($('#resedent_2').prop("checked")) {
			$('.form-neresident').hide();
			$('.form-neresident').removeClass('active');
			$('.form-resident').show();
			$('.form-resident').addClass('active');
		} else {
			$('.form-resident').hide();
			$('.form-resident').removeClass('active');
			$('.form-neresident').show();
			$('.form-neresident').addClass('active');
		}
	});

});
function errorSearch() {
	var validError = 0;
	$('.form-tr-message span').text('');
	$('.js-valid:visible').each(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			validError = ++validError;
			$(this).addClass('error-inp');
			$(this).parents('.form-inp').addClass('item-error');
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		};
	});
	$('.active .js-valid-phone-home').each(function(){
		var validText = $(this).val().length;
		if(validText < 6) {
			validError = ++validError;
			$(this).addClass('error-inp');
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		};
	});

	$('.js-valid-mail').each(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			validError = ++validError;
			$(this).addClass('error-inp');
			$(this).parents('.form-inp').addClass('item-error');
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		} else {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())) {} else {
               	validError = ++validError;
               	$(this).addClass('error-inp');
               	var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
				var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
				ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
				$('.form-tr-message span').append(ErrorHead);
            }
		}
	});
	$('.active .js-valid-phone').each(function(){
		var validText = $(this).val().length;
		if(validText < 17) {
			validError = ++validError;
			$(this).addClass('error-inp');
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		}
	});

	


	// Якорь
 	$('.form-tr-message a').click(function(){
	    var anchor = $(this).attr('href');
	    $('html, body').stop().animate({
	        scrollTop: $(anchor).offset().top
	    }, 1000);
 		return false;
 	});
	$('.form-tr-message em:last').hide();
	if (validError == 0) {
		$('.form-tr-message').hide();
		
	} else {
		$('.form-tr-message').show();
		return false;
	};
}
function errorLnk() {
	var validError = 0;
	$('.form-tr-message span').text('');
	$('.js-valid:visible').each(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			validError = ++validError;
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		};
	});
	$('.active .js-valid-phone-home').each(function(){
		var validText = $(this).val().length;
		if(validText < 6) {
			validError = ++validError;
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		};
	});

	$('.js-valid-mail').each(function(){
		var validText = $(this).val().length;
		if(validText < 2) {
			validError = ++validError;
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		} else {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())) {} else {
               	validError = ++validError;
               	var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
				var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
				ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
				$('.form-tr-message span').append(ErrorHead);
            }
		}
	});
	$('.active .js-valid-phone').each(function(){
		var validText = $(this).val().length;
		if(validText < 17) {
			validError = ++validError;
			var ErrorHead = $(this).parents('.form-tr').find('.form-th').text().slice(0, -1);
			var ErrorId = '#' + $(this).parents('.form-tr').attr('id');
			ErrorHead = '<a href="' + ErrorId + '">' + ErrorHead + '</a><em>,</em> ';
			$('.form-tr-message span').append(ErrorHead);
		}
	});
	// Якорь
 	$('.form-tr-message a').click(function(){
	    var anchor = $(this).attr('href');
	    $('html, body').stop().animate({
	        scrollTop: $(anchor).offset().top
	    }, 1000);
 		return false;
 	});
	$('.form-tr-message em:last').hide();
	if (validError == 0) {
		$('.form-tr-message').hide();
	} else {
		$('.form-tr-message').show();
		return false;
	};
}

$(window).load(function(){

	if($('.photo-page').length) {
	  var $grid = $('.photo-page').isotope({
	    itemSelector: '.photo-box',
	    percentPosition: true,
	    resizable : true,
	    transformsEnabled : true
	  });
	};

	$('.tab-page:not(:first)').hide();
});


function textHeight() {
	var boxH = 215;
	if($(window).width() < 1200) {
		boxH = 100;
	}
	$('.slider-h').each(function(){
		var textThis = $(this);
		var textH = textThis.find('span').height();
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
		if(textH > boxH) {
			indexStart = ++indexStart;
		};
	});
	if(indexStart > 0) {
		textHeight();
	};

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