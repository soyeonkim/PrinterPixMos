
var Mobildata = { 
  promotion_text_align:"right",

  // --- top banners that vertical slider shows...
  promotion_mobile: [
       { 
        id:"promo1",
        url: "http://www.printerpix.co.uk/photo-books/PhotoHardCover/", // link to go
        img_url: "./img/promotions/blue.png", 
        title:"",
        description:"Print Your Memories<br>on Photo Book", //promotion description
        text_color:"#414141",
        promo_des:"Elegance and Simplicity<br> to make your memories unique",
        button: "Personalise Now" , 
        button_color:"#cf207e",       
        customer_review:"" },     
       { 
        id:"promo2",
        url: "http://www.printerpix.co.uk/photo-mugs/", 
        img_url: "./img/promotions/green.png", 
        title:"",
        description:"<strong>Have a great start<br> of the day</strong>",
        text_color:"#414141",
        promo_des:"With a Personalised Photo Mug",
        button: "Personalise Now" ,     
        button_color:"#cf207e", 
        customer_review:"" },     
      { 
        id:"promo3",
        url: "http://www.printerpix.co.uk/photo-canvas/", 
        img_url: "./img/promotions/red.png", 
        title:"",
        description:"<strong>Never forget<br>your special days</strong>",
        text_color:"#414141",
        promo_des:"with our personalised <br>Luxury Canvas",
        button: "Personalise Now" ,  
        button_color:"#cf207e",        
        customer_review:"" },     
       { 
        id:"promo4",
        url: "http://www.printerpix.co.uk/iphone-cases/", 
        img_url: "./img/promotions/yellow.png", 
        title:"",
        description:"<strong>Your Happy Moments</strong>",
        text_color: "#414141",
        promo_des: "On a Special, Personalised,<br> Photo Phone Cover",
        button: "Personalise Now",
        button_color:"#cf207e",   
        customer_review:"" },
 
        ],
  bestSeller:[
       
      {   
        url:  "/photo-books/ValentinoWhite", 
        img_url: "./img/Themes/bestSeller/UK/Photo-Book-Valentina.jpg",
        customerStar: "./img/Themes/bestSeller/stars/star_4_5.png",
        title: "Valentina Photo book", 
        description: "Perfect for weddings, birthdays and other celebrations, this Valentina Photobook is the perfect way to"},
     { 
        url: "/montage-canvas", 
        img_url: "./img/Themes/bestSeller/UK/Montage-Canvas.jpg",
        customerStar: "./img/Themes/bestSeller/stars/star_4_5.png",
        title: "Collage Canvas",  
        description: "Record your memories in style with this fully customisable canvas. " },
 
     { 
       url: "/instagram-canvas/", 
        img_url: "./img/Themes/bestSeller/UK/Instagram_Canvas.jpg",
        customerStar:"./img/Themes/bestSeller/stars/star_4_5.png",
        title: "Instagram Canvas",  
        description: "Perfect for publishing your favourite Instagram photos, this sturdy square canvas is a great way to decorate your home or office." },
        
       { 
        url: "/metal-prints/", 
        img_url: "./img/Themes/bestSeller/UK/Metal-Print.jpg", 
        customerStar:"./img/Themes/bestSeller/stars/no_star.png",
        title: "Metal Prints", 
        description: "Upload a photo or select an image from our huge online library to print on this sturdy aluminium sheet" },

        ],
  instagram: [
      { 
        url: "/photo-magic-mug/",
        img_url: "./img/Themes/bestSeller/UK/Magic-Mug.jpg", 
        customerStar:"./img/Themes/bestSeller/stars/star_4_5.png",
        isNew:"",
        title: "Magic Mug",  
        description:"Using the latest heat-to-reveal technology, simply pour a hot drink to see your favourite photo magically appear." },
      { 
        url: "/Jigsaws-Wooden/", 
        img_url: "./img/Themes/bestSeller/UK/Wood-Jigsaw.jpg",
        customerStar: "./img/Themes/bestSeller/stars/star_4_5.png",
        isNew:"",
        title: "Wooden Jigsaw",         
        description: "Great fun for the whole family, upload a photo or choose an image from our huge library to print on this full-colour jigsaw." },
      { 
        url: "/photo-cushion-gifts/", 
        img_url: "./img/Themes/bestSeller/UK/Cushion-Cover.jpg",
        customerStar:"./img/Themes/bestSeller/stars/star_4_5.png",
        isNew:"",
        title: "Cushion Cover", 
        description: "Decorate your home with this personalised Cushion Cover." },
      {   
        url: "/Crystal-Photo-Frame", 
        img_url: "./img/Themes/bestSeller/UK/Crystal-Frame.jpg",
        customerStar:"./img/Themes/bestSeller/stars/no_star.png",
        isNew:"",
        title: "Crystal Frame", 
        description: "Sleek and sophisticated, print your favourite photos on this high quality crystal block." },
               
  ],
   advertise: [
      { 
          app_url: "www.printerpix.co.uk",  //TODO: need to modify
          app_img_url: "./img/Themes/banner/App-Banner.jpg", 
          app_title:"MobileApplication", 
          app_description: "Redirect to mobile application download page" ,

          getFree_url: "http://www.printerpix.co.uk/e40fp/",  
          getFree_img_url:"./img/Themes/banner/40-Prints-Banner.jpg", 
          getFree_titile: "Free Photos",
          getFree_description: "To get 40 Free Photos"
      }
    ] 
};

var menu = { 
  login: [
      { 
        url: "/ProjectListing", 
        title:"Login" 
 }
  ],
  nav:[
      { 
        url: "http://www.printerpix.co.uk/photo-books/PhotoHardCover/", 
        img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg", 
        title:"Photo Books", 
        description: "" },
      {   
        url: "http://www.printerpix.co.uk/photo-calendar", 
        img_url: " ",
        title:"Calendar", 
        description: "" },
      { 
        url: "http://www.printerpix.co.uk/posters", 
        img_url: " ",
        title:"Wall Decor", 
        description: "" },
      { 
        url: "http://www.printerpix.co.uk/gift?preselectedid=fefb800a-3235-4ed2-8e2b-871ac3d018e7", 
        img_url: " ",
        title:"Gifts", 
        description: "" },
      { 
        url: "http://www.printerpix.co.uk/iphone-cases/", 
        img_url: " ",
        title:"Cases", 
        description: "" },

      { 
        url: "http://www.printerpix.co.uk/photo-instagram-prints", 
        img_url: "",
        title:"Prints", 
        description: "" },

      { 
        url: "http://www.printerpix.co.uk/b2s/", 
        img_url: "",
        title:"Occasions", 
        description: "",
        Occasions:[ 
          { 
            sub_title: "Rugby Champion 2015",
            sub_url:"http://www.printerpix.co.uk/rwc2015/"

          },
         { 
            sub_title: "Halloween",
            sub_url:"http://www.printerpix.co.uk/happy-halloween14/"

          },
        { 
            sub_title: "Back To School",
            sub_url:"http://www.printerpix.co.uk/b2s/"

          },
        { 
            sub_title: "Graduation",
            sub_url:"http://www.printerpix.co.uk/PixGraduateUK/"

          },
       { 
            sub_title: "Wedding",
            sub_url:"http://www.printerpix.co.uk/wedding-shop//"

          },

        ],

      } 

  ],
  nav_occasions:[
        { 
            title: "Rugby Champion 2015",
            url:"http://www.printerpix.co.uk/rwc2015/"

          },
         { 
            title: "Halloween",
            url:"http://www.printerpix.co.uk/happy-halloween14/"

          },
        { 
            title: "Back To School",
            url:"http://www.printerpix.co.uk/b2s/"

          },
        { 
            title: "Graduation",
            url:"http://www.printerpix.co.uk/PixGraduateUK/"

          },
       { 
            title: "Wedding",
            url:"http://www.printerpix.co.uk/wedding-shop//"

          },

  ],

  nav_flag: [
      { 
        url: "/photo-books/PhotoHardCover", 
          img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg", 
          title:"Instagram Calendars", 
          description: "Relieve the moments of your holidays every day with our new calendars!" },
      {   
        url: "/photo-books/leather-cover", 
        img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
        title:"Instagram Poster", 
        description: "Perfect ornaments for the wall, really nice gift every occasion!" },
      { 
        url: "/photo-books/SoftCover/", 
        img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
        title:"Instagram Photo Books", 
        description: "The perfect gift for a birthday, wedding, birth of a child or other occasion" },
      { 
        url: "/photo-canvas/", 
        img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
        title:"Instagram Calendars", 
        description: "Relieve the moments of your holidays every day with out new calendars!" },

      { 
        url: "/shape-collage/", 
        img_url: "./img/Themes/bestSeller/Best-Sellers-Image.jpg",
        title:"Instagram Poster", 
        description: "Perfect ornaments for the wall, really nice gift every occasion" }
  ],
  phone_number:[ {
      phone_message:"Call:0844 567 8228 Mon-Fri 9:00am to 5:00pm [UK]",
    }
  ]

};
