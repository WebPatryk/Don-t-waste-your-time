


//Change header colors

const header = document.querySelector('.header');
const header_link = document.querySelectorAll('.header_link')
const headerToContact = document.querySelector('.header-to-contact');
window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        header.classList.add('header-black')
        // clearInterval(headerInterval);
        for (let i = 0; i < header_link.length; i++) {
            header_link[i].classList.add('black_font');
        }

    }
    else {
        header.classList.remove('header-black')
        for (let i = 0; i < header_link.length; i++) {
            header_link[i].classList.remove('black_font');
        }
    }



})

// to contact section

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {

        headerToContact.classList.add('header-black', '!important')
        // clearInterval(headerInterval);
        for (let i = 0; i < header_link.length; i++) {
            header_link[i].classList.add('black_font');
        }

    }
    else {
        headerToContact.classList.remove('header-black')
        for (let i = 0; i < header_link.length; i++) {
            header_link[i].classList.remove('black_font');
        }
    }



})

//-----------------------------------



const headText = document.querySelector('.headText');

const colors = ['#4C50AD', '#B04595', '#715899', '#CABEB2'];



function changeColorBox(color, i) {
    const boxInterval = setInterval(() => {

        headText.style.backgroundColor = color[i]
        headText.style.transition = 'all .7s';
        i++
        if (i === colors.length) {
            i = 0;
        }

    }, 2500)
}
function changeColorHeader(color, i) {

    const headerInterval = setInterval(() => {
        header.style.backgroundColor = color[i]
        header.style.transition = 'all .7s';
        i++;
        if (i === colors.length) {
            i = 0;
        }



    }, 2500)




}

window.addEventListener('change', function () {
    if (window.pageYOffset > 100) {

        // console.log('bleble');
    } else if (window.pageYOffset < 100) {
        changeColorBox(colors, 0)
        changeColorHeader(colors, 0)
    }

})

changeColorBox(colors, 0)
changeColorHeader(colors, 0)


//Set animation during loading page

window.addEventListener('load', function () {
    document.body.style.visibility = 'visible';
    const loadingAnimation = document.querySelector('.loading-animation');
    loadingAnimation.style.display = 'none';

})

//Change active cart

const headerLinks = document.querySelectorAll('.header_link');

for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', changeActiveCart);
}
function changeActiveCart(e) {
    for (let i = 0; i < headerLinks.length; i++) {
        headerLinks[i].classList.remove('active')
    }
    e.target.classList.add('active')
}





const dodaj = document.querySelector('.dodaj');


const customersContainer = document.querySelector('.customers__container')
customersContainer.addEventListener('mousedown', function (e) {


    let xPos = e.clientX / 100;
    // let yPos = e.clientY;
    // console.log(xPos);


    if (xPos > 7) {
        customersContainer.scrollBy(300, 0);
    }
    else {
        customersContainer.scrollBy(-300, 0);
    }


    console.log(xPos);

})



