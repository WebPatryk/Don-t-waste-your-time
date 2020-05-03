

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,

    },
    pagination: {
        el: '.swiper-pagination',
    },
});




//Change header colors

const header = document.querySelector('.header');
const header__link = document.querySelectorAll('.header__link');
const headerToContact = document.querySelector('.header-to-contact');
const activeLine = document.querySelector('.active');
window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        header.classList.add('header-black');
        // clearInterval(headerInterval);
        for (let i = 0; i < header__link.length; i++) {
            header__link[i].classList.add('black_font');
        }
        activeLine.style.borderBottom = "2px solid black";

    }
    else {
        header.classList.remove('header-black');
        for (let i = 0; i < header__link.length; i++) {
            header__link[i].classList.remove('black_font');
        }
        activeLine.style.borderBottom = "2px solid #fff";
    }

});

// to contact section

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {

        header.classList.add('header-black');
        // clearInterval(headerInterval);
        for (let i = 0; i < header__link.length; i++) {
            header__link[i].classList.add('black_font');
        }

    }
    else {
        header.classList.remove('header-black');
        for (let i = 0; i < header__link.length; i++) {
            header__link[i].classList.remove('black_font');
        }
    }



});


const headText = document.querySelector('.headText');

const colors = ['#4C50AD', '#B04595', '#715899', '#CABEB2'];



function changeColorBox(color, i) {
    setInterval(() => {

        headText.style.backgroundColor = color[i];
        headText.style.transition = 'all .7s';
        i++;
        if (i === colors.length) {
            i = 0;
        }

    }, 2500);
}
function changeColorHeader(color, i) {

    setInterval(() => {
        header.style.backgroundColor = color[i];
        header.style.transition = 'all .7s';
        i++;
        if (i === colors.length) {
            i = 0;
        }

    }, 2500);


}

window.addEventListener('change', function () {
    if (window.pageYOffset > 100) {


    } else if (window.pageYOffset < 100) {
        changeColorBox(colors, 0);
        changeColorHeader(colors, 0);
    }

});

changeColorBox(colors, 0);
changeColorHeader(colors, 0);


//Set animation during loading page

window.addEventListener('load', function () {
    document.body.style.visibility = 'visible';
    const loadingAnimation = document.querySelector('.loading-animation');
    loadingAnimation.style.display = 'none';

});

//Change active cart

const headerLinks = document.querySelectorAll('.header__link');

for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', changeActiveCart);
}
function changeActiveCart(e) {
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].classList.remove('active');
    }
    e.target.classList.add('active');
}

