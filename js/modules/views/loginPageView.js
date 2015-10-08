define(function(require) {

  // Dependencies
  var $ = require('jquery'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars');


    var loginPageView = Backbone.View.extend({

      initialize:function() {
       // this.template = JST[headerCallTemplate.tmpl];
        console.log("initial main view");
      },
      render: function(){
        console.log("render");
        var template = Handlebars.compile($('#loginMobileTemplate').html());
        this.$el.html(template);
        return this;
      }

    });

    return loginPageView;

});