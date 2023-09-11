const app = document.querySelector('#app');

function Tag(tags = {}) {
  const { tag, className, id, textContent, placeholder } = tags;

  const element = document.createElement(tag);

  element.className = className || ' ';
  element.id = id || ' ';
  element.textContent = textContent || ' ';
  element.placeholder = placeholder || ' ';
  return element;
}

const form = Tag({
  tag: 'form',
  className: 'form',
  id: 'form',
});

const loginInput = Tag({
  tag: 'input',
  className: 'input',
  id: 'input__login',
  placeholder: 'Login',
});

const phoneInput = Tag({
  tag: 'input',
  className: 'input',
  id: 'input__phone',
  placeholder: 'Phone',
});

const button = Tag({
  tag: 'button',
  className: 'submit-btn',
  textContent: 'Submit',
});

function createPhoneFormat(inputValue) {
  if (inputValue.length !== 10) {
    console.error('Wrong phone number format');
  }

  const phoneNumber = `(${inputValue.slice(0, 3)}) ${inputValue.slice(
    3,
    6
  )}-${inputValue.slice(6, 10)}`;

  return phoneNumber;
}

form.append(loginInput, phoneInput, button);
app.append(form);

const btn = document.querySelector('.submit-btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const phoneNumber = createPhoneFormat(phoneInput.value);
  const data = {
    login: loginInput.value,
    phoneNumber: phoneNumber,
  };
  console.log(data);
  document.querySelector('form').reset();

  const modalWindow = Tag({
    tag: 'div',
    className: 'modal__window',
    textContent: '',
  });
  if (modalWindow || document.contains(modalWindow)) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalWindow.remove();
    });

    app.append(modalWindow);
  }
});
