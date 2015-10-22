var printerpixMos = printerpixMos ||{};
 
var product=[];
var listProduct=[];
var appId ='printerpixmos';
var request_opion={
	token:'',
	useremail:'',
	userpassword:'',
	firstname:'',
	lastname:'',
	newsletter: '',
	newsletter:'',
	pageGroupTypeId:'',
	pageGroupId:''
}

var request_path ={
	init:'/account/applogin',
	login:'/account/userlogin',
	register:'/account/Register/',
	forgetpassword:'/account/ForgotPassword?email=',
	pageGroupTypes:'/PlatinumProduct/PageGroupTypes',
	subPageGroupe:'/PlatinumProduct/PageGroups?pageGroupTypeId=',
	product:'/PlatinumProduct/products/?pageGroupId=',

}


var urlRe = /([A-Za-z][A-Za-z0-9\+\.\-]*:\/\/([A-Za-z0-9\.\-_~:/\?#\[\]@!\$&''\(\)\*\+,;=]|%[A-Fa-f0-9]{2})+)|(\s|^)[^\s@\:]+\.(com|net|ru|org|de|uk|jp|br|pl|info|cn|fr|it|in|nl|au|biz|es|ir|eu|ro|lv)(?:(?=\s+)|$|\/(([\w.]*@(\w|.)*)*\w*))+/g;
var emailRegexp = /(\s|^)[a-z0-9._%+-\/]+@[a-z0-9.-]+\.[a-z]{2,4}(\s|$)/i;



function request_S_server(path, option) {
	var headers=[];
	var response;
	headers = {"appId":appId};;
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
}
function request_server ( path, option) {
	var headers=[];
	var response;
	headers = {"appId":appId};
	headers["token"] = option.token;
	headers["useremail"]=option.useremail;
	headers["userpassword"]=option.userpassword;

	console.log(headers);
	

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

 

}

 
 
$(document).ready(function () {
	var template;

 
	//
  	printerpixMos.main.init();
  	printerpixMos.main.rendorInitPage();
 
 
	
	//TEST codes;
	//showCartPage();
	//printerpixMos.cart.showCartPage();
});

