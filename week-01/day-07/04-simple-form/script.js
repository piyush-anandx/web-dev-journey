const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
     e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  let emailValid = false;
  if (email.includes("@") && email.indexOf(".") > email.indexOf("@")) {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
    emailError.classList.remove("show");
    emailValid = true;
  } else {
    emailInput.classList.remove("success");
    emailInput.classList.add("error");
    emailError.classList.add("show");
    emailValid = false;
  }
  let passwordValid = false;
  if (password.length >= 8) {
    passwordInput.classList.remove("error");
    passwordInput.classList.add("success");
    passwordError.classList.remove("show");
    passwordValid = true;
  } else {
    passwordInput.classList.remove("success");
    passwordInput.classList.add("error");
    passwordError.classList.add("show");
    passwordValid = false;
  }

  if (emailValid && passwordValid) {
    successMsg.classList.add("show");
    setTimeout(() => {
      emailInput.value = "";
      passwordInput.value = "";
      emailInput.classList.remove("success");
      passwordInput.classList.remove("success");
      successMsg.classList.remove("show");
    }, 2000);
  } else {
    successMsg.classList.remove("show");
  }
});
