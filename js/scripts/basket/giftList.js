var printerpixMos = printerpixMos ||{};

printerpixMos.giftList = {
	GiftOptionList:[],
	ActiveGiftOption:null,

	init: function() {
		console.log("init");
		this.GiftOptionList = GiftpOptionData;

	},
	rename: function() {
		$('#procedure').text(' Save Gift Options an Continue >');
		$('#cancel-btn').text('Back');
	},
	displayGiftItemList: function () {
		var that = this;
		if(!that.GiftOptionList.CartItems){
			that.init();
		}
		printerpixMos.common.precompleTemplate('#top-header-bar','#GiftItemsheaderMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#main-container','#GiftItemsMobileTemplate',that.GiftOptionList);
		printerpixMos.common.precompleTemplate('#main-container','#CountinueMobileTemplate',null);
		this.rename();
		that.displayGiftOptions(that.GiftOptionList);

		$('#procedure').click(function(){
			alert('TODO :payment info page');
		})
	},
	hideGiftItemList:function() {
		$('#top-header-bar').children("div").remove();
		$('#main-container').children("div").remove();
		$('#main-container').children("div").remove();
	},
	displayGiftOptions: function(data){
		var that = this;
		var item_length = data.CartItems.length;
		for (var i=0; i<item_length; i++) {
			if(data.CartItems[i].GiftOption.Flat>0){
				$('#apply_'+data.CartItems[i].OrderProductDetailsId).removeClass('hidden');
				$('#added_'+data.CartItems[i].OrderProductDetailsId).removeClass('hidden');
				$('#gift_'+data.CartItems[i].OrderProductDetailsId).addClass('hidden');	
				
			}
			else {
				$('#apply_'+data.CartItems[i].OrderProductDetailsId).addClass('hidden');
				$('#added_'+data.CartItems[i].OrderProductDetailsId).addClass('hidden');
				$('#gift_'+data.CartItems[i].OrderProductDetailsId).removeClass('hidden');
			}
			$('#gift_'+data.CartItems[i].OrderProductDetailsId).click(function(e){
				//ActiveGiftOption
				
				that.getObjetctbyID(this.id.slice(5));
				console.log(that.ActiveGiftOption);
				that.hideGiftItemList();
				printerpixMos.makeGift.init(that.ActiveGiftOption);
				printerpixMos.makeGift.displayMakeGiftPage();
			});

		}

	},
	getObjetctbyID: function(id){
		var that = this;
		var item_length = that.GiftOptionList.CartItems.length;
		for (var i=0; i<item_length; i++){
			if(that.GiftOptionList.CartItems[i].OrderProductDetailsId == id){
				that.ActiveGiftOption = that.GiftOptionList.CartItems[i];
			}
		}

	},


};