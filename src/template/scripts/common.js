$(document).ready(function($) {

	$('.articles__list').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		items: 3,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1220: {
				items: 3
			}
		}
	});


	$(window).on('load resize', function() {
		$('.pp').height($('body').height());
	});


	$('.description__nav li').each(function(index, el) {
		var attr = $(this).attr('data-tab');
		if ($(this).hasClass('selected')) {
			$('.description__tab' + '[data-tab = ' + attr + ']').addClass('selected')	
		}
	});

	$('.description__nav li').click(function(index, el) {
		var attr = $(this).attr('data-tab');
		if (!($(this).hasClass('selected'))) {
			$('.description__nav li').removeClass('selected');
			$(this).addClass('selected');
			$('.description__tab').removeClass('selected');
			$('.description__tab' + '[data-tab = ' + attr + ']').addClass('selected');
		}
	});


	$('.select').each(function(index, el) {
		var selectedItem = $(this).find('.select__item.selected'),
				selectedItemText = selectedItem.html(),
				selectText = $(this).find('.select__text'),
				selectedAttr = selectedItem.attr('data-tab');

		selectText.html(selectedItemText);
		$('.bye__tab' + '[data-tab = ' + selectedAttr + ']').addClass('selected');
	});

	$('.select__item').click(function(event) {
		var attr = $(this).attr('data-tab'),
				selectedItemText = $(this).html(),
				select = $(this).parents('.select'),
				selectText = select.find('.select__text');
		if (!($(this).hasClass('selected'))) {
			$('.bye__drop-select .select__item').removeClass('selected');
			$(this).addClass('selected');
			$('.bye__tab').removeClass('selected');
			$('.bye__tab' + '[data-tab = ' + attr + ']').addClass('selected');
			selectText.html(selectedItemText);
			google.maps.event.trigger(map1, 'resize')
			google.maps.event.trigger(map2, 'resize')
			google.maps.event.trigger(map3, 'resize')
		}
		select.toggleClass('select_toggle');
	});

	$('.select__text').click(function(event) {
		var select = $(this).parents('.select');
		select.toggleClass('select_toggle');
	});


	$('.faq__item').click(function(event) {
		var body = $(this).find('.faq__item-body');
		$(this).toggleClass('faq__item_toggle');
		body.slideToggle(300);
	});


	var mobileBtn = $('.mobile-btn'),
			nav = $('.nav'),
			header = $('.header');


	mobileBtn.click(function(event) {
		header.toggleClass('header_toggle');
		nav.toggleClass('nav_toggle');
		$(this).toggleClass('mobile-btn_toggle');
	});


	$("a[href^='#']").click(function(){
	  var _href = $(this).attr("href");
	  $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
	  return false;
	});

	

	$(window).on('load', function(event) {
		var windowWidth = $(window).width();
		if (windowWidth > 767) {
			new WOW().init();
		}
	});
});
