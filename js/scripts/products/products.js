var printerpixMos = printerpixMos ||{};

printerpixMos.products = {
	ProductSubmenu:[],

	init: function() {
		console.log("product init");
	},
	displayProductPages : function(path,  ProductName) {
		var that = this;
		that.ProductSubmenu={"productList": ProductName }
		that.hideProductPages();

		printerpixMos.common.precompleTemplate('#product-list','#productMobileTemplate',that.ProductSubmenu);

		if(path.length>0) {
			document.getElementById("first_path").innerHTML=" Products  > ";
			document.getElementById("second_path").innerHTML= path[0];
			document.getElementById("iproudct-title").innerHTML="<h3>"+ path[0]+ "</h3>";
		}
		$('.customer-star').addClass('hide');  //TODO: get customer review score from server

		// Register click events.
		for( var k = 0; k < ProductName.length ; k++){
			//console.log("register:",ProductName[k].pageGroupId);
			$('#'+ProductName[k].pageGroupId).click (function(e) {
				var new_url = printerpixMos.config.request_path.product+this.id;
				console.log(new_url);
				path.push(this.childNodes[9].firstChild.nodeValue);
				if (e.stopPropagation) e.stopPropagation();
				console.log("----");
				that.displaySubmenuProducts(path,this.id);
				var request = printerpixMos.config.request_server(new_url,printerpixMos.config.request_opion);

				request.done(function(data) {
					//console.log("done:", data);
					if(data && data.products){
						var response = JSON.parse(data.products);
						console.log("---------------------");
						console.log(response);
					}
				});
				request.fail(function() {
					show404ErrorPage();
				}); 
			});
		}

	},

	showRegisterPage: function (){
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
					request_S_server(printerpixMos.config.request_path.register,printerpixMos.config.request_opion).done(function(data){
						console.log(data);
						if(data.Exception) {

						}
						else {
							hideRegisterPage();
						}
						$('#splashSpinnerReg').addClass('hidden');
					});
					request_S_server(printerpixMos.config.request_path.register,printerpixMos.config.request_opion).fail(function(data){
						console.log(data);
						$('#splashSpinnerReg').addClass('hidden');

					});

				}

			}

		});
	 },
	hideRegisterPage:function () {
		$('#login-container').children("div").remove();
		showLoginPage();
	},
	hideProductPages : function(){
		$('#product-list').children("div").remove();
	},
	displaySubmenuProducts: function(path,pageGroupId) {
		var that = this;
		var subProduct = that.ProductSubmenu.productList;
		//find product data from id
		for(var k =0; k<subProduct.length; k++){
			if(subProduct[0].pageGroupId == pageGroupId){
				that.hideProductPages();
				that.displayMoreDetailofProductPages (path,subProduct[k]);

				break;
			}
		}

	},
	displayMoreDetailofProductPages: function (path,moreProductName){
	//Example to choose
	//var template;
	//template = Handlebars.compile($('#moreInfoMobileTemplate').html()); 
	//$('#product-list').append(template(ProductName));
		printerpixMos.common.precompleTemplate('#product-list','#moreInfoMobileTemplate',moreProductName);
		console.log("moreProductName:",moreProductName);
		//TODO : test
		//product.push(ProductName);
		//$('#lastPath').text(product[product.length-1]);
		$('#lastPath').text("Leather Cover Book");
		//$('.product-info h1').text(moreProductName.productList[1].title);
		//$('.product-info img').attr("src",moreProductName.productList[1].customerStar);
		//$('.product-info p').text(moreProductName.productList[1].details);
	},


};
