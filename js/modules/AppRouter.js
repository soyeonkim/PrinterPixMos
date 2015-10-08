define(function(require) {

	// Dependencies
	var $ = require('jquery'),
		Backbone = require('backbone');
		
	// Create router.  We're assuming you aren't doing anything nuts, thus a single router
	// for the whole site is suffient
	var AppRouter = Backbone.Router.extend({

		initialize:function(app) {
			this.app = app;
	        var that = this;
	        console.log("initial router", app);
		},


		// Define routes
		routes: {
			"": "startApp",

		},
 
		startApp: function() {
			this.app.view.headerCallerView.render();
			this.app.view.headerNavView.render();

		} // The home page
	});
	
	// Listen for history changes
	Backbone.history.start({
		pushState: true,
		silent: true // This assumes that the server is handling the initial route and rendering your deep link
 	});
	
	// Return the router for triggering links
	return AppRouter;

});