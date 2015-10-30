var printerpixMos = printerpixMos ||{};

printerpixMos.deliveryAddr = {
	deliveryAddrActive:[],
	deliveryAddrList:[],
	checkActiveAddr:false,

	init:function(){

	},
	renameHeader: function() {
		$('.cart-title').text(' Delivery Address ');
	},
	displayDeliverAddrPage:function () {
		var that = this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		
		that.checkAddrData(DeliveryData);  // TODO connect with server data.
		if(that.deliveryAddrActive && (that.deliveryAddrActive.ActiveAddr.length >0)) {
			printerpixMos.common.precompleTemplate('#nav-memu-bar','#deliverAddressActiveMobileTemplate',that.deliveryAddrActive);	
			that.displayActiveAddr();
		}
		else {
			that.addNewAddr();
		}
		
		//that.deliveryAddrList = that.checkHistoryAddr(DeliveryData);
		if(that.deliveryAddrList && (that.deliveryAddrList.DeliveryAddr.length >0 )) //:TODO -connect with data.
			printerpixMos.common.precompleTemplate('#main-container','#deliverAddressListMobileTemplate',that.deliveryAddrList);
		
		that.renameHeader();

		$('#backto').click(function(){
			that.backtoBasketPage();
			
		});
		$('#cancel-btn').click(function(){
			that.cancelDeliveryAddr();

		});
		$('#procedure').click(function(){
			console.log(printerpixMos.cart.giftOption);
			//checked gift option
			that.hideDeliverAddrPage();
			if(printerpixMos.cart.giftOption) printerpixMos.makeGift.displayMakeGiftPage();
			//else //TODO: go to Delivery option page.
		});
		$('#addNewAddr-btn').click(function(){
			that.hideDeliverAddrPage();

		});


	},
	hideDeliverAddrPage:function() {
		$('#top-header-bar').children("div").remove();
		$('#nav-memu-bar').children("div").remove();
		$('#main-container').children("div").remove();
	},
 
	checkAddrData: function (data) {
		var that =this;
		var defaultAddr=[];
		var historyAddr=[];
		for(var i=0; i<data.DeliveryAddr.length; i++){
			if(data.DeliveryAddr[i].IsActive){
				defaultAddr.push(data.DeliveryAddr[i]);
			}
			else {
				historyAddr.push(data.DeliveryAddr[i]);
			}
		}
		that.deliveryAddrActive ={'ActiveAddr':defaultAddr};
		that.deliveryAddrList ={'DeliveryAddr':historyAddr};
		//console.log(that.deliveryAddrActive);
		console.log(that.deliveryAddrList);
	},
	displayActiveAddr:function(){

	},
	deliverToThisAddr: function() {

	},
	backtoBasketPage:function(){
		this.hideDeliverAddrPage();
		printerpixMos.cart.showCartPage();
	},
	cancelDeliveryAddr: function() {
		this.hideDeliverAddrPage();
		printerpixMos.main.init();
  		printerpixMos.main.rendorInitPage();
		
	},
	addNewAddr: function(){

	},
	editAddr:function() {

	},
	deleteAddr: function() {

	},
	deliverToMultipleAddr: function() {

	},

};