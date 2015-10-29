var printerpixMos = printerpixMos ||{};

printerpixMos.deliveryAddr = {

	deliveryAddrList:[],

	init:function(){

	},
	renameHeader: function() {
		$('.cart-title').text(' Delivery Address ');
	},
	displayDeliverAddrPage:function () {
		var that = this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		
		if(that.checkActiveAddr){
			printerpixMos.common.precompleTemplate('#nav-memu-bar','#deliverAddressActiveMobileTemplate',null);	
			that.displayActiveAddr();
		}
		else {
			that.addNewAddr();
		}
		
		that.deliveryAddrList = that.checkHistoryAddr();
		if(that.deliveryAddrList.length >0 )
			printerpixMos.common.precompleTemplate('#main-container','#deliverAddressListMobileTemplate',that.deliveryAddrList);
		
		that.renameHeader();

		$('#backto').click(function(){
			that.cancelDeliveryAddr();
		});

	},
	hideDeliverAddrPage:function() {
		$('#top-header-bar').children("div").remove();
		$('#nav-memu-bar').children("div").remove();
		//$('#main-container').children("div").remove();
	},
	checkHistoryAddr:function() {
		//TODO: import data later.
		return this.deliveryAddrList;
	},
	checkActiveAddr: function () {

	},
	displayActiveAddr:function(){

	},
	deliverToThisAddr: function() {

	},
	cancelDeliveryAddr: function() {
		this.hideDeliverAddrPage();
		//show cart page
		printerpixMos.cart.showCartPage();
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