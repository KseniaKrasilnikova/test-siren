import FormsValidate from './form-validate';
import {invalidateInput} from './init-label-top';
const formWrappers = document.querySelectorAll('[data-form-validate]');
const inputWrappers = document.querySelectorAll('.customInput');

const resetForm = (form) => {
  setTimeout(() => {
    window.clearForm(form);
    inputWrappers.forEach((inputWrapper) => {
      invalidateInput(inputWrapper);
    });
  }, 1000);
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();
  global.modals.open("estimation");
};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();
};

const callbacks = {
  base: {
    validationSuccessCallback: baseValidationSuccessCallback,
    validationErrorCallback: baseValidationErrorCallback,
  }
};

const initFormValidate = () => {
  if (formWrappers.length) {
    formWrappers.forEach((wrapper) => {
      let callback = wrapper.dataset.callback;

      if (!callback) {
        callback = 'base';
      }

      const formValidate = new FormsValidate(wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

export {initFormValidate};
