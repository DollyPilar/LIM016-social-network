import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from '../configuraciones.js';
import {showErrorRegister} from '../../view/signup.js';
import {backSignIn} from '../../view/signup.js';
import {saveUser} from '../firestore/firestore-add.js';
import {onAuth} from './auth_state_listener.js';


export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userID = userCredential.user.uid;
        const displayName =userCredential.user.displayName;
        const email = userCredential.user.email;
        const photoURL = userCredential.user.photoURL;
        saveUser(displayName, email, photoURL, userID);
        userVerification()
            .then(() => {
              alert('Correo de verificación enviado');
              backSignIn();
            });
      })
      .catch((error) => {
        const errorCode = error.code;
        showErrorRegister(errorCode);
      });
};

export const userVerification = () => {
  return sendEmailVerification(auth.currentUser);
};

export const updateUserName = (name) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
  }).then(() => {
    onAuth();
  }).catch((error) => {
    console.error(error.code);
    alert('Lo sentimos, se ha producido un error');
  });
};
