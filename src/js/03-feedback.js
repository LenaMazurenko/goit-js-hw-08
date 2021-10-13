import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateInputs();

form.addEventListener('input', writeToLocalStorage);
form.addEventListener('submit', onFormSubmit);

function writeToLocalStorage(event) {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const obj = readFromLocalStorage();
  console.log(`email: ${obj.email}, message: ${obj.message}`);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}

function updateInputs() {
  const obj = readFromLocalStorage();
  form.elements.email.value = obj.email || '';
  form.elements.message.value = obj.message || '';
}

function readFromLocalStorage() {
  const stringFromLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY) || '';

  if (stringFromLocalStorage) {
    return JSON.parse(stringFromLocalStorage);
  }
  return {};
}
