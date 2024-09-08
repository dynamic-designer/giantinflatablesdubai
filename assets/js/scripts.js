var $ = jQuery.noConflict();
$mainHeaderHeight = $('.main-header').outerHeight();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	//do jQuery stuff when DOM is ready

	/* Responsive Jquery Navigation */
	$( '.hamburger' ).click(function() {
		$( '.mobilenav' ).toggleClass( 'is-open' );
	} );
	$( '.mobilenav .nav-backdrop' ).click( function() {
		$( '.mobilenav' ).removeClass( 'is-open' );
	} );
	$('.header-top-space').css('padding-top', $mainHeaderHeight);

	/* header sticky */
	$(window).scroll(function() {
		if ($(this). scrollTop() > 1){
			$('.main-header').addClass("sticky");
		}
		else{
			$('.main-header').removeClass("sticky");
		}
	});

	/* banner slider */
	$('.banner-slider').owlCarousel({
		nav:false,
		items:1,
		// responsive:{
		// 	0:{
		// 		items:1
		// 	},
		// 	600:{
		// 		items:3
		// 	},
		// 	1000:{
		// 		items:5
		// 	}
		// }
	})

/* Jump to next section */
$( '.banner-down-btn' ).on( 'click', function(e) {
	e.preventDefault();
	$( 'html, body' ).animate({ scrollTop: $($( this ).attr( 'href' )).offset().top - $mainHeaderHeight + 110}, 500, 'linear' );
});

} );

/* Script on load
------------------------------------------------------------------------------*/
$( window ).on( 'load',function() {

} );

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {

} );

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {

} );

/* Script all functions
------------------------------------------------------------------------------*/
