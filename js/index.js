$(document).ready(function(){
var myNavBar = $(".container-fluid.myNavBar");
var navbarElements =$(".navbar-inverse .navbar-nav>li>a");
var navbarBrand= $(".navbar-brand");
var chevron=$(".fas.fa-chevron-down");
var scrollButton = $(".fas.fa-chevron-down");
var backToTopButton = $(".fas.fa-chevron-up");

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

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// scroll button down on click event
scrollButton.click(function() {
  $('html,body').animate({
      scrollTop: $("#container-2").offset().top},
      'slow');
  });
// scroll button up on click event
backToTopButton.click(function() {
  $('html,body').animate({
      scrollTop: $("#container-1").offset().top},
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