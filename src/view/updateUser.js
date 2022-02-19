// import {
//   updateProfile, updateUser,
// } from '../firebase/firestore/firestore-add.js';
import {updateUserName} from '../firebase/auth/auth_signup_password.js';


let userUpdateProfile;
let emailUpdateProfile;

export const currentUpdateUser = (user, email) => {
  userUpdateProfile = user;
  emailUpdateProfile = email;
  console.log(userUpdateProfile);
};

const updateUserProfile = () => {
  const UpdateProfile = `
  <div class="conteinerGeneral">
    <div class="updateBoX">

      <h2 class="title">Editar perfil</h2>
      <form>
        <div id="formProfile" class="formProfile">
          <div class="formProfileControl">
          <label>Cambiar foto de perfil
          </label>
          <input type="file" id="userPhoto">
          </div>
          <div class="form-control">
           <input type="text" id="name" placeholder=" Nombre de usuario">
          </div>
          <div class="form-control">
            <p> ${emailUpdateProfile} </p>
          </div>

          <button id="btnSaveProfile" class="button">Actualizar</button>
        </div>
      </form>
    </div>
  </div>`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = UpdateProfile;

  divElemt.querySelector('#btnSaveProfile')
      .addEventListener('click', registerUser);

  return divElemt;
};

export default updateUserProfile;

export const registerUser = (e) => {
  e.preventDefault();

  // const name = e.target.closest('form').querySelector('#name').value;
  const displayName = e.target.closest('form').querySelector('#name').value;

  // updateUser(name, displayName);
  // updateProfile(userProfile);
  updateUserName(displayName);

  console.log(displayName, 'actualizó su perfil');
};
