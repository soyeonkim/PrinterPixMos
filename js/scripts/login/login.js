var printerpixMos = printerpixMos ||{};

printerpixMos.login = {

	request:null,
	response:null,

	init: function() {
		console.log("init");
	},
	showLoginPage: function () {
		var that =this;
		$(window).bind('hashchange', function(){
 			console.log("onhashchange");
	 	});
	 	console.log("showLoginPage");

	 	function diplayUserinfo(){
	 		$('#login-nav').addClass('hidden');
	 		$('#user-account h5').text(printerpixMos.config.request_opion.firstname);
	 		$('#logged-btn').removeClass('hidden');
	 		$('#logged-btn').click(function(event){
	 			event.stopPropagation();
	 			printerpixMos.common.showDropdownList('#headbar-ex2-collapse');
	 		});
	 		$(document).click( function(){
	        	printerpixMos.common.hideDropdwonList('#headbar-ex2-collapse');
	    	});
	 
	 		that.accountSettingPage();

	 		
	 	}
	 	if($('#login-container').hasClass('hidden')) that.displayLogin();
	 	else that.hiddenLogin();
	 
	 	$('#forgetPassword').click(function(){
	 		that.showforgetPasswordPage();
	 	});

	 	$('#newRegister').click(function(){
	 		that.showRegisterPage();
	 	});

	 	$('#login-btn').click(function() {
	 		var userId =  $("#username").val();
	 		var password =  $("#password").val();
	 		var response;

	 		//Test id, password : //TODO: delete later
	 		userId='yeanshi.teoh2222new@syncoms.com';
	 		password='123';
	 		if(!(printerpixMos.config.emailRegexp.test(userId))){
	 			that.showErrorMessage();
	 		} 
	 		else {
	 			printerpixMos.config.request_opion.useremail =userId;
	 			printerpixMos.config.request_opion.userpassword = password;

	 			$('#splashSpinnerLogin').removeClass('hidden');
	 			console.log(printerpixMos.config.request_opion);
	 			request = printerpixMos.config.request_S_server(printerpixMos.config.request_path.login,printerpixMos.config.request_opion);
	 			request.done(function(data){
	 				if(data && data.customer){
		 				var response = JSON.parse(data.customer);
		 				console.log(response);
		 				printerpixMos.config.request_opion.firstname = response.FirstName;
		 				printerpixMos.config.request_opion.lastname = response.LastName;
		 				$('#splashSpinnerLogin').addClass('hidden');
		 				that.hiddenLogin();
		 				diplayUserinfo();
	 				}
	 				else if(data && data.Exception){
	 					that.showErrorMessage(data.Exception);
	 				}

	 				
	 			});
	 			request.fail(function(data){
	 				that.showErrorMessage(data);
	 				$('#splashSpinnerLogin').addClass('hidden');
	 			});


	 		}
	 		//console.log("id",response);
	 	});
	},
	hideLoginPage:function() {
		$('#login-container').children("div").remove();
	},
	showforgetPasswordPage: function (){
		var that =this;
		that.hideLoginPage();
	 	printerpixMos.common.precompleTemplate('#login-container' ,'#forgotPasswordMobileTemplate', null);
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
			if(!(printerpixMos.config.emailRegexp.test(userId))){
				console.log(userId);
				that.showErrorMessage();
			}
	 		else {
	 			console.log("start");
	 			printerpixMos.config.request_path.forgetpassword+=userId;
	 			$('#splashSpinnerFoget').removeClass('hidden');
				request = printerpixMos.config.request_S_server(printerpixMos.config.request_path.forgetpassword, printerpixMos.config.request_opion);
				request.done(function(data){
					//var response = JSON.parse(data.customer);
	 				console.log(data.responseText);
	 				$('#splashSpinnerFoget').addClass('hidden');
				});
				request.fail(function(data){
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
	 							that.hideforgetPasswordPag();
	 						});
	 					}
	 				}
	 				$('#splashSpinnerFoget').addClass('hidden');
	 			});

			}

		});
	 },

	hideforgetPasswordPag: function () {
		this.hideLoginPage();
		//$('#login-container').children("div").remove();
		printerpixMos.common.precompleTemplate('#login-container' ,'#loginMobileTemplate', null);
		$('#login-container').addClass('hidden');
		this.showLoginPage();
	 },
	
	showRegisterPage: function (){
		var that =this;
	 	var input_val;
	 	console.log("showRegisterPage");
	 	that.hideLoginPage();
	 	//$('#login-container').children("div").remove();
	 	printerpixMos.common.precompleTemplate('#login-container' ,'#registerMobileTemplate', null);

	 	//var template = Handlebars.compile($('#registerMobileTemplate').html()); 
		//$('#login-container').append(template(Mobildata));
		window.onhashchange = function() {
			that.hideLoginPage();
			printerpixMos.common.precompleTemplate('#login-container' ,'#loginMobileTemplate', null);

/*			$('#login-container').children("div").remove();
			template = Handlebars.compile($('#loginMobileTemplate').html()); 
			$('#login-container').append(template(Mobildata));
*/		}
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
				printerpixMos.config.request_opion.firstname = input_val;
			}
			input_val =  $("#lastname").val();
			if(!(input_val) || (input_val ==default_l_name)){
				$('#invaild-reg-lname').removeClass('hidden');
				
			}
			else {
				$('#invaild-reg-lname').addClass('hidden');
				b_lastname=true;
				printerpixMos.config.request_opion.lastname = input_val;
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
					printerpixMos.config.request_opion.useremail = input_val;
					printerpixMos.config.request_opion.userpassword = reg_password;
					$('#splashSpinnerReg').removeClass('hidden');
					

					request = printerpixMos.config.request_S_server(printerpixMos.config.request_path.register,printerpixMos.config.request_opion);

					request.done(function(data){
						console.log(data);
						if(data.Exception) {

						}
						else {
							hideRegisterPage();
						}
						$('#splashSpinnerReg').addClass('hidden');
					});
					request.fail(function(data){
						console.log(data);
						$('#splashSpinnerReg').addClass('hidden');

					});

				}

			}

		});
	 },
	hideRegisterPage: function () {
		$('#login-container').children("div").remove();
		this.showLoginPage();
	},
	hideAllpages:function() {
		this.hideLoginPage();
		this.hideAccountSettingPage();
	},
	showAccountSettingPage: function () {
		printerpixMos.common.precompleTemplate('#main-container' ,'#accountSettingMobileTemplate', null);
	},
	hideAccountSettingPage:function(){
		$('#main-container').children("div").remove();
	},
	accountSettingPage: function  () {
		$('#accountSet').click(function() {
			var that = this;
			console.log("accountSet");
			printerpixMos.common.hideDropdwonList('#headbar-ex2-collapse'); 
			printerpixMos.main.hideSectionPage();
			that.showAccountSettingPage();
		});

	},

	displayLogin:	function () {
		$('#login-container').removeClass('hidden');
		$('#promotion-slider-bar').addClass('hidden');
		$('#next_banner').addClass('no-background');
		$('#next_banner').addClass('hidden');
		$('#best-seller').addClass('hidden');
	},

	hiddenLogin:function (){
	 	$('#login-container').addClass('hidden');
		$('#promotion-slider-bar').removeClass('hidden');
		$('#next_banner').removeClass('no-background');
		$('#next_banner').removeClass('hidden');
		$('#best-seller').removeClass('hidden');	
	},

 	showErrorMessage:function () {
	 	$('#user-icon').addClass('hidden');
	 	$('#error-mg').removeClass('hidden');

		console.log("showErrorMessage");
	},
	hiddenErrorMessage : function (){
	 	$('#user-icon').removeClass('hidden');
	 	$('#error-mg').addClass('hidden');
			
	 	console.log("hideErrorMessage");
	},


};