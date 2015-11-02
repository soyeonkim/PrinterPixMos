var printerpixMos = printerpixMos ||{};

printerpixMos.paymentInfoExist = {
	init: function() {
		console.log("init");
	},
	renameHeader: function(newText) {
		$('.cart-title').text(newText);
		$('.back-btn-arrow').addClass('hidden');
	},
	renameButton: function(newText, newText2){
		$('#procedure').text(newText);
		$('#cancel-btn').text(newText2);

	},
	displayPaymentExistingUser: function () {
		var that = this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		that.renameHeader(' Payment Info ');
		
		printerpixMos.common.precompleTemplate('#nav-memu-bar','#paymentExistingUserMobileTemplate',null);	
		printerpixMos.common.precompleTemplate('#main-container','#payPalUserInfoMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#main-container','#CountinueMobileTemplate',null);
		that.renameButton('Continue >', 'Back');
		$('#addNewCard-btn').click(function(){
			that.hidePaymentExistingUser();
			that.loadNewPaymentInfoPage();
		});
		$('#procedure').click (function(){
			that.hidePaymentExistingUser();
			that.loadPaymentConfirmationPage();
		});
	},
	hidePaymentExistingUser: function() {
		$('#top-header-bar').children("div").remove();
		$('#nav-memu-bar').children("div").remove();
		$('#main-container').children("div").remove();

	},
	loadNewPaymentInfoPage: function() {
		printerpixMos.paymentInfoNew.displayPaymentNewUser();

	},
	loadPaymentConfirmationPage:function() {
		printerpixMos.paymentConfirm.displayPaymentConfirmation();
	}

};