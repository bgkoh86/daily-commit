$(document).ready(function() {

  // SUB-MENU DISPLAY
  $("#portfolio").click(function() {
    $(".portfolio-dropdown").slideToggle();
    $(".down-arrow").toggleClass("rotate-arrow");
  })


  // CONTENT DISPLAY
$(".nav__link").click(function() {
  let href = $(this).attr("id");
  $(".nav__link").removeClass("selected");
  $(this).addClass("selected");
  $("[class^='content-']").css("display","none");
  $(`.content-${href}`).css("display","block");
  $(".nav__link").css("color", "black");
  $(this).css("color","#fff")
  $(".down-arrow").css("fill", "black");
  $(this).next().css("fill", "#fff");
});

  // BANNER CLOSE
  $(".banner__close-btn").click(function() {
    $(".banner").css("display","none");
    $(".nav").css("top", "0");
    $("div[class^='content-']").css("margin-top", "0");
  })

   //  SHOW TOP ARROW BTN
$(window).scroll(function() {
  if ($(document).scrollTop() > 250) {
  $('.top-arrow').addClass('show');
  } else {
  $('.top-arrow').removeClass('show');
  }
  });

  // MOVE TO TOP
  $('.top-arrow').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},300);
});
})