


jQuery(document).ready(function () {






	jQuery('.main-menu').meanmenu({
    mobileMenuContainer:'.main-menu',
    meanScreenWidth:'767'

  });

/*********dropdown menu**********/
  


/*********counter plugin**********/


 $('.count').counterUp({
  delay: 10,
  time: 1200
});


/******* Video plugin **********/

$(".popup").modalVideo();

/********
$(".yr").click(function(){
$(".mnt").css("background","white").css("color","#393542");

else{
  $ (".mnt").css("background","red")
}

});


$(".mnt").click(function(){
  $(".mnt").css("background","transparent linear-gradient(272deg, #FF99A5 100%, #FF60A3 0%) 0% 0% no-repeat padding-box")
  });
********* */


/*************Slick slider *************/
$('.text-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerPadding: '0px',
  asNavFor: '.text-img'
});
$('.text-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.text-list',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  arrows: false,
  responsive: [
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});
$('.logo-slide').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  responsive:{
    0:{
      items:1
  },

      580:{
          items:2
      },
      770:{
          items:3
      },
      1200:{
          items:4
      }
  }
});

/*************** ScrollTop*******************/

$ (window) .scroll (function(){

if ($(window).scrollTop()>1200){
  $(".topicon i").show()

}
else{
  $(".topicon i").hide()
}

});

$(".topicon").click(function(){
 $("html").animate({scrollTop:0 },1000,)
});


new WOW().init();



});

$(window).on('scroll',function() {
  var scroll = $(window).scrollTop();
  if (scroll < 20) {
   $("#sticky").removeClass("sticky-menu");
  }else{
   $("#sticky").addClass("sticky-menu");
  }


 });





 $(document).ready(function(){



 $(window).bind("load", function() {
  var width = $(window).width();
  if (width <=768) {
    $("#sticky").removeClass("sticky-menu");
  }
  else {
    $("#sticky").addClass("sticky-menu");
  }
});





});




