//Isotope active js code:
//************************

// Active isotope with jQuery code:

$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows',

});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});

			//prettyPhoto aanzetten -->

  				$(document).ready(function(){
    			$("a[rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'normal',
			social_tools: false,
			modal: false,
			})
  					});

