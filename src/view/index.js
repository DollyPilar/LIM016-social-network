import Welcome from './welcome.js';
import SignIn from './signin.js';
import SignUp from './signup.js';
import {profile} from './profile.js';
import Different from './404.js';
import updateUserProfile from './updateUser.js';
import Nav from './nav.js';
import {timeline} from './timeline.js';
import SignOut from './signout.js';


const components = {
  welcome: Welcome,
  signIn: SignIn,
  signUp: SignUp,
  nav: Nav,
  profile: profile,
  update: updateUserProfile,
  timeLine: timeline,
  different: Different,
  signOut: SignOut,
};

export {components};
