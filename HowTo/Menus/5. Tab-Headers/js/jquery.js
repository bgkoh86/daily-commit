$(document).ready(function() {
    $(".header__link").click(function() {
        let currentLink = $(this).text();
        let bannerColor = $(`.header__banner--${currentLink}`).css("background-color");

        // 모든 베너 hide 
        $(".header__banner").hide();
        //  현재 선택된 링크의 배너만 show
        $(`.header__banner--${currentLink}`).show();

        // 모든 링크에서 active 클래스(글자색 white) 제거
        $(".header__link").removeClass("active");
        // 현재 선택된 링크에 active 클래스 추가
        $(this).addClass("active");

        // 모든 링크의 색을 없애기
        $(".header__link").css("background-color", "");
        // 현재 선택된 링크의 색을 베너의 색과 동일하게 변경
        $(this).css("background-color", bannerColor);
    })
});