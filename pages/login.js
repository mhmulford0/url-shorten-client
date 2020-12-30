import { Stack } from '@chakra-ui/react';
import Login from '../components/login';

function login() {
  return (
    <div>
      <Stack spacing={4} direction='column' align='center'>
        <Login />
      </Stack>
    </div>
  );
}

export default login;
