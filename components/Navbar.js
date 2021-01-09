import NextLink from 'next/link';
import { Link, Box } from '@chakra-ui/react';
import Logout from './Logout';
import Login from './Login';
import { useStoreState } from 'easy-peasy';

function Navbar() {
  const loginState = useStoreState(state => state.loggedIn);
  return (
    <Box
      bg='#6E62FF'
      w='100%'
      p={4}
      color='black'
      mb='20px'
      d='flex'
      alignItems='center'
      justifyContent='center'
    >
      <NextLink href='/'>
        <Link mx='10px'>Home</Link>
      </NextLink>
      <NextLink href='/info/'>
        <Link mx='10px'>Link Info</Link>
      </NextLink>
      {loginState ? <Logout /> : <Login />}
    </Box>
  );
}

export default Navbar;
