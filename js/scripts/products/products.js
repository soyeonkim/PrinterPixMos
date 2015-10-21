var printerpixMos = printerpixMos ||{};

printerpixMos.products = {
	ProductSubmenu:[],

	init: function() {
		console.log("init");
	},
	displayProductPages : function(path,  ProductName) {
		var that = this;
		that.ProductSubmenu={"productList": ProductName }
		that.hideProductPages();

		
		//console.log(product);
		//var template;
		printerpixMos.common.precompleTemplate('#product-list','#productMobileTemplate',that.ProductSubmenu);
		//template = Handlebars.compile($('#productMobileTemplate').html()); 
		//$('#product-list').append(template(product));
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
				var new_url = request_path.product+this.id;
				path.push(this.childNodes[9].firstChild.nodeValue);
				if (e.stopPropagation) e.stopPropagation();
				console.log("----");
				that.displaySubmenuProducts(path,this.id);
				/*var request = request_server(new_url,request_opion);

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
				}); */
			});
		}

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
