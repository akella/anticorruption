$(document).ready(function() {

	// ---------- dropdown -------------------- //
		jQuery('.js-dropdown').click(function(event) {
			$(this).children('ul').slideToggle();
			$(this).toggleClass('is-open');
		});

	// ---------- Popup with overlay -------------------- //
		$('body').click(function(){
			$('.overlay,.popup').toggleClass('is-open');
			if ($('.popup').hasClass('is-open')){
				$(this).addClass('js-popup-page');
			}
			else {
				$(this).removeClass('js-popup-page');
			}
		});

	// ---------- Search erase button -------------------- //
		$('.js-search-erase').click(function(){
			$('.js-search-text').val('');
		});

	// ---------- js-search-filters is-active -------------------- //
		var select_all = $('.js-select-all');
		var select_all_value = select_all.attr('data-search');

		$('.js-search-filters span').click(function(){
			if ($(this).parent().hasClass('is-active')){
				$(this).parent().removeClass('is-active');
				$('.js-select-all').parent().addClass('is-active');
				$('.js-search-text').attr('data-filter', select_all_value);
			}
			else {
				var search = $(this).attr('data-search');
				$('.js-search-text').attr('data-filter', search);
				$('.js-search-filters li').removeClass('is-active');
				$(this).parent().addClass('is-active');
			}
		});

	// ---------- search -------------------- //
		jQuery('.js-search-btn, .search__close').click(function(event) {
			$('.js-search-btn').toggleClass('is-open');
			$('.js-search').slideToggle();
		});

});