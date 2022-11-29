

// 햄버거 메뉴 클릭 시 GNB 열림
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},400);
        $('header').animate({left:-230},400);      
    } 
    else {    
        $('.gnb').animate({right:-330},200);
        $('header').animate({left:0},200); 
    }
});

// 하단 네브바 각 아이콘 및 메뉴 클릭 시 클래스 제거 & 추가
$('.bottom_nav .b_navbar li a').click(function(){
    $('.bottom_nav .b_navbar li a').removeClass('on');
    $(this).addClass('on');
});

// 비주얼 영역에 있는 화살표 클릭 시 offset $() 안에 설정한 곳으로 부드럽게 이동
$(document).ready(function(){
    $('.KeyVisualScroll-link').click(function(){
        var offset = $('#mediaNews').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
});

// 스크롤 내리면 fixed된 헤더 사라지고, 올리면 다시 생기는 스크립트
var lastScrollTop = 0, delta = 15;
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return;

    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
        $("header").css("top","-100px");
    } else {
        $("header").css("top","0px");
    }

    lastScrollTop = scrollTop;
});

// 스와이프 설정 영역 - mediaNews
let swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: '2',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: -45,
        depth: 100,
        slideShadows: true,
        // modifier:3,
        // stretch: 80
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// 스와이프 설정 영역 - games
let swiper2 = new Swiper(".swiper-container2", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "1",
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// AOS (화면 나타나는 효과)
$(document).ready(function(){
    AOS.init();
    // $("body").attr("data-aos-duration","2000");
    // $("[data-aos='fade-up']").css("transform","translate3d(0,0px,0)");
    $("body[data-aos-duration='400'] [data-aos]").css("transition-duration","2.4s");
});

// ABOUT - value 영역 화살표 관련
$('.jump_arrow2').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $(this).next().show();      
    } 
    else {    
        $(this).next().hide();   
    }
});

// 일정 높이값이 되면 클래스를 추가하거나 없앰
let isVisible = false;

window.addEventListener('scroll', function() {
    if ( checkVisible($('#striking')) && !isVisible) {
        $('.studios_container').addClass('black');
        isVisible=true;
        $('.w_img').hide();
        $('.b_img').show();
    } 
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
};
