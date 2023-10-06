const validate = (form) => {
    let errors = {};

    if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3})+$/.test(form.email)) { 
        errors.email = "Invalid email";
    }

    if (!form.email) {
        errors.email = "Email cant be empty";
    }

    if (form.email.length > 35) {
        errors.email = "Email must be less than 25 characters"
    }

    if (form.password.length <= 5 || form.password.length >= 11) {
        errors.password = "Password must be between 6 and 10 characters";
    }

    if(!/[0-9]/.test(form.password)){
        errors.password= "The password must contain a number"
    }

    return errors;
};

export default validate;