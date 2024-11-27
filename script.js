document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailMessage = document.createElement("p");
  const passwordMessage = document.createElement("p");

  emailMessage.style.color = "red";
  passwordMessage.style.color = "red";

  emailInput.insertAdjacentElement("afterend", emailMessage);
  passwordInput.insertAdjacentElement("afterend", passwordMessage);

  function validateEmail() {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
      emailMessage.textContent = "O e-mail deve ser no formato: nome@email.com";
      return false;
    } else {
      emailInput.style.borderColor = "#a87b05";
      emailMessage.textContent = "";
      return true;
    }
  }

  function validatePassword() {
    const numberPattern = /\d/;
    const uppercasePattern = /[A-Z]/;
    const specialCharPattern = /[@$!%*?&]/;

    if (
      passwordInput.value.length >= 8 &&
      numberPattern.test(passwordInput.value) &&
      uppercasePattern.test(passwordInput.value) &&
      specialCharPattern.test(passwordInput.value)
    ) {
      passwordInput.style.borderColor = "#a87b05";
      passwordMessage.textContent = "";
      return true;
    } else {
      passwordInput.style.borderColor = "red";
      passwordMessage.textContent =
        "A senha deve ter pelo menos 8 caracteres, incluindo um número, uma letra maiúscula e um caractere especial.";
      return false;
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      form.submit();
    }
  });

  emailInput.addEventListener("blur", validateEmail);
  passwordInput.addEventListener("blur", validatePassword);
});
