const payMethodDiv = document.querySelectorAll('.pay-method__div');
const payCarts = document.querySelectorAll('.pay-cart');

function addBorder(e) {
    removeBorder()
    removeShow()
    const element = e.target.parentElement;
    element.classList.add('tab-border')
    const page = document.getElementById(`${e.target.parentElement.id}-content`);
    console.log(e.target.parentElement.id);

    page.classList.add('show')
}


payMethodDiv.forEach(pay => {
    pay.addEventListener('click', addBorder)
})


function removeBorder() {
    payMethodDiv.forEach(pay => {
        pay.classList.remove('tab-border')
    })
}

function removeShow() {
    payCarts.forEach(payCart => {
        payCart.classList.remove('show')
    })
}