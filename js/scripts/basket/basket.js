var printerpixMos = printerpixMos ||{};

printerpixMos.cart = {
	productList:[],
	giftOption:false,

	init: function() {
		console.log("init");
	},

	showCartPage: function(){
		var that = this;
		printerpixMos.main.hideAllpages();
		printerpixMos.products.hideAllpages();
		printerpixMos.login.hideAllpages();
		that.displayCartPage();

		$('#backto').click(function(){
			that.hideCartPage();

			printerpixMos.main.displayHeaderPage();
			that.productList = printerpixMos.common.getLocalStorageObject('productList');
			printerpixMos.main.displayNavProductPage(that.productList);
			printerpixMos.main.displaySectionPage();
			printerpixMos.main.displayFooterPage();
		});

		$('#checkout1,#checkout2').click(function(){
			if($('.check-option').is(':checked')) {
				that.giftOption = true;
			} 
			else {
				that.giftOption = false;
			}
			that.procedureDelivery();

		});		

	},
	displayCartPage: function(data) {
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#baskettopMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#basketListMobileTemplate',null);

	},
	hideCartPage: function () {
		$('#top-header-bar').children("div").remove();
		$('#nav-memu-bar').children("div").remove();
		$('#best-seller').children("div").remove();
	},
	procedureGiftOption: function() {
		var that = this;
		
		//console.log('click button');
		that.procedureDelivery();

	},
	procedureDelivery: function() {
		var that = this;
		//console.log('click button');
		//that.giftOption = false;
		that.hideCartPage();
		//display delivery page.
		printerpixMos.deliveryAddr.displayDeliverAddrPage();
	}

};