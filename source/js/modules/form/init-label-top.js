// поднимает/опускает label у инпутов с классом .js-focus-shift

const inputWrappers = document.querySelectorAll('.js-focus-shift');

const validateInput = (inputWrapper) => {
  const input = inputWrapper.querySelector('input') || inputWrapper.querySelector('textarea');
  if (input.value) {
    inputWrapper.classList.add('js-has-value');
  } else {
    inputWrapper.classList.remove('js-has-value');
  }
};

const initInputWrappers = () => {
  inputWrappers.forEach((inputWrapper) => {
    inputWrapper.addEventListener('input', () => {
      validateInput(inputWrapper);
    });
  });
};

export {initInputWrappers};
