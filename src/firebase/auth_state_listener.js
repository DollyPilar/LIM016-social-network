import {auth, onAuthStateChanged} from './configuraciones.js';
import {profileUser} from './auth_get_user_profile.js';


export const onAuth = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid;
      const currentUser = auth.currentUser;

      profileUser(currentUser);
    } else {
      const uid = null;
      console.log('El usuario es:', uid);
    }
  });
};