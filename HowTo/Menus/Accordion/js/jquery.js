$(document).ready(function() {
    $(".accordion__button").click(function() {
        // variables
        let iconUse = $(this).find(".accordion__icon-use");
        
        $(this).next().slideToggle('fast');
        $(this).toggleClass("active");
        
        // element attr toggle logic
        if (iconUse.attr("xlink:href") === 'images/sprite.svg#icon-plus') {
            iconUse.attr("xlink:href", "images/sprite.svg#icon-minus");
        } else {
            iconUse.attr("xlink:href", "images/sprite.svg#icon-plus");
        }
        })
})