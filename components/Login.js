import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
//import { useStoreActions } from 'easy-peasy';
import { useAuth0 } from '@auth0/auth0-react';
function Login() {
  const router = useRouter();
  //const login = useStoreActions(actions => actions.login);
  const { loginWithPopup } = useAuth0();
  const handleClick = () => {
    loginWithPopup();
  };
  return <Button onClick={handleClick}>Login</Button>;
}

export default Login;
