

$(document).ready(function () {
	var template;

	template = Handlebars.compile($('#headerCallTemplate').html()); 
	$('#caller-header-bar').append(template);


	template = Handlebars.compile($('#headerNavTemplate').html()); 
	$('#top-header-bar').append(template);

 


	function initCycle () {
		var iw = window.innerWidth;
		var numberSlide=4;

		if(iw <768){
			numberSlide=2;
		}
		else if(iw <960){
			numberSlide = 3;
		}
		else {
			numberSlide = 4;
		}

	

	}
	initCycle();

});