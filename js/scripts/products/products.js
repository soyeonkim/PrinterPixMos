var printerpixMos = printerpixMos ||{};

printerpixMos.products = {
	ProductSubmenu:[],
	Productdetailmenu:{},

	_layout:[],
	_size:[],
	SelectObject:{
		SeletProductLayout:null,
		SelectProductSize:null,
	},

	init: function() {
		console.log("product init");
		printerpixMos.common.closeAllLoginPage();
	},
	displayProductPages : function(path,  ProductName) {
		var that = this;
		that.init();
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
				that.displaySubmenuProducts(path,this.id,that.ProductSubmenu);
				var request = printerpixMos.config.request_server(new_url,printerpixMos.config.request_opion);

				request.done(function(data) {
					//console.log("done:", data);
					if(data && data.products){
						var response = JSON.parse(data.products);
						console.log("---------------------");
						console.log(data.products);
						console.log(response);
						that.displaySubmenuInformation(response);
					}
				});
				request.fail(function() {
					show404ErrorPage();
				}); 
			});
		}

	},

	hideProductPages : function(){
		$('#product-list').children("div").remove();
	},
	displaySubmenuProducts: function(path,id, subMenuObject) {
		var that = this;
		var subProduct = that.getObjectbyPageGroupId(id, subMenuObject.productList);

		//that.Productdetailmenu={"SelectProduct": subProduct };
		if(subProduct){
			that.hideProductPages();
			that.displayMoreProductPagesImage (path,subProduct);
		}

	},
	displayMoreProductPagesImage: function (path,moreProductName){
		var that = this;

		that.product_info = moreProductName;
		printerpixMos.common.precompleTemplate('#product-list','#moreInfoMobileTemplate',moreProductName);
		console.log("moreProductName:",moreProductName);

		document.getElementById('sub_path').innerHTML= path[0] +" >";
		if(path.length >1)document.getElementById('sub_last_path').innerHTML= path[1];
		else {
			document.getElementById('sub_path').style.color='#ce217e';
		}
		$('#main_thumbnav_img').attr('src',moreProductName.pageGroupBannersFullSizeUrls[0]);
		//$('.product-img-main img').attr('src',mmoreProductName.pageGroupBannersFullSizeUrls[0]);

		$("#thumbnav01").attr('src',moreProductName.pageGroupBannersThumbnailUrls[1]);
		$("#thumbnav02").attr('src',moreProductName.pageGroupBannersThumbnailUrls[2]);
		$("#thumbnav03").attr('src',moreProductName.pageGroupBannersThumbnailUrls[3]);
		$("#thumbnav04").attr('src',moreProductName.pageGroupBannersThumbnailUrls[4]);



		function swichImage(org_src,dest){
			var img_big_loca 	= org_src.indexOf('big');
			//var img_count = org_src.slice(img_loca+3,main_img.indexOf('/', img_loca));
			var img_small_loca 	= dest.src.indexOf('small');
			var img_big_org		= org_src.slice(img_big_loca,org_src.indexOf('/',img_big_loca));
			var img_small_org	= dest.src.slice(img_small_loca, dest.src.indexOf('/',img_small_loca));

			var img_big_new	= 'big'+dest.src.slice(img_small_loca+5, dest.src.indexOf('/',img_small_loca));
			var img_small_new  = 'small'+org_src.slice(img_big_loca+3,org_src.indexOf('/',img_big_loca));
			
			$('#main_thumbnav_img').attr('src', org_src.replace(img_big_org,img_big_new));
			dest.src=dest.src.replace(img_small_org,img_small_new);
	
			console.log("swichImage");
		}

		for(var k = 1; k <5 ; k ++){
			$('#thumbnav0'+k).click(function(e){
				swichImage($('#main_thumbnav_img').attr('src'),this);
			});
		}

	},
	displaySubmenuInformation: function(subMenuObject){
		var that = this;
		//var layout=[];
		//var size =[];
		var text;
		//that.Productdetailmenu = subMenuObject;
		that._layout = that.setLayoutbyObject(subMenuObject,that.Productdetailmenu);

		if(that._layout.length > 0){
			for(var i = 0; i < that._layout.length ; i++ ){
				var temp  = that.getSizebyLayout(that._layout[i],subMenuObject);
				if(temp) {
					that._size[i]= temp;
				}
				$('#layout').append('<li id="layout'+i+'">'+that._layout[i]+'</li>');
				$('#layout'+i).click(function(e){
					if (e.stopPropagation) e.stopPropagation();
					text=$(this).text();
					document.getElementById('option1').innerHTML=text;
					that.displaySizebyLayout(this.id.slice(6));

					if(that.SelectObject.SeletProductLayout != text){
						document.getElementById('option2').innerHTML='Select Size';
						console.log("1:"+that.SelectObject.SeletProductLayout+" / "+ text);
					}
					else if(that.SelectObject.SelectProductSize != undefined) {
						document.getElementById('option2').innerHTML= that.SelectObject.SelectProductSize;
					}

					that.SelectObject.SeletProductLayout=text;
					console.log("2:"+that.SelectObject.SeletProductLayout+" / "+ text);
					that.hideProductDetailList();
				});
			}
			// Products have mutiple layout
			if(that._layout.length > 2){  
				var i = 0;
				for(var j = 0 ; j < that._size.length ; j++){
					for(var k = 0; k < that._size[j].length ; k++){
						$('#sizeDescrtipon2').append('<li id="size'+i+'">'+that._size[j][k]+'</li>');
						//console.log('id: ',(i));
						$('#size'+(i)).click(function(){
							text = $(this).text();		
							var count = that.getLayoutbySize(text,that._size);
					 		document.getElementById('option1').innerHTML=that._layout[count];
					 		document.getElementById('option2').innerHTML=text;
					 		$('#sizeDescrtipon2 li').remove();	
					 		that.displaySizebyLayout(count);
					 		that.SelectObject.SeletProductLayout=that._layout[count];
					 		that.SelectObject.SelectProductSize=text;
					 		console.log(that.SelectObject.SelectProductSize+" / "+that.SelectObject.SeletProductLayout);
					 		that.hideProductDetailList();
					 		//option-btn
						});
						i++;
					}
				}
				$('.option0').addClass('hide');
				$('.option1').removeClass('hide');
				$('.option2').removeClass('hide');
			}
			else {
				// Products have only one layout
				for(var j = 0 ; j < that._size.length ; j++){
					for(var k = 0; k < that._size[j].length ; k++){
						$('#sizeDescrtipon').append('<li id="size'+(j*k+k)+'">'+that._size[j][k]+'</li>');
						$('#size'+(j*k+k)).click(function(e){
							if (e.stopPropagation) e.stopPropagation();
							text = $(this).text();							
					 		that.SelectProductSize=text;
					 		console.log(that.SelectProductSize);
					 		document.getElementById('option0').innerHTML=text;

					 		that.hideProductDetailList();
						});
					}

				}
				$('.option0').removeClass('hide');
				$('.option1').addClass('hide');
				$('.option2').addClass('hide');

				
			}
			//$("#option1").text(layout[0]);
		}
		else {

		}

	},
	
	hideProductDetailList: function () {
		$('.select-option').removeClass('open');
		$('option-btn').attr("aria-expanded",'false');
		//option-btn
	},
	displaySizebyLayout: function(count) {
		var that = this;
		var size = that._size[count];

		$('#sizeDescrtipon2 li').remove();
		for (var j = 0; j<size.length; j++) {
			$('#sizeDescrtipon2').append('<li id="size'+(j)+'">'+size[j]+'</li>');
			$('#size'+(j)).click(function(e){
			if (e.stopPropagation) e.stopPropagation();
				text = $(this).text();							
		 		that.SelectObject.SelectProductSize=text;
		 		document.getElementById('option2').innerHTML=text;
		 		that.hideProductDetailList();

			});
		}
	},
	hideAllpages:function() {
		this.hideProductPages();
	},

	getObjectbyPageGroupId: function(id,objects){
		var length = objects.length;
		for(var k = 0 ;k <length; k++ ){
			if(id == objects[k].pageGroupId){
				return objects[k];
			}
		}
		return false;

	},
	setLayoutbyObject: function (objects){
		var _layout=[];
		var _length = objects.length;
		var i,j;
		//console.log(objects[0].layout);
		for(j=0; j<_length; j++){
			if(_layout.indexOf(objects[j].layout) < 0) _layout.push(objects[j].layout);
		}
		return _layout;

	},
	getLayoutbySize: function(size, layoutArray ){
		var _layout;
	
		for(var j=0; j< layoutArray.length; j++){
			if(layoutArray[j].indexOf(size) >= 0) return j;
		}

		return -1;

	},
	getSizebyLayout: function(layout,objects) {

		var _length = objects.length;
		var _size=[];
		for (var i =0; i <_length; i++ ){
			if(layout == objects[i].layout ) {
				_size.push(objects[i].sizeDescription);
			}
		}
		return _size;

	},
	setObjectbySize:function (objects){
		var _size=[]
	}


};
