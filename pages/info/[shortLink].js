import axios from 'axios';
import Navbar from '../../components/Navbar';
import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react';

function shortLink({ linkData }) {
  console.log(linkData);
  return (
    <>
      <Navbar />

      <Container textAlign="center">
        {!linkData.error ? (
          <>
            <Heading my="10px">
              Total Link Clicks: {linkData ? linkData.clickInfo.length : ''}
            </Heading>
            <Heading as="h4" size="md" my="25px">
              Original Link Info
            </Heading>
            <Box w="100%">
              Original Link: {linkData.linkInfo.longLink}
              <br />
              Short Link Code: {linkData.linkInfo.shortLink}
            </Box>
            <Heading as="h4" size="md" my="25px">
              Click Locations
            </Heading>
            <SimpleGrid columns={1} spacingX="40px" spacingY="10px">
              {linkData.clickInfo.map((ld) => {
                return (
                  <Box textAlign="center" height="40px" paddingY="5px">
                    <p key={ld.id}>
                      {ld.location} / {ld.date}
                    </p>
                  </Box>
                );
              })}
            </SimpleGrid>
          </>
        ) : (
          <Heading my="10px">Link Not Found</Heading>
        )}
      </Container>
    </>
  );
}

export default shortLink;

export async function getServerSideProps(context) {
  const { shortLink } = context.params;
  let linkData;

  try {
    linkData = await (
      await axios.get(`http://localhost:3001/${shortLink}/info`)
    ).data;
  } catch (error) {
    linkData = { error: 'There was an error with your request' };
  }

  return {
    props: { linkData },
  };
}
