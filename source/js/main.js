import {initFormValidate} from './modules/form/init-form-validate';
import {initInputWrappers} from './modules/form/init-label-top';
import {initModals} from './modules/modals/init-modals';
import {initFormSteps} from './modules/modals/init-form-steps';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initFormValidate();
    initInputWrappers();
    initModals();
    initFormSteps();
  });
});

// ---------------------------------
