import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStoreState } from 'easy-peasy';
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { useStoreActions } from 'easy-peasy';
import Head from 'next/head';
import fetchData from '../../hooks/getData';
import LinkDashboard from '../../components/LinkDashboard';

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
  }, [router]);

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
        <LinkDashboard links={links} />
      )}
    </div>
  );
}

export default dashboard;
