import Head from 'next/head';
import fetchData from '../../hooks/getData';
import { Heading, SimpleGrid, Box, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';

function info() {
  const router = useRouter();

  const [linkData, setLinkData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loginState = useStoreState(state => state.loggedIn);
  const shortLink = router.query.shortLink;
  console.log(router.query.shortLink);

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
        .catch(err => {
          console.log(err);
        });
    }
  }, [shortLink]);
  return (
    <>
      <Head>
        <title>Link Metrics</title>
      </Head>
      {!loading ? (
        <Container centerContent>
          {linkData.linkInfo ? (
            <>
              <Heading my='10px' textStyle='heading'>
                Total Clicks: {linkData && linkData.clickInfo.length}
              </Heading>
              <Heading as='h4' size='md' my='10px' textStyle='heading'>
                Click Locations
              </Heading>
              {linkData.clickInfo.length > 0 ? (
                <SimpleGrid columns={1} spacingX='40px' spacingY='10px'>
                  {linkData.clickInfo.map(ld => {
                    return (
                      <Box key={ld.id} textAlign='center' height='40px' paddingY='5px'>
                        <p>
                          {ld.location} / {ld.date}
                        </p>
                      </Box>
                    );
                  })}
                </SimpleGrid>
              ) : (
                'No clicks yet'
              )}
            </>
          ) : (
            <>
              <Heading my='10px'>Link Not Found</Heading>
            </>
          )}
        </Container>
      ) : (
        ''
      )}
    </>
  );
}

export default info;