var printerpixMos = printerpixMos ||{};

printerpixMos.paymentConfirm = {

	init:function(){

	},
	renameHeader: function(newText) {
		$('.cart-title').text(newText);
		$('.back-btn-arrow').addClass('hidden');
	},
	renameButton: function(newText, newText2){
		$('#procedure').text(newText);
		$('#cancel-btn').text(newText2);

	},
	displayPaymentConfirmation: function () {
		var that = this;
		printerpixMos.common.precompleTemplate('#top-header-bar','#titleHeaderMobileTemplate',null);
		that.renameHeader(' Place Your Order ');

		//footer-mobile-about
		/*
		      <div id="footer-social"></div>
      <div id="footer-flag"></div>
      <div id="footer-pd-list"></div>
      <div id="footer-register"></div>
      */
		printerpixMos.common.precompleTemplate('#footer-mobile-about','#paymentConfirmBtnHeaderMobileTemplate',null);
		printerpixMos.common.precompleTemplate('#footer-mobile-about','#paymentConfirmSummaryMobileTemplate',null);
		//printerpixMos.common.precompleTemplate('#footer-mobile-about','#paymentConfirmSummaryMobileTemplate',null);
		

		//printerpixMos.common.precompleTemplate('#main-container','#CountinueMobileTemplate',null);

		that.renameButton('Confirm and Purchase >', 'Cancel and continue shopping');
	},

};