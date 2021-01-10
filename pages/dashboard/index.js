import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStoreState } from 'easy-peasy';
import { Box, SkeletonCircle, SkeletonText, Container, Heading } from '@chakra-ui/react';

import Head from 'next/head';
import firebase from 'firebase/app';
import 'firebase/auth';
import fetchData from '../../hooks/getData';
function dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState([]);
  const [idToken, setIdToken] = useState(null);
  const loginState = useStoreState(state => state.loggedIn);
  useEffect(() => {
    setLoading(true);
    if (!loginState) {
      router.replace('/login');
    } else {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user && loginState) {
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(idToken => {
              setIdToken(idToken);
              fetchData()
                .post('/user', { idToken: idToken })
                .then(res => {
                  setLoading(false);
                  setLinks(res.data);
                })
                .catch(() => router.replace('/login'));
            })
            .catch(error => {
              console.log(error.response);
            });
        } else {
          router.replace('/login');
        }
      });
    }
  }, [loginState]);

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
          <Container mt={[50, 50, 100]} padding='6' boxShadow='lg' bg='#F5F5F5'></Container>
        </>
      )}
    </div>
  );
}

export default dashboard;
