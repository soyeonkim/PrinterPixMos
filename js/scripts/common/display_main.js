var printerpixMos = printerpixMos ||{};

printerpixMos.main = {

	token:null,
	request:null,
	response:null,
	listProductInfo:[],

	init: function(){
		var that = this;
		request = request_server(request_path.init,printerpixMos.config.request_opion);
		request.done(function(data){
			response = JSON.parse(data.customer);
			printerpixMos.config.request_opion.token = response.Token;
			//this.token = response.Token;
			console.log("token :", printerpixMos.config.request_opion.token);
			that.requestInfo();
		});
	},
	requestInfo : function() {
		var that = this;
		request = request_server(request_path.pageGroupTypes,printerpixMos.config.request_opion);

		request.done(function(data){
			console.log(":",data.pageGroupTypes);
			response = JSON.parse(data.pageGroupTypes);
			console.log("response:",response);
			listProductInfo={"nav": that.navListProduct(response)};
			//TODO: later change from 
			listProductInfo["nav_occasions"]= menu.nav_occasions;
			printerpixMos.common.setLocalStorageObject('productList',listProductInfo);
			that.displayNavProductPage(listProductInfo);
			that.displaySectionPage(listProductInfo);

		});
		request.fail(function (jqXHR, textStatus) {
			console.log(" fail jqXHR :",jqXHR);
			console.log(" textStatus :",textStatus);
			printerpixMos.common.show404ErrorPage();
		});
	},
	rendorInitPage:function() { 
		var that = this;
		that.displayHeaderPage();
		

		that.displayFooterPage();
	},

	displayHeaderPage: function () {
		var template;

		// header for icon+ call number -black blackground
		printerpixMos.common.precompleTemplate('#caller-header-bar','#headerCallTemplate',null);
		printerpixMos.common.precompleTemplate('#top-header-bar','#headerNavTemplate',null);
		printerpixMos.common.precompleTemplate('#login-container','#loginMobileTemplate',null);

		/*template = Handlebars.compile($('#headerCallTemplate').html()); 
		$('#caller-header-bar').append(template);
		// header for logo, login button, basket button, menu buton
		template = Handlebars.compile($('#headerNavTemplate').html()); 
		*/
		$('#top-header-bar').append(template);
		$('#login-nav').click( function() {
			printerpixMos.login.showLoginPage();
		});
		$('.basket').click( function() {
			printerpixMos.cart.showCartPage();
		});

		//template = Handlebars.compile($('#loginMobileTemplate').html()); 
		//$('#login-container').append(template(Mobildata));


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
	 			printerpixMos.common.hideDropdwonList('#headbar-ex1-collapse');
	 			$('#menu-toggle').addClass('bottom-borderline');
	 		}
	 		else {
	 			printerpixMos.common.showDropdownList('#headbar-ex1-collapse');
	 			$('#menu-toggle').removeClass('bottom-borderline');
	 		}
	 		$(document).click( function(){
	 			$('#menu-toggle').addClass('bottom-borderline');
	        	printerpixMos.common.hideDropdwonList('#headbar-ex1-collapse');
	    	});

		});


	},

	displayNavProductPage: function (ProductList) {
		var that = this;
		var prename="#nav_";
		printerpixMos.common.precompleTemplate('#product-menu-bar','#navbarTemplate',ProductList);
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
				var request = request_server(new_url,printerpixMos.config.request_opion);
				request.done(function(data) {
					//console.log("done:", data);
					if(data  && data.pageGroups) {
						//console.log("response:", data.pageGroups);
						var response = JSON.parse(data.pageGroups);
						console.log("response:", response);
						that.hideSectionPage();
						//printerpixMos.products.init();
						printerpixMos.products.displayProductPages(product, response);
						//displayProductPages(product, response);
						if($('#navbar-ex2-collapse').attr('aria-expanded') ==="true") {
	 						printerpixMos.common.hideDropdwonList('#navbar-ex2-collapse');
	 						$('#shop-pd').addClass('bottom-borderline');
	 					}
					}
					else {
						printerpixMos.common.show404ErrorPage();
					}

				});
				request.fail(function (jqXHR, textStatus) {
					console.log(" fail jqXHR :",jqXHR);
					printerpixMos.common.show404ErrorPage();
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

	},

	displaySectionPage: function () {
 
		printerpixMos.common.precompleTemplate('#promotion-slider-bar','#promoMobileTemplate',Mobildata);
		//Best seller list
		printerpixMos.common.precompleTemplate('#best-seller','#productMobileTemplate',Mobildata);
		printerpixMos.common.initCycle(2);

	},
	hideSectionPage : function () {
		$('#promotion-slider-bar').children("div").remove();
	 	$('#best-seller').children("div").remove();
	},

	displayFooterPage: function () {
		printerpixMos.common.precompleTemplate('#footer-mobile-about','#footerMobileTemplate6',footer);
		printerpixMos.common.precompleTemplate('#footer-social','#socialMobileTemplate',footer);
		printerpixMos.common.precompleTemplate('#footer-flag','#footerMobileTemplate3',footer);
		printerpixMos.common.precompleTemplate('#footer-pd-list','#footerMobileTemplate4',footer);
		printerpixMos.common.precompleTemplate('#footer-register','#footerMobileTemplate5',footer);
	 },
	
	hideHeaderPage:function (){
		$('#caller-header-bar').children("div").remove();
		$('#top-header-bar').children("div").remove();
	},
	
	hideNavProductPage : function (){
		$('#product-menu-bar').children("div").remove();
	},
	hideSectionPage: function () {
		$('#promotion-slider-bar').children("div").remove();
 		$('#best-seller').children("div").remove();
	},
	
	hideFooterPage : function (argument) {
	 	$('#footer-mobile-about').children("div").remove();
	 	$('#footer-social').children("div").remove();
	 	$('#footer-flag').children("div").remove();
	 	$('#footer-pd-list').children("div").remove();
	 	$('#footer-register').children("div").remove();
	 	
	 },
	 navListProduct:function (response){
		var tmp;
		for (var i=0; i<response.length; i++){
			tmp = response[i].name.substring(0,response[i].name.length-4);
			response[i].name = tmp;
		}
		return response;
	},
	 

 

};