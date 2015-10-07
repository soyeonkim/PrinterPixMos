requirejs.config({
	paths: {
		libs: "libs",
   		plugins: "libs/plugins",
		jquery: ["//cdn.jsdelivr.net/jquery/1.11.0/jquery.min", "libs/jquery"],
    	underscore: ["//cdn.jsdelivr.net/lodash/2.4.1/lodash.underscore.min", "libs/lodash"],
    	backbone: ["//cdn.jsdelivr.net/backbonejs/1.1.2/backbone-min", "libs/backbone"],
 

	}
});
requirejs([
  "jquery",
  "underscore",
  "backbone",
  "appcontroller",
  ],
  function ($,_,Backbone, AppController) {
	$(function() {
		Printerpix = new AppController();
		Printerpix.start();
	});
}); 
