import { auth, authProvider, database } from '../services/firebase.js';
import pick from 'lodash/pick';

export const signIn = () => {
    auth.signInWithPopup(authProvider);

    return {
        type: 'AWAITING_AUTH_RESPONSE'
    }
}

export const signOut = () => {
    auth.signOut();

    return {
        type: 'AWAITING_AUTH_RESPONSE'
    }
}

export const signedIn = (user) => {
    return {
        type: 'SIGN_IN',
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL
    }
}

export const signedOut = () => {
    return {
        type: 'SIGN_OUT',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
    }
}

export const startListeningToAuth = () => {
    return (dispatch, getState) => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(signedIn(user));
                database.ref('users')
                    .child(user.uid)
                    .set(pick(user, ['displayName', 'email', 'uid', 'photoURL']));
            } else {
                dispatch(signedOut());
            }
        });
    }
}