let parallaxCard = document.querySelector('.card');
let parallaxCardBox = document.querySelector('.card-box');
let cardImage = document.querySelectorAll('.card-image');
let clientWindowHeight = document.documentElement.clientHeight;
let parallaxImage = document.querySelectorAll('.parallax-image');
let parallaxSection = document.querySelectorAll('.parallax-section');
let leavingContentDiv = document.querySelectorAll('.leaving-content');
let yOffset;
let yOffsetOld = 0;
let topImagePosition;
let topParallaxImagePosition = [];

resize();
addEventListener("resize", resize);
addEventListener("scroll", parallax);


function parallax() {
    yOffset = window.pageYOffset;        //   Смещение страницы от 0
    parallaxCardFunc();
    parallaxSectionFunc();
    leavingContent();
    yOffsetOld = yOffset;
}


function parallaxCardFunc() {

    if (parallaxCard.getBoundingClientRect().top < clientWindowHeight) {
        topImagePosition = topImagePosition - (yOffset - yOffsetOld) / -4;

        for (let i = 0; i < cardImage.length; i++) {

            cardImage[i].style.top = topImagePosition + "px";
        }
    }
}

function parallaxSectionFunc() {

    for (let i = 0; i < parallaxSection.length; i++) {

        if (parallaxSection[i].getBoundingClientRect().top < clientWindowHeight) {
            topParallaxImagePosition[i] = topParallaxImagePosition[i] - (yOffset - yOffsetOld) / -4;
            parallaxImage[i].style.top = topParallaxImagePosition[i] + "px";
        }
    }
}

function leavingContent() {

    if (leavingContentDiv[0].getBoundingClientRect().top < 400) {
        document.querySelectorAll('.leaving-content-left')[0].style.left = "5%";
        document.querySelectorAll('.leaving-content-right')[0].style.right = "5%";
    }

    if (leavingContentDiv[0].getBoundingClientRect().top > 400) {
        document.querySelectorAll('.leaving-content-left')[0].style.left = "200%";
        document.querySelectorAll('.leaving-content-right')[0].style.right = "200%";
    }
}

function resize() {
    window.scrollTo(0, 0);
    yOffsetOld = 0;

    parallaxCardBox.style.height = document.documentElement.clientWidth/4.5 + "px";

    for (let i = 0; i< cardImage.length; i++){
        cardImage[i].style.top = -1 * (cardImage[i].offsetHeight - parallaxCard.offsetHeight) + "px";
        console.log(-1 * parallaxCard.offsetHeight);
    }

    topImagePosition = -1 * parallaxCard.offsetHeight;

    for (let i = 0; i < parallaxSection.length; i++) {
        parallaxSection[i].style.height = parallaxSection[i].offsetWidth/2.7 + "px";
        topParallaxImagePosition[i] = -1* (parallaxImage[i].offsetHeight - parallaxSection[i].offsetHeight);
        parallaxImage[i].style.top = topParallaxImagePosition[i] + "px";
    }
}