import Head from 'next/head';
import fetchData from '../../hooks/getData';
import { Heading, SimpleGrid, Box, Container } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

function shortLink(linkData) {
  return (
    <>
      <Head>
        <title>Link Metrics</title>
      </Head>
      <Container centerContent>
        {!linkData.error ? (
          <>
            <Heading my='10px' textStyle='heading'>
              Total Clicks: {linkData && linkData.clickInfo.length}
            </Heading>
            <Link href={linkData.linkInfo.longLink}>Original Link</Link>
            Short Link Code: {linkData.linkInfo.shortLink}
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
          <Heading my='10px'>Link Not Found</Heading>
        )}
      </Container>
    </>
  );
}

export default shortLink;

export async function getServerSideProps(context) {
  const { shortLink } = context.params;
  let linkData = {};

  try {
    const info = await fetchData().get(`/${shortLink}/info`);
    linkData = info.data;
  } catch (error) {
    linkData = { error: 'There was an error with your request' };
  }

  return {
    props: linkData,
  };
}
