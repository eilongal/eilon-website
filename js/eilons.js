
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

	$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 1150 && $(this).scrollTop() < 1770) {
        $("#fade1").fadeIn();
    } else {
        $("#fade1").stop().fadeOut();
    }
	});
	
			$('article').readmore({
		  afterToggle: function(trigger, element, expanded) {
			if(! expanded) { // The "Close" link was clicked
			  $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
			}
		  },
		  moreLink: '<a href="#">Continue Reading...</a>',
		  speed: 500
		});
	  
		$(document).ready(function() {
			$('.fancybox').fancybox({
				overflow : 'hidden', 
				scrolling   : 'no',
				helpers: {
					overlay: {
						locked: false
					}
				}
			});
		});