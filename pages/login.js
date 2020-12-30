import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
  console.log(response);
};
function login() {
  return (
    <div>
      <GoogleLogin
        clientId='53708787455-dm15ra1k37b240k3ohn363akesccg0hj.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        uxMode={'popup'}
        isSignedIn={true}
      />
    </div>
  );
}

export default login;
