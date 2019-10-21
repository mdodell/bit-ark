import {openNotification} from "../../common/components/notification/openNotification";

export const registerUser = (user) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        try {
            let createdUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.passwordOne);
            await createdUser.user.updateProfile({
                displayName: user.firstName + ' ' + user.lastName
            });
            let newUser = {
                fullName: `${user.firstName} ${user.lastName}`,
                email: user.email
            };
            await firestore.set(`users/${createdUser.user.uid}`, {...newUser});
        } catch (error) {
            openNotification('error', 'bottomRight', 'Error', error.message, 3);
        }
    };
};

export const loginWithEmail = (creds) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
        } catch (error) {
            openNotification('error', 'bottomRight', 'Error', error.message, 3);
        }
    };
};

export const loginAnonymously = () => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signInAnonymously();
        } catch (error) {
            openNotification('error', 'bottomRight', 'Error', error.message, 3);
        }
    };
};

export const forgotPassword = (form) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().sendPasswordResetEmail(form.email)
                .then(() => {
                    openNotification('success', 'bottomRight', 'Success', 'You should be receiving a password reset email soon!', 3)
                })
        } catch (error) {
            openNotification('error', 'bottomRight', 'Error', error.message, 3);
        }
    };
};