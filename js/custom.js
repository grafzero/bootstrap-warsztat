'use strict';
$(document).ready(function(){
    function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar-default').addClass("scrolled");
    }else{
        $('.navbar-default').removeClass("scrolled");
    }
}

    $(window).on("scroll load resize", function(){
        console.log('scrolling');
        checkScroll();
    });

    
});


