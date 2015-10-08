requirejs.config({
	paths: {
    app: 'app/js',
		libs: "./libs",
		jquery:  "../libs/jquery",
    underscore:"../libs/underscore",
    backbone: "../libs/backbone",
    handlebars: "../libs/handlebars-v4.0.2"
	},
    shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    }
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

