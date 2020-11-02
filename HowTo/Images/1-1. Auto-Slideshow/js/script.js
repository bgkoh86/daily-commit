$(document).ready(function() {
    let slideIndex = 0;
    showSlides();

    
    // showSlide logic
    function showSlides() {
        let imgs = $(".slideshow__box");
        let currentImg = imgs[slideIndex];
        let dots = $(".slideshow__dot");
        let currentDot = dots[slideIndex];
    
        imgs.hide();
        $(currentImg).show();

        dots.removeClass("active-dot");
        $(currentDot).addClass("active-dot");

        slideIndex++;

        if (slideIndex == imgs.length) {
            slideIndex = 0;
        }

    setTimeout(showSlides, 2000);
    };

    // dot click logic
    $(".slideshow__dot").click(function() { 
        var imgs = $(".slideshow__box");  // array
        var dotIndex = $(this).index();  // index
        var selectedImg = imgs[dotIndex]; 


        imgs.hide();
        $(selectedImg).show();

        $(".slideshow__dot").removeClass("active-dot");
        $(this).addClass("active-dot");
        })
});