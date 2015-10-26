var printerpixMos = printerpixMos ||{};

printerpixMos.config = {

	appId :'printerpixmos',
	request_opion:{
		token:'',
		useremail:'',
		userpassword:'',
		firstname:'',
		lastname:'',
		newsletter: '',
		newsletter:'',
		pageGroupTypeId:'',
		pageGroupId:''
	},

	request_path :{
		init:'/account/applogin',
		login:'/account/userlogin',
		register:'/account/Register/',
		forgetpassword:'/account/ForgotPassword?email=',
		pageGroupTypes:'/PlatinumProduct/PageGroupTypes',
		subPageGroupe:'/PlatinumProduct/PageGroups?pageGroupTypeId=',
		product:'/PlatinumProduct/products/?pageGroupId=',

	},
	urlRe : /([A-Za-z][A-Za-z0-9\+\.\-]*:\/\/([A-Za-z0-9\.\-_~:/\?#\[\]@!\$&''\(\)\*\+,;=]|%[A-Fa-f0-9]{2})+)|(\s|^)[^\s@\:]+\.(com|net|ru|org|de|uk|jp|br|pl|info|cn|fr|it|in|nl|au|biz|es|ir|eu|ro|lv)(?:(?=\s+)|$|\/(([\w.]*@(\w|.)*)*\w*))+/g,
	emailRegexp :/(\s|^)[a-z0-9._%+-\/]+@[a-z0-9.-]+\.[a-z]{2,4}(\s|$)/i,

	request_S_server:function (path, option) {
		var headers=[];
		var response;
		headers = {"appId":this.appId};;
		headers["token"] = option.token;
		headers["useremail"]=option.useremail;
		headers["userpassword"]=option.userpassword;
		headers["userFirstName"]=option.firstname;
		headers["userLastName"]=option.lastname;
		headers["newsletter"]="true";


		return $.ajax({
			type:'GET',
				url: 'https://api.printerpix.co.uk/api'+path,
				dataType:'json',
				//contentType: 'application/json',
				headers:headers,
				data:response

		});
	},
	request_server: function  ( path, option) {
		var headers=[];
		var response;
		headers = {"appId":this.appId};
		headers["token"] = option.token;
		headers["useremail"]=option.useremail;
		headers["userpassword"]=option.userpassword;

		//console.log(headers);
		
		return $.ajax({
			type:'GET',
				url: 'http://api.printerpix.co.uk/api'+path,
				//url:'http://api.printerpix.co.uk/api/account/applogin',
				//url:'http://api.printerpix.co.uk/api/PlatinumProduct/PageGroupTypes',
				dataType:'json',
				//contentType: 'application/json',
				headers:headers,
				data:response

		});
	},


};
printerpixMos.common =  {

	init:function() {
		console.log("common init");
	},

	precompleTemplate : function(id, template, data){
		var template;
		template = Handlebars.compile($(template).html()); 
		if(data) $(id).append(template(data));
		else $(id).append(template());
	},
	show404ErrorPage: function  () {
		this.precompleTemplate('#mobile-product','#404ErrorMobileTemplate',null);
	},
	showDropdownList: function (id) {
		$(id).addClass('in');
		$(id).attr("aria-expanded",'true');
	},
	hideDropdwonList:function (id) {
		$(id).removeClass('in');
		$(id).attr("aria-expanded",'false');
	},
 
	initCycle: function  (numberSlide) {
		 
		$('#slider-source').cycle({
				fx: 'fadeout',
				timeout: 0,
				speed:800,
				manualSpeed:300,
				sildes: 'div',
				pager: '#page-pager',

			});

	},
	setLocalStorageItem: function (str_id , items) {
		localStorage.setItem(str_id,items);
	},
	setLocalStorageObject: function (str_id , items) {
		localStorage.setItem(str_id,JSON.stringify(items));
	},
	gettLocalStorageItem: function (str_id , items) {
		return localStorage.getItem(str_id);
	},
	getLocalStorageObject: function (str_id) {
		return JSON.parse(localStorage.getItem(str_id));
	}
};