define(function(require) {

  // Dependencies
  var $ = require('jquery'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars');


    var headerCallerView = Backbone.View.extend({

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

    return headerCallerView;

});