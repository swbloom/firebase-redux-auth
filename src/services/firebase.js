import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBV8JkAjziP4-BLYYqCRugw5Uo3uBUxKBc',
  authDomain: 'tag-db-45a2a.firebaseapp.com',
  databaseURL: 'https://tag-db-45a2a.firebaseio.com',
  projectId: 'tag-db-45a2a',
  storageBucket: 'tag-db-45a2a.appspot.com',
  messagingSenderId: '665927213466'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const authProvider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.database();
export default firebase;
