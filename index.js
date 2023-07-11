var currentForm = null;

function openForm(formId) {
  var overlay = document.getElementById('overlay');
  var formContainer = document.getElementById('form-container');

  if (currentForm) {
    var currentOverlay = document.getElementById(currentForm + 'Form');
    currentOverlay.style.display = 'none';
  }

  switch (formId) {
    case 'signUp':
      formContainer.innerHTML = document.getElementById('sign-up-form-container').innerHTML;
      currentForm = 'signUp';
      break;
    case 'signUpLoading':
      formContainer.innerHTML = document.getElementById('sign-up-loading-form-container').innerHTML;
      currentForm = 'signUpLoading';
      break;
    case 'signIn':
      formContainer.innerHTML = document.getElementById('sign-in-form-container').innerHTML;
      currentForm = 'signIn';
      break;
    case 'addNewVideo':
      formContainer.innerHTML = document.getElementById('sign-in-form-error-container').innerHTML;
      currentForm = 'signInFormError';
      break;
    case 'addNewVideo':
      formContainer.innerHTML = document.getElementById('add-new-video-form-container').innerHTML;
      currentForm = 'addNewVideo';
      break;
    default:
      formContainer.innerHTML = '';
      currentForm = null;
      break;
  }

  overlay.style.display = 'flex';
  document.body.classList.add('overlay-open');
}

function closeForm() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
  document.body.classList.remove('overlay-open');
}

function showPassword() {
  let passwordInput = document.getElementById("p_i");
  let passwordEyeLine = document.getElementById("eyeline");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeLine.style.display = "none";
  } else {
    passwordInput.type = "password";
    passwordEyeLine.style.display = "block";
  }
}

function showRepeatPassword() {
  let repeatPasswordInput = document.getElementById("repeat_p_i");
  let repeatPasswordEyeLine = document.getElementById("repeat_eyeline");

  if (repeatPasswordInput.type === "password") {
    repeatPasswordInput.type = "text";
    repeatPasswordEyeLine.style.display = "none";
  } else {
    repeatPasswordInput.type = "password";
    repeatPasswordEyeLine.style.display = "block";
  }
}
