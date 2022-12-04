// поднимает/опускает label у инпутов с классом .js-focus-shift

const inputWrappers = document.querySelectorAll('.js-focus-shift');

const invalidateInput = (inputWrapper, value) => {
  if (value) {
    inputWrapper.classList.add('js-has-value');
  } else {
    inputWrapper.classList.remove('js-has-value');
  }
};

const initInputWrappers = () => {
  inputWrappers.forEach((inputWrapper) => {
    const input = inputWrapper.querySelector('input') || inputWrapper.querySelector('textarea');
    input.addEventListener('input', () => {
      console.log("input = " + input.value)
      invalidateInput(inputWrapper, input.value);
    });
  });
};

export {initInputWrappers, invalidateInput};
