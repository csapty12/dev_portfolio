$(document).ready(function(){
var myNavBar = $(".container-fluid.myNavBar");
var navbarElements =$(".navbar-inverse .navbar-nav>li>a");
var navbarBrand= $(".navbar-brand");
var chevron=$(".fas.fa-chevron-down");
var scrollButton = $(".fas.fa-chevron-down");

// when you scroll past x px, things will start to change
$(window).scroll(function(event){
  var positionofscroll = $(this).scrollTop();
  if (positionofscroll > 100){
    myNavBar.css('background-color','rgba(0,0,0,0.8)');
    navbarElements.css("color","#fff");
    navbarBrand.css("visibility","visible");
  }else{
    myNavBar.attr('style','');
    navbarElements.css("color","#fff");
    navbarBrand.css("visibility","hidden")
    chevron.fadeIn();
  }
  if (positionofscroll > 100){
      chevron.fadeOut();
  }
});

// scroll button on click event
scrollButton.click(function() {
  $('html,body').animate({
      scrollTop: $("#container-2").offset().top},
      'slow');
  });
});

//type js script 
document.addEventListener("DOMContentLoaded", function(){
  new Typed('.sub_header',{
    strings:["Developer Portfolio"],
    typeSpeed:40,
    showCursor: true,
    cursorChar: '|'
  });
});