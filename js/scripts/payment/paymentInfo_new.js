var printerpixMos = printerpixMos ||{};

printerpixMos.paymentInfoNew = {

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
	displayPaymentNewUser: function () {
		var that = this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		that.renameHeader(' Payment Info ');

		printerpixMos.common.precompleTemplate('#nav-memu-bar','#NewUserAddBillingAddrMobileTemplate',null);	

		printerpixMos.common.precompleTemplate('#main-container','#addNewCardInfoMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#main-container','#payPalUserInfoMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#main-container','#CountinueMobileTemplate',null);
		that.renameButton('Continue >', 'Back');
		$('#procedure').click(function(){
			that.hidePaymentNewUser();
			that.displayPaymentlistPage();
		});
		$('#cancel-btn').click(function(){
			that.hidePaymentNewUser();
			that.displayPaymentlistPage();
		});

	},
	hidePaymentNewUser:function() {
		$('#top-header-bar').children("div").remove();
		$('#nav-memu-bar').children("div").remove();
		$('#main-container').children("div").remove();
	},
	displayPaymentlistPage: function () {
		printerpixMos.paymentInfoExist.displayPaymentExistingUser();

	},


};