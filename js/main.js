
 
var product=[];
function initCycle (numberSlide) {
		 
	$('#slider-source').cycle({
			fx: 'fadeout',
			timeout: 0,
			speed:800,
			manualSpeed:300,
			sildes: 'div',
			pager: '#page-pager',

		});

}
 function loginPage(){
	$('input').on('click focusin', function() {
    this.value = '';
	});
 }

 function showLoginPage() {
 	$(window).bind('hashchange', function(){
 		console.log("onhashchange");
 		showLoginPage();
 
 	});
 	console.log("showLoginPage");
 	function displayLogin() {
 		$('#login-container').removeClass('hidden');
 		$('#promotion-slider-bar').addClass('hidden');
 		$('#next_banner').addClass('no-background');
 		$('#next_banner').addClass('hidden');
 		$('#best-seller').addClass('hidden');
 	}
 	function hiddenLogin(){
 	 	$('#login-container').addClass('hidden');
 		$('#promotion-slider-bar').removeClass('hidden');
 		$('#next_banner').removeClass('no-background');
 		$('#next_banner').removeClass('hidden');
 		$('#best-seller').removeClass('hidden');	
 	}
 	if($('#login-container').hasClass('hidden')) displayLogin();
 	else hiddenLogin();
 
 	$('#forgetPassword').click(function(){
 		showforgetPasswordPage();
 	});

 	$('.regbtn').click(function(){
 		showRegisterPage();
 	});

 }
 function showforgetPasswordPage(){
 	console.log("showforgetPasswordPage");
 	$('#login-container').children("div").remove();
 	var template = Handlebars.compile($('#forgotPasswordMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));
	window.onhashchange = function() {
		$('#login-container').children("div").remove();
 	 	template = Handlebars.compile($('#loginMobileTemplate').html()); 
		$('#login-container').append(template(Mobildata));

	}
 }

 function showRegisterPage(){
 	console.log("showRegisterPage");
 	$('#login-container').children("div").remove();
 	var template = Handlebars.compile($('#registerMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));
	window.onhashchange = function() {
		$('#login-container').children("div").remove();
		template = Handlebars.compile($('#loginMobileTemplate').html()); 
		$('#login-container').append(template(Mobildata));
	}
 }
function showCartPage(){
	hideHeaderPage();
	hideNavProductPage();
	hideSectionPage();
	hideFooterPage();
	displayCartPage();
	$('#backto').click(function(){
		hideCartPage();
		displayHeaderPage();
		displayNavProductPage();
		displaySectionPage();
		displayFooterPage();
	})
}

function displayHeaderPage() {
	var template;

	// header for icon+ call number -black blackground
	template = Handlebars.compile($('#headerCallTemplate').html()); 
	$('#caller-header-bar').append(template);
	// header for logo, login button, basket button, menu buton
	template = Handlebars.compile($('#headerNavTemplate').html()); 
	$('#top-header-bar').append(template);
	$('.register').click( function() {
		showLoginPage();
	});
	$('.basket').click( function() {
		showCartPage();
	});

}
function hideHeaderPage(){
	$('#caller-header-bar').children("div").remove();
	$('#top-header-bar').children("div").remove();
}
function displayNavProductPage() {
	var template;
	template = Handlebars.compile($('#navbarTemplate').html()); 
	$('#product-menu-bar').append(template(menu));
	//login page
	template = Handlebars.compile($('#loginMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));



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

}
function hideNavProductPage(){

	$('#product-menu-bar').children("div").remove();
	//$('#top-header-bar').children("div").remove();
}
function displaySectionPage() {
	var template;
	//promotion slide
	template = Handlebars.compile($('#promoMobileTemplate').html()); 
	$('#promotion-slider-bar').append(template(Mobildata));
	//Best seller list
	template = Handlebars.compile($('#productMobileTemplate').html()); 
	$('#best-seller').append(template(Mobildata));
	initCycle(2);

}
function hideSectionPage() {
	$('#promotion-slider-bar').children("div").remove();
 	$('#best-seller').children("div").remove();
}
function displayProductPages(ProductName) {
	var template;
	template = Handlebars.compile($('#productMobileTemplate').html()); 
	$('#product-list').append(template(ProductName));
}
function displayMoreDetailofProductPages(ProductName){
	//Example to choose
	product.push(ProductName);
	$('#lastPath').text(product[product.length-1]);
	$('.product-info h1').text(ProductName.productList[1].title);
	$('.product-info img').attr("src",ProductName.productList[1].customerStar);
	$('.product-info p').text(ProductName.productList[1].details);
}
function displayCardPage() {
	var template;
	product.push('Cards');
	template = Handlebars.compile($('#CardsMobileTemplate').html()); 
	$('#product-list').append(template(Cards));
}
function displayCartPage(){
	var template;
	template = Handlebars.compile($('#titleHeaderMobileTemplate').html()); 
	$('#top-header-bar').append(template);
	template = Handlebars.compile($('#navFlowerMobileTemplate').html());
	$('#nav-memu-bar').append(template);
	template = Handlebars.compile($('#baskettopMobileTemplate').html());
	$('#nav-memu-bar').append(template);
	template = Handlebars.compile($('#basketListMobileTemplate').html());
	$('#best-seller').append(template);
	
}
function hideCartPage() {
	$('#top-header-bar').children("div").remove();
	$('#nav-memu-bar').children("div").remove();
	$('#best-seller').children("div").remove();
}
function displayFooterPage() {
 	var template;
 	template = Handlebars.compile($('#footerMobileTemplate6').html()); 
	$('#footer-mobile-about').append(template(footer));

   	template = Handlebars.compile($('#socialMobileTemplate').html()); 
	$('#footer-social').append(template(footer));

	template = Handlebars.compile($('#footerMobileTemplate3').html()); 
	$('#footer-flag').append(template(footer));


   	template = Handlebars.compile($('#footerMobileTemplate4').html()); 
	$('#footer-pd-list').append(template(footer));

   	template = Handlebars.compile($('#footerMobileTemplate5').html()); 
	$('#footer-register').append(template(footer));
 }
 function hideFooterPage(argument) {
 	$('#footer-mobile-about').children("div").remove();
 	$('#footer-social').children("div").remove();
 	$('#footer-flag').children("div").remove();
 	$('#footer-pd-list').children("div").remove();
 	$('#footer-register').children("div").remove();
 	// body...
 }
function open_application () {
	// body...
	var data;
	var temp;
	var headers = { 
		//"Access-Control-Allow-Origin": "*"};
		"appId":"printerpixmos_v1.0"};
	var jqxhr = $.ajax( {
		type:'GET',
			url: 'http://api.printerpix.co.uk/api/account/applogin',
			dataType:'json',
			//contentType: 'application/json',
			headers:headers,
			data:data

	}).done(function(data){
		console.log("done",data.customer);
		temp = JSON.parse(data.customer);
	});

 
 
}

$(document).ready(function () {
	var template;

	// header for icon+ call number -black blackground
/*	template = Handlebars.compile($('#headerCallTemplate').html()); 
	$('#caller-header-bar').append(template);
	// header for logo, login button, basket button, menu buton
	template = Handlebars.compile($('#headerNavTemplate').html()); 
	$('#top-header-bar').append(template);*/
	displayHeaderPage();
	//Product list navigation bar
	displayNavProductPage();

	displaySectionPage();
   //	displayCartPage();
   	displayFooterPage();





 

	// when login button is clicked

	loginPage();

	open_application();
	//

});

