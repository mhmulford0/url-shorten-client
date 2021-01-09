import NextLink from 'next/link';
import { Link, Box } from '@chakra-ui/react';
import Logout from './Logout';
import Login from './Login';
import { useStoreState } from 'easy-peasy';
import styled from '@emotion/styled';
function Navbar() {
  const loginState = useStoreState(state => state.loggedIn);
  const StyledNav = styled(Box)`
    background-color: #6e62ff;
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-content: center;
    color: white;
    height: 60px;
    a {
      height: 100%;
      padding: 20px;
      border-right: 1px solid black;
    }
    a:hover {
      background-color: #5747ff;
      text-decoration: none;
    }
  `;
  return (
    <StyledNav>
      <NextLink href='/'>
        <Link>Home</Link>
      </NextLink>

      {loginState ? (
        <>
          <NextLink href='/dashboard/'>
            <Link>Dashboard</Link>
          </NextLink>
          <NextLink href='/dashboard/short'>
            <Link>Shorten</Link>
          </NextLink>
          <Box d='flex' w='100%' justifyContent='flex-end'>
            <Logout />
          </Box>
        </>
      ) : (
        <Box d='flex' w='100%' justifyContent='flex-end'>
          <Login />
        </Box>
      )}
    </StyledNav>
  );
}

export default Navbar;
