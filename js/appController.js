define(function (require) {
	var $ = require("jquery");
	var Backbone = require("backbone");
	var headerCallerView = require("modules/views/headerCallerView");
	var headerNavView = require("modules/views/headerNavView");
	var AppRouter = require("modules/AppRouter");
	var loginPageView = require("modules/views/loginPageView");
	var headerCallerView = require("modules/views/main_views");

	var appController = function() {
		this.start = function() {

			this.view ={
				headerCallerView : new headerCallerView({
					el:'#caller-header-bar',
					template:'headerCallTemplate'
				}),
				headerNavView :new headerNavView({
				/*	el:'#top-header-bar',
					template:'headerNavTemplate'
					*/
				}),
				loginPageView :new loginPageView({
					el:'#login-container',
					template:'loginMobileTemplate'
				}),


			}
		this.router = new AppRouter(this);
		//this.router = new AppRouter(this);
		//Backbone.history.start();
		//this.view.headerCallerView.render();
		//this.view.headerNavView.render();
		this.router.startApp();

		}

	};

	return appController;
	
});