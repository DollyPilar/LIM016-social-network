import {auth, signInWithEmailAndPassword} from '../configuraciones.js';
import {onAuth} from './auth_state_listener.js';
import {showError} from '../../view/signin.js';
import {currentUpdateUser} from '../../view/updateUser.js';


export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        const emailVerified = userCredential.user.emailVerified;
        const name = userCredential.user.displayName;
        const email = userCredential.user.email;

        if (emailVerified == true && name == null) {
          window.location.hash = '#/update';
          currentUpdateUser(user, email);
        } else if (emailVerified == false) {
          alert('Verfica tu correo para disfrutar de nuestro contenido');
        } else {
          onAuth();
        }
      })
      .catch((error) => {
        showError(error.code);
      });
};
