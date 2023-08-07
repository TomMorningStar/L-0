const nameField = document.querySelector('#name-field');
const surnameField = document.querySelector('#surname-field');
const emailField = document.querySelector('#email-field');
const phoneField = document.querySelector('#phone-field');
const innField = document.querySelector('#inn-field');

const submit = document.querySelector('#submit');

const nameFieldValidation = (event) => {
  nameField.classList.remove('invalid');
  let error = false;

  if (!nameField.value) {
    nameField.classList.add('invalid');
    nameField.placeholder = 'Поле обязательно для заполнения';
    error = true;
  } else if (nameField.value.length <= 2) {
    nameField.classList.add('invalid');
    nameField.placeholder = 'Имя должно быть не менее 2 символов';
    error = true;
  }

  if (event === 'input' && !error) {
    nameField.classList.remove('invalid');
  }
}

const surnameFieldValidation = (event) => {
  surnameField.classList.remove('invalid');
  let error = false;

  if (!surnameField.value) {
    surnameField.classList.add('invalid');
    surnameField.placeholder = 'Поле обязательно для заполнения';
    error = true;
  } else if (surnameField.value.length <= 2) {
    surnameField.classList.add('invalid');
    surnameField.placeholder = 'Фамилия должна быть не менее 2 символов';
    error = true;
  }

  if (event === 'input' && !error) {
    surnameField.classList.remove('invalid');
  }
}

const emailFieldValidation = (event) => {
  const regExpEmail = /\S+@\S+\.\S+/;
  emailField.classList.remove('invalid');

  let error = false;

  if (!regExpEmail.test(emailField.value)) {
    emailField.classList.add('invalid');
    emailField.placeholder = 'Некорректный email';
    error = true;
  }

  if (!emailField.value) {
    emailField.classList.add('invalid');
    emailField.placeholder = 'Поле обязательно для заполнения';
    error = true;
  }

  if (event === 'input' && !error) {
    emailField.classList.remove('invalid');
  }
}

const phoneFieldValidation = (event) => {
  const regExpPhone = /^\+7\d{10}$/;
  phoneField.classList.remove('invalid');

  let error = false;

  if (!regExpPhone.test(phoneField.value)) {
    phoneField.classList.add('invalid');
    phoneField.placeholder = 'Некорректный номер телефона';
    error = true;
  }

  if (!phoneField.value) {
    phoneField.classList.add('invalid');
    phoneField.placeholder = 'Поле обязательно для заполнения';
    error = true;
  }

  if (event === 'input' && !error) {
    phoneField.classList.remove('invalid');
  }
}

const innFieldValidation = (event) => {
  const regExpInn = /^\d{10}$/;
  innField.classList.remove('invalid');

  let error = false;

  if (!regExpInn.test(innField.value)) {
    innField.classList.add('invalid');
    innField.placeholder = 'Некорректный ИНН';
    error = true;
  }

  if (innField.value.length < 10) {
    innField.classList.add('invalid');
    innField.placeholder = 'ИНН должен быть длиннее 10 символов';
    error = true;
  }

  if (!innField.value) {
    innField.classList.add('invalid');
    innField.placeholder = 'Поле обязательно для заполнения';
    error = true;
  }

  if (event === 'input' && !error) {
    innField.classList.remove('invalid');
  }
}

nameField.addEventListener('blur', nameFieldValidation);
surnameField.addEventListener('blur', surnameFieldValidation);
emailField.addEventListener('blur', emailFieldValidation);
phoneField.addEventListener('blur', phoneFieldValidation);
innField.addEventListener('blur', innFieldValidation);

nameField.addEventListener('input', () => nameFieldValidation('input'));
surnameField.addEventListener('input', () => surnameFieldValidation('input'));
emailField.addEventListener('input', () => emailFieldValidation('input'));
phoneField.addEventListener('input', () => phoneFieldValidation('input'));
innField.addEventListener('input', () => innFieldValidation('input'));


submit.addEventListener('click', (e) => {
  e.preventDefault();
  nameFieldValidation();
  surnameFieldValidation();
  emailFieldValidation();
  phoneFieldValidation();
  innFieldValidation();
})



