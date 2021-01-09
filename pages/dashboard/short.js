import Head from 'next/head';

import { Container, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import LinkForm from '../../components/LinkForm';
import Image from 'next/image';
import fetchData from '../../hooks/getData';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(idToken => {
            fetchData()
              .post('/linkInfo', { idToken: idToken })
              .then(() => setLoading(false))
              .catch(() => router.push('/login'));
          })
          .catch(error => {
            console.log(error.response);
          });
      } else {
        router.push('/login');
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
          <Container>
            <Image src='/main.png' alt='header image' width={1093} height={978} />
            <Heading my='10px' textAlign='left' textStyle='heading'>
              Lnk Shrt
            </Heading>
            <LinkForm />
          </Container>
        </>
      )}
    </div>
  );
}
