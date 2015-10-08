define(function(require) {

  // Dependencies
  var $ = require('jquery'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars');


    var loginPageView = Backbone.View.extend({
      template: "loginMobileTemplate",
      el:'#login-container',

      initialize:function() {
       // this.template = JST[headerCallTemplate.tmpl];
        console.log("initial main view");
      },
      render: function(){
        console.log("render");
        this.template = Handlebars.compile($(this.template).html());

        this.$el.html(template);
        return this;
      }

    });

    return loginPageView;

});