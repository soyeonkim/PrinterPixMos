

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
	/*$('#shop-pd').click(function(){
 		$(this).toggleClass('bottom-borderline');
	});
	$('#shop-occas').click(function(){
 		$(this).toggleClass('bottom-borderline');
	});
*/
	$('#navbar-ex2-collapse').on('show.bs.collapse', function () {
		console.log("open?");
		$('#navbar-ex3-collapse').collapse('hide');
		$('#shop-pd').removeClass('bottom-borderline');
	});
	$('#navbar-ex2-collapse').on('hidden.bs.collapse', function () {
		$('#shop-pd').addClass('bottom-borderline');
	});
	$('#navbar-ex3-collapse').on('show.bs.collapse', function () {
		console.log("close?");
		$('#navbar-ex2-collapse').collapse('hide');
		$('#shop-occas').removeClass('bottom-borderline');
	});
	$('#navbar-ex3-collapse').on('hidden.bs.collapse', function () {
		$('#shop-occas').addClass('bottom-borderline');
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

function reference() {
	$('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
  $('#bs-example-navbar-collapse-1').append($('#sidebar').html());
  $('#bs-example-navbar-collapse-1 ul').last().removeClass('nav-pills nav-stacked').addClass('navbar navbar-nav');
});
$('#bs-example-navbar-collapse-1').on('hidden.bs.collapse', function () {
  $('#bs-example-navbar-collapse-1 ul:last-child').remove();
});
$(window).on('resize', function () {
  if (window.innerWidth > 768) {$('#bs-example-navbar-collapse-1').collapse('hide');}
});
}