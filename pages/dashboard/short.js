import Head from 'next/head';

import { SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import fetchData from '../../hooks/getData';
import { useStoreState } from 'easy-peasy';
import ShortenContainer from '../../components/ShortenContainer';

export default function Home() {
  const router = useRouter();
  const loginState = useStoreState(state => state.loggedIn);
  const [loading, setLoading] = useState(true);
  const [idToken, setIdToken] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user && loginState) {
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(idToken => {
            setIdToken(idToken);
            fetchData()
              .post('/auth', { idToken: idToken })
              .then(() => setLoading(false))
              .catch(() => router.push('/login'));
          })
          .catch(error => {
            console.log(error.response);
          });
      } else {
        router.replace('/login');
      }
    });
  }, []);
  return (
    <div>
      {loading ? (
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='6' noOfLines={12} spacing='6' />
        </Box>
      ) : (
        <>
          <Head>
            <title>Lnk Shrt - Shorten Links</title>
          </Head>
          <ShortenContainer idToken={idToken} />
        </>
      )}
    </div>
  );
}
