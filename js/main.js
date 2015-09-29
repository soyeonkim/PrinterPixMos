

$(document).ready(function () {
	var template;

	template = Handlebars.compile($('#headerCallTemplate').html()); 
	$('#caller-header-bar').append(template);


	template = Handlebars.compile($('#headerNavTemplate').html()); 
	$('#top-header-bar').append(template);

	template = Handlebars.compile($('#navbarTemplate').html()); 
	$('#product-menu-bar').append(template(menu));

	


	$('.main-flag').click(function (){
		console.log("click");
		$('.sub-menu-list').addClass('hidden');
		$('.flags-list').removeClass('hidden');
		$('.main-flag').addClass('hidden');
	});
	$('.gb-flag').click(function(){
		console.log("click2");
		$('.sub-menu-list').removeClass('hidden');
		$('.flags-list').addClass('hidden');
		$('.main-flag').removeClass('hidden');
	});
	$('#menu-toggle').click(function(){
 		$(this).toggleClass('bottom-borderline');
	});
	$('#shop-pd').click(function(){
 		$(this).toggleClass('bottom-borderline');
	});
	$('#shop-occas').click(function(){
 		$(this).toggleClass('bottom-borderline');
	});

	

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