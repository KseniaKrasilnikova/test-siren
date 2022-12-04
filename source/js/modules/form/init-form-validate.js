import FormsValidate from './form-validate';
import {invalidateInput} from './init-label-top';
import {resetFormSteps} from '../modals/init-form-steps';

const formWrappers = document.querySelectorAll('[data-form-validate]');
const inputWrappers = document.querySelectorAll('.customInput');

const resetForm = (form) => {
  window.clearForm(form);
  Array.from(inputWrappers).forEach((inputWrapper) => {
    invalidateInput(inputWrapper);
  });
  resetFormSteps();
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();
  global.modals.open('estimation');
};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();
};

const finishSuccessCallback = (e) => {
  e.preventDefault();
  global.modals.close('estimation');
  Array.from(formWrappers).forEach((wrapper) => resetForm(wrapper.querySelector('form')));
  resetForm(e.target);
};

const finishErrorCallback = (e) => {
  e.preventDefault();
};

const callbacks = {
  base: {
    validationSuccessCallback: baseValidationSuccessCallback,
    validationErrorCallback: baseValidationErrorCallback,
  },
  finish: {
    validationSuccessCallback: finishSuccessCallback,
    validationErrorCallback: finishErrorCallback,
  },
};

const initFormValidate = () => {
  if (formWrappers.length) {
    Array.from(formWrappers).forEach((wrapper) => {
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
