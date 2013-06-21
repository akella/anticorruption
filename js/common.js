$(document).ready(function() {

	// ---------- dropdown -------------------- //
		jQuery('.js-dropdown').click(function(event) {
			$(this).children('ul').slideToggle();
			$(this).toggleClass('is-open');
		});

});