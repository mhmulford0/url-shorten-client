import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

function Logout() {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/login');
  };
  return (
    <div>
      <Button color='#1A202C' m='10px' onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default Logout;
