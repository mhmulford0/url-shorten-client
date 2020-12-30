import { GoogleLogout } from 'react-google-login';

const handleLogout = e => {
  console.log(e);
};

function logout() {
  return (
    <div>
      <GoogleLogout
        clientId='53708787455-dm15ra1k37b240k3ohn363akesccg0hj.apps.googleusercontent.com'
        buttonText='Logout'
        onLogoutSuccess={handleLogout}
      />
    </div>
  );
}

export default logout;
