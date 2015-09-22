

$(document).ready(function () {
	var template;
	Handlebars.registerHelper('breaklines', function(text) {
    text = Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Handlebars.SafeString(text);
	});
	template = Handlebars.compile($('#headerTemplate').html()); 
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

    $('.flag-drop-down').dropit();
});