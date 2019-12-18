import validate from "validate.js";

export default function handleValidation(fieldName, fieldValue) {

    let EmailValidation = {
        EmailValidation: {
            presence: {
                allowEmpty: false,
                message: fieldName + ' can\'t be blank',
            },
            length: {
                maximum: 20,
                message: fieldName + ' must be at most 20 characters'
            },
            email: {
                message: 'Invalid email',
            },
        },
    };

    let PasswordValidation = {
        PasswordValidation: {
            presence: {
                allowEmpty: false,
                message: fieldName + ' can\'t be blank',
            },
            format: {
                pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
                message: "invalid password. use complex 8 characters"
            },
            length: {
                maximum: 20,
                message: fieldName + ' must be at most 20 characters'
            },
        },
    };

    if (fieldName === 'email') {
        return validate({EmailValidation: fieldValue}, EmailValidation);
    } else if (fieldName === 'password') {
        return validate({PasswordValidation: fieldValue}, PasswordValidation);
    }
};
