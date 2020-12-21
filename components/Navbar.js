import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg='tomato' w='100%' p={4} color='white' mb='20px'>
      <NextLink href='/'>
        <Link mx='10px'>Home</Link>
      </NextLink>
      <NextLink href='/info/'>
        <Link>Link Info</Link>
      </NextLink>
    </Box>
  );
}

export default Navbar;
