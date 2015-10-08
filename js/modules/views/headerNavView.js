define(function(require) {

  // Dependencies
  var $ = require('jquery'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars');


    var headerNavView = Backbone.View.extend({
     // template: "#headerNavTemplate",
     // el:'#top-header-bar',

      events :{
        "click #menu-toggle":"toggleBottomLine",
        "click .register":"showLoginPage",
      },
      initialize:function() {
       // this.template = JST[headerCallTemplate.tmpl];
        this.template = Handlebars.compile($('#headerNavTemplate').html());

        console.log("initial main view");
      },
      render: function(){
         this.$el.html(this.template);
         console.log("render");
        //var template = Handlebars.compile($('#headerNavTemplate').html());
        //this.$el.html(template);
        //template = Handlebars.compile($('#loginMobileTemplate').html()); 
        //this.$el.find('#login-container').append(template(Mobildata))
        return this;
      },
      toggleBottomLine:function(){
        this.$el.find("#menu-toggle").toggleClass('bottom-borderline');
      },
      showLoginPage:function() {
         console.log("show login");
        function displayLogin() {
            this.$el.find('#login-container').removeClass('hidden');
            this.$el.find('#promotion-slider-bar').addClass('hidden');
            this.$el.find('#next_banner').addClass('no-background');
            this.$el.find('#next_banner').addClass('hidden');
            this.$el.find('#best-seller').addClass('hidden');
          }
          function hiddenLogin(){
            $('#login-container').addClass('hidden');
            $('#promotion-slider-bar').removeClass('hidden');
            $('#next_banner').removeClass('no-background');
            $('#next_banner').removeClass('hidden');
            $('#best-seller').removeClass('hidden');  
          }
      if( this.$el.find('#login-container').hasClass('hidden')) {
       console.log("show sss");
      displayLogin();}
      else hiddenLogin();
      }

    });


    return headerNavView;

});