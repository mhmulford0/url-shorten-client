import fetchData from '../hooks/getData';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { useStoreActions } from 'easy-peasy';

function Logout() {
  const logout = useStoreActions(actions => actions.logout);
  const router = useRouter();
  const handleLogout = () => {
    fetchData()
      .get('/auth/logout')
      .then(() => {
        logout();
        router.push('/login');
      });
  };
  return (
    <div>
      <Button color='#1A202C' onClick={handleLogout} m='10px'>
        Logout
      </Button>
    </div>
  );
}

export default Logout;
