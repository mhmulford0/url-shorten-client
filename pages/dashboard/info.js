import Head from 'next/head';
import fetchData from '../../hooks/getData';
import { Heading, SimpleGrid, Box, Container, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';

function info() {
  const router = useRouter();

  const [linkData, setLinkData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loginState = useStoreState(state => state.loggedIn);
  const shortLink = router.query.shortLink;

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
          setLinkData(true);
          console.log(err);
        });
    }
  }, [shortLink]);

  const deleteLink = () => {
    fetchData().delete(`/${shortLink}`).then(router.replace('/dashboard'));
  };
  return (
    <>
      <Head>
        <title>Link Metrics</title>
      </Head>
      {!loading ? (
        <Container padding='6' boxShadow='lg' bg='#F5F5F5' centerContent textAlign='right'>
          {linkData.linkInfo ? (
            <>
              <Heading my='10px' textStyle='heading'>
                Total Clicks: {linkData && linkData.clickInfo.length}
              </Heading>
              {linkData.clickInfo.length > 0 ? (
                <>
                  <Heading as='h4' size='md' my='10px' textStyle='heading'>
                    Click Locations / Date
                  </Heading>
                  <Button mb='15px' color='#1A202C' bg='#FFFFFF' onClick={deleteLink}>
                    Delete Link
                  </Button>
                  <SimpleGrid columns={1} spacingX='40px' spacingY='10px'>
                    {linkData.clickInfo.map(ld => {
                      return (
                        <Box
                          key={ld.id}
                          textAlign='center'
                          height='40px'
                          paddingY='5px'
                          borderBottom='1px solid black'
                        >
                          <p>
                            {ld.location} / {ld.date}
                          </p>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </>
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
