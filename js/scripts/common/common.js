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
	// body...
};