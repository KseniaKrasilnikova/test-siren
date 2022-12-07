const nextStepBtn = document.querySelector('[data-next-step]');
const ownerOptions = Array.from(document.querySelectorAll('.formOwner__option'));

const nextStep = (target) => {
  const currentStepContainer = target.closest('[data-step]');
  const nextStepContainer = currentStepContainer.nextSibling.nextSibling;
  currentStepContainer.classList.add('visuallyHidden');
  nextStepContainer.classList.remove('visuallyHidden');
  fillProgress(nextStepContainer.getAttribute('data-step-id'));
};

const fillProgress = (stepId) => {
  const progressBar = document.querySelector(`[data-steps-bar] [data-step-id-${stepId}]`);
  progressBar.classList.add('done');
};

const isOwnerOptionSelected = () => {
  return ownerOptions.some((option) => option.classList.contains('selected'));
};

const selectOwnerOption = (selectedOption) => {
  ownerOptions.forEach((option) => {
    option.classList.remove('selected');
  });
  selectedOption.classList.add('selected');
  const result = selectedOption.querySelector('label');
  document.querySelector('.js-previous-step-choice').textContent = result.textContent;
};

const resetFormSteps = () => {
  ownerOptions.forEach((item) => {
    item.classList.remove('selected');
  });
  const stepsContainers = Array.from(document.querySelectorAll('[data-step]'));
  stepsContainers.forEach((item, index) => {
    if (index === 0) {
      item.classList.remove('visuallyHidden');
    } else {
      item.classList.add('visuallyHidden');
    }
  });
  const progressBars = document.querySelector('[data-steps-bar]').children;
  Array.from(progressBars).forEach((item, index) => {
    if (index === 0) {
      item.classList.add('done');
    } else {
      item.classList.remove('done');
    }
  });
};

const initFormSteps = () => {
  nextStepBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOwnerOptionSelected()) {
      nextStep(e.target);
    }
  });
  ownerOptions.forEach((option) => {
    option.addEventListener('click', () => {
      selectOwnerOption(option);
    });
  });
};

export {initFormSteps, resetFormSteps};
