document.addEventListener('DOMContentLoaded', function () {
  /*
    Inside the contained code, we check whether the email input's validity.typeMismatch property returns true, meaning
    that the contained value doesn't match the pattern for a well-formed email address. If so, we call the
    setCustomValidity() method with a custom message which is displayed by calling reportValidity().
    This renders the input invalid, so that when you try to submit the form, submission

    If the validity.typeMismatch property returns false, we call the setCustomValidity() method an empty string.
    This renders the input valid, so the form will submit.
     */
  const email = document.getElementById("mail");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
      email.reportValidity();
    } else {
      email.setCustomValidity("");
    }
  });
})