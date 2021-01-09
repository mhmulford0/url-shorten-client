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
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Logout;
