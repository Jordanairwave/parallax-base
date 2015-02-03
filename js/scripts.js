var site = {
	windowWidth: $(window).width(),
	scrollPos: null,
	currLink: null,
	refElement: null,
	init: function() {
	
    	//initialise Stellar.js on if window width above 1024
    	if(site.windowWidth > 1024) {
	    	$(window).stellar({
	    		responsive: true,
	    		positionProperty: 'transform',
	    		horizontalScrolling: false,
				verticalScrolling: true,
	    	});	
    	}
    	
		//Main Navigation scrolling Function
		$('#main-nav ul li a').on('click', function(event) {
			event.preventDefault();
			site.section = $(this).attr('href').replace('#', '');
			
			//add current clase to clicked item and remove from all others
			$(this).addClass('current');
			
			//remove class of current from all other a tags in navigation
			$(this).parent().siblings().children().removeClass('current');
			
			//Scroll to the section requested
			$('html, body').animate({
				scrollTop: $('#' + site.section).offset().top - 100
			},'slow');
		});
		
		//Scrolling function to add current class to a tag
		$(window).scroll(function() {
	
		    site.scrollPos = $(document).scrollTop();
		    
		    $('#main-nav a').each(function () {
		        site.currLink = $(this);
		        site.refElement = $(site.currLink.attr("href"));
		        if (site.refElement.position().top - 100 <= site.scrollPos && site.refElement.position().top - 100 + site.refElement.height() > site.scrollPos) {
		            $('#main-nav ul li a').removeClass("current");
		            site.currLink.addClass("current");
		        }
		    });
	
		});

    }
};

$(document).ready(function(){ site.init(); });