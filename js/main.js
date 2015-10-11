
 
var product=[];
var appId ='printerpixmos_v1.0';
var request_opion={
	token:'',
	useremail:'',
	userpassword:'',
	firstname:'',
	lastname:'',
	newsletter: '',
	newsletter:'',
	pageGroupTypeId:'',
	pageGroupId:''
}

var request_path ={
	init:'/account/applogin',
	login:'/account/userlogin',
	register:'/account/Register/',
	forgetpassword:'/account/ForgotPassword?email=',
	pageGroupTypes:'/PlatinumProduct/PageGroupTypes',
	subPageGroupe:'/PlatinumProduct/PageGroups?pageGroupTypeId=',
	product:'/PlatinumProduct/products/?pageGroupId',

}

var urlRe = /([A-Za-z][A-Za-z0-9\+\.\-]*:\/\/([A-Za-z0-9\.\-_~:/\?#\[\]@!\$&''\(\)\*\+,;=]|%[A-Fa-f0-9]{2})+)|(\s|^)[^\s@\:]+\.(com|net|ru|org|de|uk|jp|br|pl|info|cn|fr|it|in|nl|au|biz|es|ir|eu|ro|lv)(?:(?=\s+)|$|\/(([\w.]*@(\w|.)*)*\w*))+/g;
var emailRegexp = /(\s|^)[a-z0-9._%+-\/]+@[a-z0-9.-]+\.[a-z]{2,4}(\s|$)/i;

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
function request_S_server(path, option) {
	var headers=[];
	var response;
	headers = {"appId":appId};;
	headers["token"] = option.token;
	headers["useremail"]=option.useremail;
	headers["userpassword"]=option.userpassword;
	headers["userFirstName"]=option.firstname;
	headers["userLastName"]=option.lastname;
	headers["newsletter"]="true";



	return $.ajax({
		type:'GET',
			url: 'https://api.printerpix.co.uk/api'+path,
			dataType:'json',
			//contentType: 'application/json',
			headers:headers,
			data:response

	});
}
function request_server ( path, option) {
	var headers=[];
	var response;
	headers = {"appId":appId};;
	headers["token"] = option.token;
	headers["useremail"]=option.useremail;
	headers["userpassword"]=option.userpassword;
	

	return $.ajax({
		type:'GET',
			url: 'http://api.printerpix.co.uk/api'+path,
			dataType:'json',
			//contentType: 'application/json',
			headers:headers,
			data:response

	});

	/*.done(function(response){
			console.log("done",response.customer);
			response = JSON.parse(response.customer);
			option.token = response.Token;
			console.log("done",option.token );
		    callback(response);
	});
	*/

}
 function loginPage(){
	$('input').on('click focusin', function() {
    this.value = '';
	});
 }

 function showLoginPage() {
 	$(window).bind('hashchange', function(){
 		console.log("onhashchange");
 		//showLoginPage();
 
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

 	function showErrorMessage() {
 		console.log("showErrorMessage");
 	}

 	if($('#login-container').hasClass('hidden')) displayLogin();
 	else hiddenLogin();
 
 	$('#forgetPassword').click(function(){
 		showforgetPasswordPage();
 	});

 	$('#newRegister').click(function(){
 		showRegisterPage();
 	});

 	$('#login-btn').click(function() {
 		var userId =  $("#username").val();
 		var password =  $("#password").val();
 		var response;

 		//Test id, password : //TODO: delete later
 		userId='yeanshi.teoh@syncoms.com';
 		password='12';
 		if(!(emailRegexp.test(userId))){
 			showErrorMessage();
 		} 
 		else {
 			request_opion.useremail =userId;
 			request_opion.userpassword = password;

 			$('#splashSpinnerLogin').removeClass('hidden');

 			request_S_server(request_path.login,request_opion).done(function(data){
 				var response = JSON.parse(data.customer);
 				console.log(response);
 				request_opion.firstname = response.FirstName;
 				request_opion.lastname = response.LastName;
 				hiddenLogin();
 				$('#splashSpinnerLogin').addClass('hidden');
 			});
 			request_S_server(request_path.login,request_opion).fail(function(data){
 				showErrorMessage(data);
 				$('#splashSpinnerLogin').addClass('hidden');
 			});


 		}
 		console.log("id",response);
 	});

 }
 function showforgetPasswordPage(){
 	console.log("showforgetPasswordPage");
 	$('#login-container').children("div").remove();
 	var template = Handlebars.compile($('#forgotPasswordMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));
	/*window.onhashchange = function() {
		$('#login-container').children("div").remove();
 	 	template = Handlebars.compile($('#loginMobileTemplate').html()); 
		$('#login-container').append(template(Mobildata));
	}
	*/
	$('#sendPassword').click(function() {
		var userId =  $("#f-username").val();
		userId='yeanshi.teoh2222@syncoms.com';
		//userId='test@gmail.com';
		if(!(emailRegexp.test(userId))){
			console.log(userId);
			showErrorMessage();
		}
 		else {
 			console.log("start");
 			request_path.forgetpassword+=userId;
 			$('#splashSpinnerFoget').removeClass('hidden');
			request_S_server(request_path.forgetpassword,request_opion).done(function(data){
				//var response = JSON.parse(data.customer);
 				console.log(data.responseText);
 				$('#splashSpinnerFoget').addClass('hidden');
			});
			request_S_server(request_path.forgetpassword,request_opion).fail(function(data){
 				//var response = JSON.parse(data.customer);
 				console.log(data.responseText);
 				if(data.status == 200){
 					if(data.responseText == "Email does not exist."){
 				 		$('#forget-title').text("Invalid Email");
 						$('#forget-message').text("There is no account associated with this email address.");
 					}
 					else {
 						$('#forget-message').text(data.responseText);
 						$('#sendPassword').addClass('hidden');
 						$('#closePassword').removeClass('hidden');

 						$('#closePassword').click(function() {
 							hideforgetPasswordPag();
 						});
 					}
 				}
 				$('#splashSpinnerFoget').addClass('hidden');
 			});

		}

	});
 }
 function hideforgetPasswordPag() {
	$('#login-container').children("div").remove();
 	var template = Handlebars.compile($('#loginMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));
 }

 function showRegisterPage(){
 	var input_val;
 	console.log("showRegisterPage");
 	$('#login-container').children("div").remove();
 	var template = Handlebars.compile($('#registerMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));
	window.onhashchange = function() {
		$('#login-container').children("div").remove();
		template = Handlebars.compile($('#loginMobileTemplate').html()); 
		$('#login-container').append(template(Mobildata));
	}
	function makeEmpty(id,default_value) {
		$(id).focus(function(){
			if($(this).val() == default_value) {
             	$(this).val("");
            }
        }).blur(function(){
        	if($(this).val().length == 0) {
            $(this).val(default_value);
        }
		});
	}

	var default_f_name = $("#firstname").val();
	makeEmpty("#firstname",default_f_name);

	var default_l_name = $("#lastname").val();
	makeEmpty("#lastname", default_l_name);

	input_val =  $("#reg_email").val();
	makeEmpty("#reg_email",input_val);

	var reg_password  =  $("#reg_password").val();
	var reg_password2 = $("#reg_password2").val();

	makeEmpty("#reg_password",reg_password);
	makeEmpty("#reg_password2",reg_password2);



	$('#register').click(function() {
		input_val =  $("#firstname").val();
		
		var b_firstname = false;
		var b_lastname = false;

		if(!(input_val) || (input_val == default_f_name)){
			$('#invaild-reg-fname').removeClass('hidden');
		}
		else {
			$('#invaild-reg-fname').addClass('hidden');

			b_firstname = true;
			request_opion.firstname = input_val;
		}
		input_val =  $("#lastname").val();
		if(!(input_val) || (input_val ==default_l_name)){
			$('#invaild-reg-lname').removeClass('hidden');
			
		}
		else {
			$('#invaild-reg-lname').addClass('hidden');
			b_lastname=true;
			request_opion.lastname = input_val;
		}
		input_val =  $("#reg_email").val();

		reg_password  =  $("#reg_password").val();
		reg_password2 = $("#reg_password2").val();
		if(!(emailRegexp.test(input_val))){
			$('#invaild-reg-email').removeClass('hidden');

		}
		else if(reg_password != reg_password2){
			$('#invaild-reg-email').addClass('hidden');
			$('#invaild-reg-pw').removeClass('hidden');
		}
		else {
			$('#invaild-reg-pw').addClass('hidden');
			if(b_firstname && b_lastname){
				request_opion.useremail = input_val;
				request_opion.userpassword = reg_password;
				$('#splashSpinnerReg').removeClass('hidden');
				request_S_server(request_path.register,request_opion).done(function(data){
					console.log(data);
					if(data.Exception) {

					}
					else {
						hideRegisterPage();
					}
					$('#splashSpinnerReg').addClass('hidden');
				});
				request_S_server(request_path.register,request_opion).fail(function(data){
					console.log(data);
					$('#splashSpinnerReg').addClass('hidden');

				});

			}

		}

	});
 }
function hideRegisterPage() {
	$('#login-container').children("div").remove();
	showLoginPage();
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
	$('#login-nav').click( function() {
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
		token = temp.Token;
		console.log("done",token);
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
 
 
	request_server(request_path.init,request_opion).done(function(data){
		var response = JSON.parse(data.customer);
		request_opion.token =response.Token;
	});
	//

});

