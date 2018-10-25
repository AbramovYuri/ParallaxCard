window.scrollTo(0, 0);

let parallaxCard = document.querySelector('.card');
let clientWindowHeight = document.documentElement.clientHeight;
let cardImage = document.querySelectorAll('.card-image');
let parallaxImage = document.querySelectorAll('.parallax-image');
let parallaxSection = document.querySelectorAll('.parallax-section');
let leavingContentDiv = document.querySelectorAll('.leaving-content');
let leavingContentImage = document.querySelectorAll('.leaving-content-image');
let yOffset;
let yOffsetOld = 0;
let topParallaxImagePosition = -1 * parallaxSection[0].offsetHeight;
let topImagePosition = -1 * parallaxCard.offsetHeight;
let topLeavingImagePosition = -1 * leavingContentDiv[0].offsetHeight;

document.windowOnLoad = parallax();

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
        topImagePosition = topImagePosition - (yOffset - yOffsetOld) / -3;


        console.log(parallaxCard.getBoundingClientRect());

        for (let i = 0; i < cardImage.length; i++) {

            cardImage[i].style.top = topImagePosition + "px";
        }
    }
}
function parallaxSectionFunc() {

    for (let i = 0; i < parallaxSection.length; i++) {

        if (parallaxSection[i].getBoundingClientRect().top < clientWindowHeight) {
            topParallaxImagePosition = topParallaxImagePosition - (yOffset - yOffsetOld)/-2;
            parallaxImage[i].style.top = topParallaxImagePosition + "px";
        }
    }
}

function leavingContent() {

    for (let i =0; i<leavingContentImage.length;i++){

        if (leavingContentImage[i].getBoundingClientRect().top < clientWindowHeight){

            topLeavingImagePosition = topLeavingImagePosition - (yOffset - yOffsetOld)/-2;
            leavingContentImage[i].style.top = topLeavingImagePosition + "px";
        }
    }

    if (leavingContentDiv[0].getBoundingClientRect().top < 400) {
        document.querySelectorAll('.leaving-content-left')[0].style.left = "5%";
        document.querySelectorAll('.leaving-content-right')[0].style.right = "5%";
    }

    if (leavingContentDiv[0].getBoundingClientRect().top > 400) {
        document.querySelectorAll('.leaving-content-left')[0].style.left = "200%";
        document.querySelectorAll('.leaving-content-right')[0].style.right = "200%";
    }
}