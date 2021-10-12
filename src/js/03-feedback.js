import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateInputs();

form.addEventListener('input', throttle(writeToLocalStorage, 500));
form.addEventListener('submit', onFormSubmit);

function writeToLocalStorage(event) {
  const dataToLocalStorage = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToLocalStorage));
}

function onFormSubmit(event) {
  event.preventDefault;
  console.log(''); //почему не срабатывают два консоля ниже без этого ненужного! консоля?!!!
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
