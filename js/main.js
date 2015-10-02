function initCycle (numberSlide) {
		 
	$('#slider-source').cycle({
			fx: 'fadeout',
			timeout: 0,
			speed:800,
			manualSpeed:300,
			sildes: 'div',
			pager: '#page-pager',

		});
 		$('#best-slider').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_PhotoBookPage',
			prev :'#next_PhotoBookPage',
			startingSlide: 0,
			carouselVisible:numberSlide
		});
		 $('#best-slider2').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_PhotoBookPage',
			prev :'#next_PhotoBookPage',
			startingSlide: 2,
			carouselVisible:numberSlide
		});

		$('#instagram-slider').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_InstagramPage',
			prev :'#nex_InstagramPage',
			startingSlide: 0,
			carouselVisible:numberSlide
		});
		$('#instagram-slider2').cycle({
			fx: 'carousel',
			timeout: 0,
			sildes: 'div',
			next :'#prev_InstagramPage',
			prev :'#nex_InstagramPage',
			startingSlide: 2,
			carouselVisible:numberSlide
		});


	}
 function loginPage(){
 //	$('input').on('keydown', function(e) {
 //   	if( !/[a-z]|[A-Z]/.test( String.fromCharCode( e.which ) ) )
 //       	return false;
//	});​​​​​​​​

	$('input').on('click focusin', function() {
    this.value = '';
});
 }

 function showLoginPage() {
 	$('#login-container').toggleClass('hidden');
 	$('#promotion-slider-bar').toggleClass('hidden');
 	$('#next_banner').toggleClass('no-background');
 	$('#best-seller').toggleClass('hidden');
 	$('#best-seller2').toggleClass('hidden');
 	$('#instagram-seller').toggleClass('hidden');
 	$('#instagram-seller2').toggleClass('hidden');
 }
$(document).ready(function () {
	var template;

	template = Handlebars.compile($('#headerCallTemplate').html()); 
	$('#caller-header-bar').append(template);


	template = Handlebars.compile($('#headerNavTemplate').html()); 
	$('#top-header-bar').append(template);

	template = Handlebars.compile($('#navbarTemplate').html()); 
	$('#product-menu-bar').append(template(menu));

	$('#next_banner').addClass('hidden');

	template = Handlebars.compile($('#productMobileTemplate').html()); 
	$('#product-list').append(template(PhotoBook));
	
	
/*	template = Handlebars.compile($('#loginMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));

	template = Handlebars.compile($('#promoMobileTemplate').html()); 
	$('#promotion-slider-bar').append(template(Mobildata));

	template = Handlebars.compile($('#productMobileTemplate').html()); 
	$('#best-seller').append(template(Mobildata));

	template = Handlebars.compile($('#instagramMobileTemplate').html()); 
	$('#instagram-seller').append(template(Mobildata));

	template = Handlebars.compile($('#instagramMobileTemplate2').html()); 
	$('#instagram-seller2').append(template(Mobildata));
	
	template = Handlebars.compile($('#bestSellerMobileTemplate2').html()); 
	$('#best-seller').append(template(Mobildata));

	template = Handlebars.compile($('#promotionMobileSellerTemplate').html()); 
   $('#promo-mobile-seller').append(template(Mobildata));
	*/
	template = Handlebars.compile($('#footerMobileTemplate1').html()); 
	$('#footer-mobile-about').append(template(footer));
   
   	template = Handlebars.compile($('#footerMobileTemplate2').html()); 
	$('#footer-social').append(template(footer));

	template = Handlebars.compile($('#footerMobileTemplate3').html()); 
	$('#footer-flag').append(template(footer));


   	template = Handlebars.compile($('#footerMobileTemplate4').html()); 
	$('#footer-pd-list').append(template(footer));

   	template = Handlebars.compile($('#footerMobileTemplate5').html()); 
	$('#footer-register').append(template(footer));


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


 
	initCycle(2);
	// when login button is clicked
	$('.register').click( function() {
		showLoginPage();
	});
	loginPage();
	//

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