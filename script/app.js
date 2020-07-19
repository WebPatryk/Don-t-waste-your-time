AOS.init({
	offset: 400,
	duration: 1000,
	once: true
});

gsap.from('.headingText__left', { opacity: 0, y: 100, duration: 1 });
gsap.from('.headingText__right', { duration: 1.5, x: 500 });

gsap.from('.adventages__first', { duration: 1.1, x: -1000, delay: 1, ease: 'expo' });
gsap.from('.adventages__second', { duration: 1.1, x: -1000, delay: 1, ease: 'expo' });
gsap.from('.adventages__thid', { duration: 1.1, x: -1000, delay: 1, ease: 'expo' });

gsap.from('.adventages__fourth', { duration: 1.1, x: 1000, delay: 1, ease: 'expo' });
gsap.from('.adventages__funfth', { duration: 1.1, x: 1000, delay: 1, ease: 'expo' });
gsap.from('.adventages__sixth', { duration: 1.1, x: 1000, delay: 1, ease: 'expo' });

gsap.from('.ourInfo__text', { duration: 1.1, x: -1500, delay: 1, ease: 'power2' });
gsap.from('.ourInfo__photo', { duration: 1.1, x: 1500, delay: 1, ease: 'power2' });

// PAY METHOD

const payMethodDiv = [...document.querySelectorAll('.pay-method__div')];
const payCarts = document.querySelectorAll('.pay-cart');

function addBorder(e) {
	removeBorder();
	removeShow();
	let element = e.target.parentElement;
	if (element.classList.contains('pay-method__type')) {
		element = e.target;
		const page = document.getElementById(`${e.target.id}-content`);
		page.classList.add('show');
		element.classList.add('tab-border');
	} else {
		element.classList.add('tab-border');
		const page = document.getElementById(`${e.target.parentElement.id}-content`);
		page.classList.add('show');
	}
}

payMethodDiv.forEach((pay) => {
	pay.addEventListener('click', addBorder);
});

function removeBorder() {
	payMethodDiv.forEach((pay) => {
		pay.classList.remove('tab-border');
	});
}

function removeShow() {
	payCarts.forEach((payCart) => {
		payCart.classList.remove('show');
	});
}

const hamburger = document.querySelector('.hamburger');
const navigationHeader = document.querySelector('.header__navigation');

hamburger.addEventListener('click', function () {
	navigationHeader.classList.toggle('open');
	if (navigationHeader.classList.contains('open')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'scroll';
	}
});
