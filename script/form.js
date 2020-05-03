
const formBtn = document.querySelector('.form-btn');
const formularz = document.querySelector('.formularz');

//elementy error 

const errorMessageName = document.querySelector('.error-message-name');
const errorMessageSurname = document.querySelector('.error-message-surname');
const errorMessageEmail = document.querySelector('.error-message-email');
const errorMessageArea = document.querySelector('.error-message-area');



formularz.addEventListener('submit', function (e) {


    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let messageArea = document.getElementById('message-area').value;


    e.preventDefault();

    if (name.length <= 2 || name == '') {
        errorMessageName.style.display = 'block';
        errorMessageName.innerHTML = 'Twoje imie jest za krótkie';

        return false;
    }

    if (surname.length <= 2 || surname == '') {
        errorMessageSurname.style.display = 'block';
        errorMessageSurname.innerHTML = 'Twoje nazwisko jest za krótkie';

        return false;

    }

    if (email === '' || email.indexOf('@') == -1 || email.length <= 6) {
        errorMessageEmail.style.display = 'block';
        errorMessageEmail.innerHTML = 'Twój mail nie spełnia złożoności maila';

        return false;

    }

    if (messageArea === '' || messageArea.length <= 20) {
        errorMessageArea.style.display = 'block';
        errorMessageArea.innerHTML = 'Twoja wiadomość jest za krótka';

        return false;
    }


    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been sending',
        showConfirmButton: false,
        timer: 1500
    });


    errorMessageName.style.display = 'none';
    errorMessageSurname.style.display = 'none';
    errorMessageEmail.style.display = 'none';
    errorMessageArea.style.display = 'none';
    formularz.reset();
    return true;

});
