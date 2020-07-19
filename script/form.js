const formBtn = document.querySelector('.form-btn');
const form = document.querySelector('.form-content');

//elementy error

const errorMessageName = document.querySelector('.error-message-name');
const errorMessageSurname = document.querySelector('.error-message-surname');
const errorMessageEmail = document.querySelector('.error-message-email');
const errorMessageArea = document.querySelector('.error-message-area');

//Input name

let name = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let messageArea = document.getElementById('message-area');

form.addEventListener('submit', function (e) {
	let nameValue = document.getElementById('name').value;
	let surnameValue = document.getElementById('surname').value;
	let emailValue = document.getElementById('email').value;
	let messageAreaValue = document.getElementById('message-area').value;
	let sex1Input = document.querySelector('#sex1');
	let sex2Input = document.querySelector('#sex2');

	validate(nameValue, surnameValue, emailValue, messageAreaValue, sex1Input, sex2Input);

	if (errorMessageName || errorMessageSurname || errorMessageEmail || errorMessageArea) {
		return;
	}
});

function validate(nameValue, surnameValue, emailValue, messageAreavalue) {
	if (nameValue.length <= 6 || nameValue === '') {
		errorMessageName.style.display = 'block';
		name.classList.add('error-input');
		errorMessageName.innerHTML = 'Twoje imie jest za krótkie';

		return false;
	} else {
		errorMessageName.style.display = 'none';
		name.classList.remove('error-input');
	}

	if (surnameValue.length <= 2 || surnameValue == '') {
		errorMessageSurname.style.display = 'block';
		surname.classList.add('error-input');
		errorMessageSurname.innerHTML = 'Twoje nazwisko jest za krótkie';

		return false;
	} else {
		errorMessageSurname.style.display = 'none';
		surname.classList.remove('error-input');
	}

	if (emailValue === '' || emailValue.indexOf('@') == -1 || emailValue.length <= 6) {
		errorMessageEmail.style.display = 'block';
		errorMessageEmail.innerHTML = 'Twój mail nie spełnia złożoności maila';
		email.classList.add('error-input');

		return false;
	} else {
		errorMessageEmail.style.display = 'none';
		email.classList.remove('error-input');
	}

	if (messageAreavalue === '' || messageAreavalue.length <= 20) {
		errorMessageArea.style.display = 'block';
		errorMessageArea.innerHTML = 'Twoja wiadomość jest za krótka';
		messageArea.classList.add('error-input');

		return false;
	} else {
		errorMessageArea.style.display = 'none';
		messageArea.classList.remove('error-input');
	}

	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Your message has been sending',
		showConfirmButton: false,
		timer: 1500
	});

	clearInputValue();
}

function clearInputValue() {
	name.value = '';
	surname.value = '';
	email.value = '';
	messageArea.value = '';
}
