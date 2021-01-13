import Head from 'next/head';
import fetchData from '../../hooks/getData';
import { Box, SkeletonText, SkeletonCircle } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import Info from '../../components/Info';
function info() {
  const router = useRouter();

  const [linkData, setLinkData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loginState = useStoreState(state => state.loggedIn);
  const shortLink = router.query.shortLink;
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!loginState) {
      router.replace('/login');
    } else {
      fetchData()
        .post(`/${shortLink}/info`)
        .then(res => {
          setLinkData(res.data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [shortLink]);

  return (
    <>
      {loading && !error ? (
        <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='6' noOfLines={12} spacing='6' />
        </Box>
      ) : (
        <>
          <Head>
            <title>Link Metrics</title>
          </Head>
          <Info linkData={linkData} />
        </>
      )}
    </>
  );
}

export default info;
