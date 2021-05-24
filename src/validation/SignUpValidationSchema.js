import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required.')
        .matches(/^[A-Za-z\d]+$/, "First name can only have alpha-numeric characters."),
    lastName: Yup.string()
        .required('Last name is required.')
        .matches(/^[A-Za-z\d]+$/, "Last name can only have alpha-numeric characters."),
    email: Yup.string()
        .required('Email is required.')
        .email('Please enter a valid email address'),
    password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/^[A-Za-z\d@$!%*#?&_]+$/, 'Password can only have alpha-numeric and special characters.'),
    confirmPassword: Yup.string()
        .required('Confirm password is required.')
        .oneOf([Yup.ref('password'), null], 'Confirm password must match the password field.')
});