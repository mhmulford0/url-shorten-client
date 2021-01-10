import NextLink from 'next/link';
import { Link, Box } from '@chakra-ui/react';
import Logout from './Logout';
import Login from './Login';
import { useStoreState } from 'easy-peasy';
import styled from '@emotion/styled';
import { FaHome, FaServer, FaRegEdit } from 'react-icons/fa';

function Navbar() {
  const loginState = useStoreState(state => state.loggedIn);
  const StyledNav = styled(Box)`
    background-color: #6e62ff;
    width: 100%;
    position: fixed;
    bottom: 0;
    margin-top: 20px;
    align-items: center;
    display: flex;
    color: white;
    height: 70px;
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
        <Link>
          <FaHome size={32} />
        </Link>
      </NextLink>

      {loginState ? (
        <>
          <NextLink href='/dashboard/'>
            <Link>
              <FaServer size={32} />
            </Link>
          </NextLink>
          <NextLink href='/dashboard/short'>
            <Link>
              <FaRegEdit size={32} />
            </Link>
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
