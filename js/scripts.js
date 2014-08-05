var site = {
	init: function() {
	
    	//initialise Stellar.js
    	$(window).stellar({
    		responsive: true,
    		positionProperty: 'transform'
    	});

    }
};

$(document).ready(function(){ site.init(); });