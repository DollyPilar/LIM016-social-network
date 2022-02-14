const showHome = () => {
  window.location.hash = '#/home';
};

const showProfile = () => {
  window.location.hash = '#/profile';
};

const showSignOut = () => {
  window.location.hash = '#/signOut';
};

const nav = () => {
  const showNav = `


    <nav class="tab-nav-container">
      <div class="tabTitle">
        <p>Queer Place</p>
      </div>
      <div class="tab">
        <i id="home" class="fas fa-home fasNav"></i>
      </div>  
      <div class="tab">
        <i id="profile" class="fas fa-user fasNav"></i>
      </div>
      <div class="tab">
        <i id="signOut" class="fas fa-sign-in-alt fasNav"></i>
      </div>
    </nav>
    `;

  const navElemt = document.createElement('div');
  navElemt.innerHTML = showNav;

  navElemt.querySelector('#home').addEventListener('click', showHome);

  navElemt.querySelector('#profile').addEventListener('click', showProfile);

 // navElemt.querySelector('#search').addEventListener('click', showSearch);

  navElemt.querySelector('#signOut').addEventListener('click', showSignOut);

  return navElemt;
};
export default nav;
