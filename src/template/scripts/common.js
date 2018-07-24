$(document).ready(function($) {

	$('.owl-carousel').owlCarousel();


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
				selectText = $(this).parents('.select').find('.select__text');
		if (!($(this).hasClass('selected'))) {
			$('.bye__drop-select .select__item').removeClass('selected');
			$(this).addClass('selected');
			$('.bye__tab').removeClass('selected');
			$('.bye__tab' + '[data-tab = ' + attr + ']').addClass('selected');
			selectText.html(selectedItemText);
		}
	});
});
