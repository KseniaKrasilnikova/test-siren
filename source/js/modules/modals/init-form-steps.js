const nextStepBtn = document.querySelector('[data-next-step]');

const hideCurrentStep = (target) => {
  const currentStepContainer = target.closest('[data-step]');
  currentStepContainer.classList.add('visuallyHidden');
}

const showNextStep = (target) => {
  console.log("showNextStep")
  const nextStepContainer = target.closest('[data-step]').nextSibling.nextSibling;
  nextStepContainer.classList.remove('visuallyHidden');
}

// data-step-current
const initFormSteps = () => {
  nextStepBtn.addEventListener('click', (e) => {
    hideCurrentStep(e.target);
    showNextStep(e.target);
  });
};

export {initFormSteps};
