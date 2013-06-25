$(document).ready(function() {

	// ---------- dropdown -------------------- //
		jQuery('.js-dropdown').click(function(event) {
			$(this).children('ul').slideToggle();
			$(this).toggleClass('is-open');
		});

	// ---------- Popup with overlay -------------------- //
		$('body').click(function(){
			$('.overlay,.popup').toggleClass('is-open');
		});

	// ---------- search -------------------- //
		jQuery('.js-search-btn, .search__close').click(function(event) {
			$('.js-search-btn').toggleClass('is-open');
			$('.js-search').slideToggle();
		});

});