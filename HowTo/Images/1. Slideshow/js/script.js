$(document).ready(function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    
    // showSlide logic
    function showSlides(slideIndex) {
        let imgs = $(".slideshow__box");
        let currentImg = imgs[slideIndex - 1];
        let dots = $(".slideshow__dot");
        let currentDot = dots[slideIndex - 1];

        console.log(currentImg);

        imgs.hide();
        $(currentImg).show();

        dots.removeClass("active-dot");
        $(currentDot).addClass("active-dot");
    };


    // prev-btn click
    $(".slideshow__arrow--prev").click(function() {
        slideIndex += -1;
        if (slideIndex < 1) {
            slideIndex = $(".slideshow__img").length;
        }
        console.log(slideIndex);
        showSlides(slideIndex);
    });

    // next-btn click
    $(".slideshow__arrow--next").click(function() {
        slideIndex += 1;

        if (slideIndex > $(".slideshow__img").length) {
            slideIndex = 1;
        }
        console.log(slideIndex);
        showSlides(slideIndex);
    });

    // dot click
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