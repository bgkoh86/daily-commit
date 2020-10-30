$(document).ready(function() {
    // Horizon tabs
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

    // Vertical tabs
    $(".vertical-tabs__link").click(function(e) {
        e.preventDefault();
        $(".vertical-tabs__link").removeClass("active");
        $(this).addClass("active");

        let linkText = $(this).text();
        $(".vertical-tabs__content").hide();
        $(`.vertical-tabs__content--${linkText}`).show();
    })

    $(".vertical-tabs__close").click(function() {
        $(this).parent().hide();
        $(".vertical-tabs__link").removeClass("active");
    })
});