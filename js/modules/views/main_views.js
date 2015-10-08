define([
    "jquery",
    "underscore",
    "backbone",
    "handlebars"
  ], function($, _, Backbone, Handlebars){

    var Main_View = Backbone.View.extend({

      initialize:function() {
       // this.template = JST[headerCallTemplate.tmpl];
        console.log("initial main view");
      },
      render: function(){
        console.log("render");
        var template = Handlebars.compile($('#headerCallTemplate').html());
        this.$el.html(template);
        return this;
      }

    });

    return Main_View;

});