/* global console , window,$*/
$(function (){
    'use strict';


    // start nav scroll

    $(window).scroll(function (){
      // navbar scroll
        var myScroll = $(window).scrollTop();

        if(myScroll >5)
        {
            $(" .navbar").addClass("scroll");
        }else{
             $(" .navbar").removeClass("scroll");
        }
      // scroll to top
      if (myScroll > 400) {
        $(".scroll-to-top").fadeIn(500);
      }else {
        $(".scroll-to-top").fadeOut(0);
      }
    });
    // scroll to contact

    $(".contact").on("click",function(){
       $("html,body").animate({
           scrollTop: $(".contact-form").offset().top-$(".navbar.scroll").height(),
       },500);
    });
    // start thumbnils gallery

    $(".thumbnails img").on("click",function(){
       $(this).addClass("active").siblings().removeClass("active");

        $(".master-img img").hide().attr("src", $(this).attr("src")).fadeIn(400);
    });

    $(".master-img .fa-chevron-left").on("click",function () {

       if($(".thumbnails .active").is(":first-child"))
           {
               $(".thumbnails img:last ").click();
           }else{
              $(".thumbnails .active").prev().click();
           }

    });

    $(".master-img .fa-chevron-right").on("click",function () {

       if ($(".thumbnails .active").is(":last-child"))
           {
               $(".thumbnails img").eq(0).click();
           }else{
             $(".thumbnails .active").next().click();
           }

    });

    // start the scroll to  bottom


    $(".scroll-to-bottom").on("click",function(){
       $("html,body").animate({
           scrollTop: $(".Products").offset().top -$(".navbar.scroll").height()
       },500);
    });


    // start the scroll to  top

    $(".scroll-to-top").on("click",function(){
       $("html,body").animate({
           scrollTop: "0",
       },500);
    });
    // nice scroll plugin

    $("html").niceScroll({
      cursorcolor:"#c84141",
      cursorwidth:"8px",
      background:"#1e202a",
      cursorborder:0,
      cursorborderradius:"10px"
    });

    // popup

      $(document).mouseleave(function(){
        $("#popup").fadeIn();
      });
      $(".popup-content .btn").on("click",function(){
        $("#popup").fadeOut();
      });



});
