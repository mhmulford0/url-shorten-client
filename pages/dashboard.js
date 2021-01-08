import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import fetchData from '../hooks/getData';
function dashboard() {
  const router = useRouter();
  const [idToken, setIdToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(idToken => {
            setIdToken(idToken);
            fetchData()
              .get('/linkInfo')
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
      {loading && (
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='6' noOfLines={12} spacing='6' />
        </Box>
      )}
    </div>
  );
}

export default dashboard;
