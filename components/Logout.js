import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
//import { useStoreActions } from 'easy-peasy';

function Logout() {
  const router = useRouter();
  //const login = useStoreActions(actions => actions.login);

  const handleClick = () => {
    router.push('https://lnkshrt.app/auth/logout');
  };
  return <Button onClick={handleClick}>Logout</Button>;
}

export default Logout;
