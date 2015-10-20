
function precompleTemplate(id, template, data){
	var template;
	template = Handlebars.compile($(template).html()); 
	if(data) $(id).append(template(data));
	else $(id).append(template());
}
function showDropdownList(id) {
	$(id).addClass('in');
	$(id).attr("aria-expanded",'true');
}
function hideDropdwonList(id) {
	$(id).removeClass('in');
	$(id).attr("aria-expanded",'false');
}
function accountSettingPage () {
	$('#accountSet').click(function() {
		console.log("accountSet");
		hideDropdwonList('#headbar-ex2-collapse'); 
		hideSectionPage();
		showAccountSettingPage();
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
 		$('#user-icon').addClass('hidden');
 		$('#error-mg').removeClass('hidden');

 		console.log("showErrorMessage");
 	}
 	function hiddenErrorMessage(){
 		$('#user-icon').removeClass('hidden');
 		$('#error-mg').addClass('hidden');
		
 		console.log("hideErrorMessage");
 	}
 	function diplayUserinfo(){
 		$('#login-nav').addClass('hidden');
 		$('#user-account h5').text(request_opion.firstname);
 		$('#logged-btn').removeClass('hidden');
 		$('#logged-btn').click(function(event){
 			event.stopPropagation();
 			showDropdownList('#headbar-ex2-collapse');
 		});
 		$(document).click( function(){
        	hideDropdwonList('#headbar-ex2-collapse');
    	});
 
 		accountSettingPage();

 		
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
 		userId='yeanshi.teoh2222new@syncoms.com';
 		password='123';
 		if(!(emailRegexp.test(userId))){
 			showErrorMessage();
 		} 
 		else {
 			request_opion.useremail =userId;
 			request_opion.userpassword = password;

 			$('#splashSpinnerLogin').removeClass('hidden');

 			var request = request_S_server(request_path.login,request_opion)
 			request.done(function(data){
 				if(data && data.customer){
	 				var response = JSON.parse(data.customer);
	 				console.log(response);
	 				request_opion.firstname = response.FirstName;
	 				request_opion.lastname = response.LastName;
	 				$('#splashSpinnerLogin').addClass('hidden');
	 				hiddenLogin();
	 				diplayUserinfo();
 				}
 				else if(data && data.Exception){
 					showErrorMessage(data.Exception);
 				}

 				
 			});
 			request.fail(function(data){
 				showErrorMessage(data);
 				$('#splashSpinnerLogin').addClass('hidden');
 			});


 		}
 		//console.log("id",response);
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


 function displayProductPages(path, ProductName) {
 	hideProductPages();

	var product={"productList": ProductName }
	console.log(product);
	var template;
	template = Handlebars.compile($('#productMobileTemplate').html()); 
	$('#product-list').append(template(product));
	if(path.length>0) {
		document.getElementById("first_path").innerHTML=" Products  > ";
		document.getElementById("second_path").innerHTML= path[0];
		document.getElementById("iproudct-title").innerHTML="<h3>"+ path[0]+ "</h3>";
	}

	$('.customer-star').addClass('hide');
	if(ProductName.length>0){
		var new_url = request_path.product+ProductName[0].pageGroupId;
		console.log(new_url);
		var request = request_server(new_url,request_opion);
				request.done(function(data) {
					console.log("done:", data);
					if(data && data.products){
						var response = JSON.parse(data.products);
						console.log("---------------------");
						console.log(response);
					}
				});
		}

}
function hideProductPages(){
	$('#product-list').children("div").remove();
}
function displayMoreDetailofProductPages(ProductName){
	//Example to choose
	var template;
	template = Handlebars.compile($('#moreInfoMobileTemplate').html()); 
	$('#product-list').append(template(ProductName));
	//TODO : test
	product.push(ProductName);
	//$('#lastPath').text(product[product.length-1]);
	$('#lastPath').text("Leather Cover Book");
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

function show404ErrorPage () {
	precompleTemplate('#mobile-product','#404ErrorMobileTemplate',null);
}	
function showAccountSettingPage() {
	precompleTemplate('#mobile-product' ,'#accountSettingMobileTemplate', null);
}