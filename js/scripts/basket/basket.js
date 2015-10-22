var printerpixMos = printerpixMos ||{};

printerpixMos.cart = {
	productList:[],
	init: function() {
		console.log("init");
	},

	showCartPage: function(){
		var that = this;
		printerpixMos.main.hideHeaderPage();
		printerpixMos.main.hideNavProductPage();
		printerpixMos.main.hideSectionPage();
		printerpixMos.products.hideProductPages();
		printerpixMos.main.hideFooterPage();
		printerpixMos.login.hideLoginPage();
		that.displayCartPage();
		$('#backto').click(function(){
			that.hideCartPage();
			printerpixMos.main.displayHeaderPage();
			that.productList = printerpixMos.common.getLocalStorageObject('productList');
			printerpixMos.main.displayNavProductPage(that.productList);
			printerpixMos.main.displaySectionPage();
			printerpixMos.main.displayFooterPage();
		});
	},
	displayCartPage: function(data) {
		var template;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#baskettopMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#basketListMobileTemplate',null);


	},
	hideCartPage: function () {
		$('#top-header-bar').children("div").remove();
		$('#nav-memu-bar').children("div").remove();
		$('#best-seller').children("div").remove();
	},


};