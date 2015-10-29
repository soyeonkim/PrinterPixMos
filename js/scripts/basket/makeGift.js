var printerpixMos = printerpixMos ||{};


printerpixMos.makeGift = {

	init: function() {
		console.log("init");
	},
	displayMakeGiftPage: function () {
		var that =this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#makeGiftheaderMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#main-container','#makeGiftMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#mobile-product','#CountinueMobileTemplate',null);	
		printerpixMos.common.initSide('#gift-card-slider',1,'#prev_card','#next_card');

		$('#procedure').click(function(){
			that.procedure();
		});
		$('#cancel-btn').click(function() {
			that.cancelOption();
		});
	},
	hideMakeGiftPage :function () {
		$('#top-header-bar').children("div").remove();
		$('#main-container').children("div").remove();
		$('#mobile-product').children("div").remove();

	},
	procedure : function() {
		var that =this;
		that.hideMakeGiftPage();
		printerpixMos.giftList.displayGiftItemList();

	},
	cancelOption: function() {
		var that = this;
		that.hideMakeGiftPage();
		printerpixMos.cart.showCartPage();
		console.log('click cancel');
	}

};