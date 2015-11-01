var printerpixMos = printerpixMos ||{};

printerpixMos.giftList = {
	init: function() {
		console.log("init");

	},
	rename: function() {
		$('#procedure').text(' Save Gift Options an Continue >');
		$('#cancel-btn').text('Back');
	},
	displayGiftItemList: function () {
		printerpixMos.common.precompleTemplate('#top-header-bar','#GiftItemsheaderMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#main-container','#GiftItemsMobileTemplate',GiftpOptionData);
		printerpixMos.common.precompleTemplate('#main-container','#CountinueMobileTemplate',null);
		this.rename();
	},
	hideGiftItemList:function() {
		$('#top-header-bar').children("div").remove();
		$('#main-container').children("div").remove();
		$('#main-container').children("div").remove();
	}

};