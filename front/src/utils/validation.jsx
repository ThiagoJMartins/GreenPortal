const validate = (form) => {
  let errors = {};
  let regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!regexEmail.test(form.email)) {
    errors.email = "Invalid email";
  }

  if (!form.email) {
    errors.email = "Email cant be empty";
  }

  if (form.email.length > 35) {
    errors.email = "Email must be less than 25 characters";
  }

  if (form.password.length < 6 || form.password.length > 10) {
    errors.password = "Password must be between 6 and 10 characters";
  }

  if (!/\d/.test(form.password)) {
    errors.password = "The password must contain a number";
  }

  return errors;
};

export default validate;
