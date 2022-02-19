import {provider, auth, sendEmailVerification} from '../configuraciones.js';


/*export const EmailVerification = () => sendEmailVerification(auth.currentUser);
    console.log('Email verification sent!');*/

    export const emailVerification = () => {
      return sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('Email verification sent!');
          })
          .catch((error) => {
            console.log(error);
          });
    }; 



