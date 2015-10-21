var printerpixMos = printerpixMos ||{};
 
var product=[];
var listProduct=[];
var appId ='printerpixmos';
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
	product:'/PlatinumProduct/products/?pageGroupId=',

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
	headers = {"appId":appId};
	headers["token"] = option.token;
	headers["useremail"]=option.useremail;
	headers["userpassword"]=option.userpassword;
	

	return $.ajax({
		type:'GET',
			url: 'http://api.printerpix.co.uk/api'+path,
			//url:'http://api.printerpix.co.uk/api/account/applogin',
			//url:'http://api.printerpix.co.uk/api/PlatinumProduct/PageGroupTypes',
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
function navListProduct(response){
	var tmp;
	for (var i=0; i<response.length; i++){
		tmp = response[i].name.substring(0,response[i].name.length-4);
		response[i].name = tmp;
	}
	return response;
}
 function loginPage(){
	$('input').on('click focusin', function() { 
    this.value = '';
	});
 }

 function hideforgetPasswordPag() {
	$('#login-container').children("div").remove();
 	var template = Handlebars.compile($('#loginMobileTemplate').html()); 
	$('#login-container').append(template(Mobildata));
	$('#login-container').addClass('hidden');
	showLoginPage();
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
	$('#menu-toggle').click(function(event){
 		//$(this).toggleClass('bottom-borderline');
 		event.stopPropagation();
 		if($('#headbar-ex1-collapse').attr('aria-expanded') ==="true") {
 			hideDropdwonList('#headbar-ex1-collapse');
 			$('#menu-toggle').addClass('bottom-borderline');
 		}
 		else {
 			showDropdownList('#headbar-ex1-collapse');
 			$('#menu-toggle').removeClass('bottom-borderline');
 		}
 		$(document).click( function(){
 			$('#menu-toggle').addClass('bottom-borderline');
        	hideDropdwonList('#headbar-ex1-collapse');
    	});

	});


}
function hideHeaderPage(){
	$('#caller-header-bar').children("div").remove();
	$('#top-header-bar').children("div").remove();
}
function displayNavProductPage(ProductList) {
	var prename="#nav_";
	precompleTemplate('#product-menu-bar','#navbarTemplate',ProductList);
	//login page
	for(var k = 0; k < ProductList.nav.length ; k++ ){
		var new_id = prename+ProductList.nav[k].id;
		$(new_id).click(function(){
			product=[];
			var org_id = this.id.slice(4);
			product.push(this.childNodes[0].nodeValue);
			//this.childNodes : NAME of PRODUCT.
			//console.log("click:", org_id);
			var new_url = request_path.subPageGroupe+org_id;
			console.log("url: ",new_url);
			var request = request_server(new_url,request_opion);
			request.done(function(data) {
				//console.log("done:", data);
				if(data  && data.pageGroups) {
					//console.log("response:", data.pageGroups);
					var response = JSON.parse(data.pageGroups);
					console.log("response:", response);
					hideSectionPage();
					//printerpixMos.products.init();
					printerpixMos.products.displayProductPages(product, response);
					//displayProductPages(product, response);
					if($('#navbar-ex2-collapse').attr('aria-expanded') ==="true") {
 						hideDropdwonList('#navbar-ex2-collapse');
 						$('#shop-pd').addClass('bottom-borderline');
 					}
				}
				else {
					show404ErrorPage();
				}

			});
			request.fail(function (jqXHR, textStatus) {
				console.log(" fail jqXHR :",jqXHR);
				show404ErrorPage();
			});
		});
	}


 
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
 
	precompleTemplate('#promotion-slider-bar','#promoMobileTemplate',Mobildata);
	//Best seller list
	precompleTemplate('#best-seller','#productMobileTemplate',Mobildata);
	initCycle(2);

}
function hideSectionPage() {
	$('#promotion-slider-bar').children("div").remove();
 	$('#best-seller').children("div").remove();
}

function displayFooterPage() {
	precompleTemplate('#footer-mobile-about','#footerMobileTemplate6',footer);
	precompleTemplate('#footer-social','#socialMobileTemplate',footer);
	precompleTemplate('#footer-flag','#footerMobileTemplate3',footer);
	precompleTemplate('#footer-pd-list','#footerMobileTemplate4',footer);
	precompleTemplate('#footer-register','#footerMobileTemplate5',footer);
 }
 function hideFooterPage(argument) {
 	$('#footer-mobile-about').children("div").remove();
 	$('#footer-social').children("div").remove();
 	$('#footer-flag').children("div").remove();
 	$('#footer-pd-list').children("div").remove();
 	$('#footer-register').children("div").remove();
 	// body...
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
	

	// displaySectionPage();
    // displayCartPage();
   	//displayProductPages(PhotoBook);
   	

	// when login button is clicked

	loginPage();
 
 
 	var request = request_server(request_path.init,request_opion);
	//request_server(request_path.init,request_opion)
	request.done(function(data){
		var response = JSON.parse(data.customer);
		request_opion.token =response.Token;
		console.log("token :",request_opion.token);
		request_server(request_path.pageGroupTypes,request_opion)

		.done(function(data){
			console.log(":",data.pageGroupTypes);
			response = JSON.parse(data.pageGroupTypes);
			console.log("response:",response);
			listProduct={"nav": navListProduct(response)};
			//TODO: later change from 
			listProduct["nav_occasions"]= menu.nav_occasions;
			displayNavProductPage(listProduct);
			displaySectionPage(listProduct);

			});
		});
		request.fail(function (jqXHR, textStatus) {
			console.log(" fail jqXHR :",jqXHR);
			console.log(" textStatus :",textStatus);
			show404ErrorPage();
		});
	
	
	//displayMoreDetailofProductPages(PhotoBook);
   	displayFooterPage();
	//

});

