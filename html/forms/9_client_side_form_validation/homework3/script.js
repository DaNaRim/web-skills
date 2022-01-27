document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementsByTagName('form')[0];
  const email = document.getElementById("mail");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      showError();
    } else {
      email.setCustomValidity("");
    }
  });

  form.addEventListener('submit', function (event) {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      email.setCustomValidity("You need to enter an e-mail address.");
    } else if (email.validity.typeMismatch) {
      email.setCustomValidity("Entered value needs to be an e-mail address.");
    } else if (email.validity.tooShort) {
      email.setCustomValidity("Email should be at least ${email.minLength} characters; you entered ${email.value.length}.");
    }
    email.reportValidity();
  }

})