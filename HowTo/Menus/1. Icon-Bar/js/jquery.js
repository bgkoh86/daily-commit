$(document).ready(function() {
  $(".icon-bar__link").click(function() {
    $(".icon-bar__link").removeClass("icon-bar__link--active");
    $(this).addClass("icon-bar__link--active");
  });

  $(".icon-bar-horizontal__link").click(function() {
    $(".icon-bar-horizontal__link").removeClass("icon-bar-horizontal__link--active");
    $(this).addClass("icon-bar-horizontal__link--active");
  });
})