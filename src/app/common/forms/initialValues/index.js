import shortid from 'shortid';

export const loginInitialValues = {
    email: '',
    password: ''
};

export const signUpInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    passwordOne: '',
    passwordTwo: ''
};

export const forgotPasswordInitialValues = {
    email: ''
};

export const createLinkInitialValues = {
    longUrl: '',
    shortUrl: shortid.generate()
};