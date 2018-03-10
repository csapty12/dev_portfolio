$(document).ready(function(){
    var myNavBar = $(".container-fluid.myNavBar");
    var navbarElements =$(".navbar-inverse .navbar-nav>li>a");
    var navbarBrand= $(".navbar-brand");
    var chevron=$(".fas.fa-chevron-down");
    $(window).scroll(function(event){
      var positionofscroll = $(this).scrollTop();
      if (positionofscroll > 50){
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
});

document.addEventListener("DOMContentLoaded", function(){
    new Typed('.sub_header',{
      strings:["Developer Portfolio"],
      typeSpeed:40,
      showCursor: true,
      cursorChar: '|'
    });
  });