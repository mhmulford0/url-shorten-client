import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { useStoreState } from 'easy-peasy';

function Navbar() {
  const user = useStoreState(state => state.userInfo);
  return (
    <Box bg='#6E62FF' w='100%' p={4} color='black' mb='20px'>
      <NextLink href='/'>
        <Link mx='10px'>Home</Link>
      </NextLink>
      <NextLink href='/info/'>
        <Link mx='10px'>Link Info</Link>
      </NextLink>
    </Box>
  );
}

export default Navbar;
