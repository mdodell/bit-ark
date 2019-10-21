import * as yup from "yup";
import { isHttpsUri } from 'valid-url';
import { emailReGex } from "../../constants";

export const loginSchema = yup.object().shape({
    email: yup.string().matches(new RegExp(emailReGex),'Must be a email address!').required('Required!'),
    password: yup.string().required('Required!')
});

export const signUpSchema = yup.object().shape({
    firstName: yup.string().required('Required!'),
    lastName: yup.string().required('Required!'),
    email: yup.string().matches(new RegExp(emailReGex),'Must be a email address!').required('Required!'),
    passwordOne: yup.string().required('Required!').min(6, 'Please try a longer password...'),
    passwordTwo: yup.string().required('Required!').test('passwords-match', 'Passwords must match!', function(value) {
        return this.parent.passwordOne === value
    })
});

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().matches(new RegExp(emailReGex),'Must be a email address!').required('Required!')
});

export const createLinkSchema = yup.object().shape({
    longUrl: yup.string().required('Required!').test('is-valid-url', 'Must be a valid HTTPS URL!', function(value){
        return isHttpsUri(value);
    }),
    shortUrl: yup.string().required('Required').test('is-valid-url', 'Must be a valid HTTPS URL!', function(value) {
        return isHttpsUri("https://bit-ark.firebaseapp.com/" + value)
    })
});