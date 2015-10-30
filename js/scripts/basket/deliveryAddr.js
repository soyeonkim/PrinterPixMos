var printerpixMos = printerpixMos ||{};

printerpixMos.deliveryAddr = {
	deliveryAddrActive:[],
	deliveryAddrList:[],
	checkActiveAddr:false,


	error_message:[],

	init:function(){

	},
	renameHeader: function(newText) {
		$('.cart-title').text(newText);
	},
	displayDeliverAddrPage:function () {
		var that = this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		
		that.checkAddrData(DeliveryData);  // TODO connect with server data.
		if(that.deliveryAddrActive && (that.deliveryAddrActive.ActiveAddr.length >0)) {
			printerpixMos.common.precompleTemplate('#nav-memu-bar','#deliverAddressActiveMobileTemplate',that.deliveryAddrActive);	
			that.displayActiveAddr();
		}
		
		//that.deliveryAddrList = that.checkHistoryAddr(DeliveryData);
		if(that.deliveryAddrList && (that.deliveryAddrList.DeliveryAddr.length >0 )) //:TODO -connect with data.
			printerpixMos.common.precompleTemplate('#main-container','#deliverAddressListMobileTemplate',that.deliveryAddrList);
		
		that.renameHeader(' Delivery Address ');

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
			that.displayAddNewAddrPage();
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
	displayAddNewAddrPage:function(){
		var that =this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#addNewAddrMobileTemplate',null);	
		printerpixMos.common.precompleTemplate('#mobile-product','#CountinueMobileTemplate',null);
		
		that.renameHeader(' Add new Address ');
		that.setErrorMessage();
		$('#procedure').text(' Add Address >');
		$('.back-btn-arrow').addClass('hide');
		$('#procedure').click(function(){
			//alert('have to save a new address');
		var new_addr_input_id=[];
		var input_empty=0;

		new_addr_input_id[0] =	'enterAddressFullName';
		new_addr_input_id[1] =	'enterAddressAddressLine1';
		new_addr_input_id[2] =	'enterAddressCity';
		new_addr_input_id[3] =	'enterAddressStateOrRegion';
		new_addr_input_id[4] =	'enterAddressPostalCode';
		new_addr_input_id[5] =	'enterAddressPhoneNumber';

		for(var i = 0; i <new_addr_input_id.length ; i++){
			if(!$('#'+new_addr_input_id[i]).val()) {
				input_empty++;
				$('.'+new_addr_input_id[i]).addClass('a-form-error');
				$('#'+new_addr_input_id[i]).attr('placeholder', that.error_message[i]);
			}
		}
		if(input_empty > 0){
			
		}
		else {
			$('#enterAddressAddressLine1').attr('placeholder')
			that.hideAddNewAddrPage();
			that.displayDeliverAddrPage();	
		}
			
 

		});
		$('#cancel-btn').click(function(){
			//alert('have to save a new address');
			that.hideAddNewAddrPage();
			that.displayDeliverAddrPage();
		});

	},
	hideAddNewAddrPage:function() {
		$('#top-header-bar').children("div").remove();
		$('#nav-memu-bar').children("div").remove();
		$('#mobile-product').children("div").remove();
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
	setErrorMessage:function() {
		this.error_message[0] = 'Please supply a name for this address.';
		this.error_message[1] = 'At least one address line must be supplied.';
		this.error_message[2] = 'Enter your City.';
		this.error_message[3] = 'You must supply a city for this address.';
		this.error_message[4] = 'Enter your Postcode.';
		this.error_message[5] = 'Enter your Phone Number.';

	}

};