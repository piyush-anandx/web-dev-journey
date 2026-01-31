const form = document.getElementById("registrationForm");

const username = document.getElementById("username");
const usernameError = document.getElementById("usernameError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const confirmPassword = document.getElementById("confirmPassword");
const confirmError = document.getElementById("confirmError");

const showError = (input, errorElement) => {
  input.classList.add("error");
  input.classList.remove("success");
  errorElement.classList.add("show");
};
const showSuccess = (input, errorElement) => {
  input.classList.add("success");
  input.classList.remove("error");
  errorElement.classList.remove("show");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    username.value.trim() === "" ||
    username.value.length < 3 ||
    username.value.length > 15 || email
  ) {
    showError(username, usernameError);
  } else {
    showSuccess(username, usernameError);
  }
});
