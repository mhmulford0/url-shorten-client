import { useRouter } from 'next/router';
import GoogleLogin from 'react-google-login';

import { useStoreActions } from 'easy-peasy';

function Login() {
  const router = useRouter();
  const login = useStoreActions(actions => actions.login);

  const handleLogin = res => {
    login({ id: res.googleId, name: res.profileObj.name, email: res.profileObj.email });
    router.push('/');
  };
  const handleFailure = res => {
    console.log(res);
  };
  return (
    <div>
      <GoogleLogin
        clientId='53708787455-dm15ra1k37b240k3ohn363akesccg0hj.apps.googleusercontent.com'
        buttonText='Login With Google'
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        uxMode={'popup'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
