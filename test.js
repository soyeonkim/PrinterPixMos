
 

(function() {

 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
    var app="http://staging.api.printerpix.co.uk/api/account/applogin"
$.getJSON( app, {
  //appId:"printerpixmos_v1.0",
  //format:"json"

})
.done( function(data){
  console.log("done",data);
})
}


)();
 