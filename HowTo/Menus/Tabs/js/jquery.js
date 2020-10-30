$(document).ready(function() {
    // variables
    $(".tabs__link").click(function(e) {
    let currentLink = $(this).text();
        e.preventDefault();
        $(".tabs__link").removeClass("active");
        $(this).addClass("active");
        $(".tabs__content").hide();
        $(`.tabs__content--${currentLink}`).show();
    });

    $(".tabs__close").click(function() {
        $(this).parent().hide();
        $(".tabs__link").removeClass("active");
    })
});