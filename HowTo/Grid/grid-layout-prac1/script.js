$(document).ready(function() {

  $(".nav-link").click(function(e) {
    e.preventDefault();
    let linkTo = $(this).attr("class").split(" ")[1];

    $(".container-main").hide();
    $(`#${linkTo}`).show();


  })
});