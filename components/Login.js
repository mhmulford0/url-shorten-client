import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
//import { useStoreActions } from 'easy-peasy';

function Login() {
  const router = useRouter();
  //const login = useStoreActions(actions => actions.login);

  const handleClick = () => {
    router.push('https://lnkshrt.app/auth');
  };
  return <Button onClick={handleClick}>Login</Button>;
}

export default Login;
