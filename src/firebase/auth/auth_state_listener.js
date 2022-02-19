import {auth, onAuthStateChanged} from '../configuraciones.js';
import {currentUser} from '../../view/timeline.js';
import {showHome} from '../../view/signin.js';
import {currentUserProfile} from '../../view/profile.js';
import {currentUpdateUser} from '../../view/updateUser.js';


export const onAuth = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      const uid = user.uid;
      const name = user.displayName;
      const photo = user.photoURL;
      const email = user.email;
      currentUser(uid, name, photo);
      showHome();
      currentUserProfile(uid, name, photo);
      currentUpdateUser(uid, email);
    }
  });
};
