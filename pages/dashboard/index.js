import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStoreState } from 'easy-peasy';
import { Box, SkeletonCircle, SkeletonText, Container, Heading } from '@chakra-ui/react';
import { useStoreActions } from 'easy-peasy';
import Head from 'next/head';
import fetchData from '../../hooks/getData';
import Link from 'next/link';

function dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);
  const logout = useStoreActions(actions => actions.logout);
  const loginState = useStoreState(state => state.loggedIn);
  useEffect(() => {
    setLoading(true);
    if (!loginState) {
      router.replace('/login');
    } else {
      fetchData()
        .post('/user')
        .then(res => {
          setLoading(false);
          setLinks(res.data.data);
        })
        .catch(() => {
          logout();
          router.replace('/login');
        });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Lnk Shrt - Shorten Links</title>
      </Head>

      {loading ? (
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='6' noOfLines={12} spacing='6' />
        </Box>
      ) : (
        <>
          <Heading my='10px' textAlign='center' textStyle='heading'>
            Your Links
          </Heading>
          <Container mt={[50, 50, 100]} mb={[40, 40, 0]} padding='6' boxShadow='lg' bg='#F5F5F5'>
            <Box
              d='flex'
              alignContent='center'
              alignItems='flex-end'
              justifyContent='space-between'
              mb='10px'
              borderBottom='1px solid black'
              padding={2}
            >
              <span style={{ fontWeight: 'bold' }}>ID</span>
              <span style={{ fontWeight: 'bold' }}>Original Link</span>
              <span style={{ fontWeight: 'bold' }}>Link Code</span>
              <span style={{ fontWeight: 'bold' }}>Link Stats</span>
            </Box>

            {links.map(link => {
              return (
                <Box
                  d='flex'
                  justifyContent='space-between'
                  mb='10px'
                  borderBottom='1px solid black'
                  padding={2}
                  key={link.id}
                  textAlign='center'
                >
                  <span>{link.id}</span>
                  <span style={{ textDecoration: 'underline', color: 'blue' }}>
                    <Link href={link.longLink}>Original Link</Link>
                  </span>
                  <span>{link.shortLink}</span>
                  <span>
                    <Link href={`dashboard/info/?shortLink=${link.shortLink}`}>Stats</Link>
                  </span>
                </Box>
              );
            })}
          </Container>
        </>
      )}
    </div>
  );
}

export default dashboard;
