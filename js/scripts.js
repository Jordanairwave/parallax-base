var site = {
	init: function() {
	
    	//initialise Stellar.js
    	$(window).stellar({
    		responsive: true,
    		positionProperty: 'transform',
    		horizontalScrolling: false,
			verticalScrolling: true,
    	}););
    	
		//Main Navigation scrolling Function
		$('#main-nav ul li a').on('click', function(event) {
			event.preventDefault();
			site.section = $(this).attr('data-section');
			
			//add current clase to clicked item and remove from all others
			$(this).parent().addClass('current').siblings().removeClass('current');
			
			//Scroll to the section requested
			$('html, body').animate({
				scrollTop: $('#' + site.section).offset().top - 100
			},'slow');
		});

    }
};

$(document).ready(function(){ site.init(); });