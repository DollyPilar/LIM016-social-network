export const update= () => {
  window.location.hash = '#/update';
};

let userProfile;
let nameProfile;
let photoProfile;

export const currentUserProfile = (user, name, photo) => {
  userProfile = user;
  nameProfile = name;
  photoProfile = photo;
  console.log(userProfile);
};

export const profile = () => {
  const showProfile = ` 
  <div>
    <h2> Perfil</h2>
  </div>
  <div>
    <button id="btnEditProfile" class="button">Editar perfil</button>
  </div>
  <div>
    <p>${nameProfile}</p>
    <p>${photoProfile}</p>
  </div>`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = showProfile;

  divElemt.querySelector('#btnEditProfile').addEventListener('click', update);

  return divElemt;
};
