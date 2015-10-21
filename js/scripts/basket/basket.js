var printerpixMos = printerpixMos ||{};

printerpixMos.cart = {
	init: function() {
		console.log("init");
	},

	showCartPage: function(){
		var that = this;
		hideHeaderPage();
		hideNavProductPage();
		hideSectionPage();
		hideFooterPage();
		that.displayCartPage();
		$('#backto').click(function(){
			hideCartPage();
			displayHeaderPage();
			displayNavProductPage();
			displaySectionPage();
			displayFooterPage();
		});
	},
	displayCartPage: function(data) {
		var template;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		//printerpixMos.common.precompleTemplate('#nav-memu-bar','#navFlowerMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#baskettopMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#basketListMobileTemplate',null);

	/*	template = Handlebars.compile($('#titleHeaderMobileTemplate').html()); 
		$('#top-header-bar').append(template);
		template = Handlebars.compile($('#navFlowerMobileTemplate').html());
		$('#nav-memu-bar').append(template);
		template = Handlebars.compile($('#baskettopMobileTemplate').html());
		$('#nav-memu-bar').append(template);
		template = Handlebars.compile($('#basketListMobileTemplate').html());
		$('#nav-memu-bar').append(template);
		*/

	},

};