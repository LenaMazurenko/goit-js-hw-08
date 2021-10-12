import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutputs();

form.addEventListener('input', onInputEvent);
form.addEventListener('submit', onFormSubmit);

function onInputEvent(event) {
  const dataToLocalStorage = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataToLocalStorage));
}

function onFormSubmit(event) {
  event.preventDefault;
  const dataFromLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY) || '';
  console.log(JSON.parse(dataFromLocalStorage));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  form.reset();
}

function updateOutputs() {
  const stringFromLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY) || '';

  if (stringFromLocalStorage) {
    const dataFromLocalStorage = JSON.parse(stringFromLocalStorage);

    form.elements.email.value = dataFromLocalStorage.email;
    form.elements.message.value = dataFromLocalStorage.message;
  }
}
