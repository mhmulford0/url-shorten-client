import axios from 'axios';
import Navbar from '../../components/Navbar';
import { Container, Heading } from '@chakra-ui/react';

function shortLink({ linkData }) {
  return (
    <>
      <Navbar />
      <Container textAlign="center">
        <Heading my="10px">
          Short Link Clicks: {linkData ? linkData.length : ''}
        </Heading>
        <Heading as="h4" size="md">
          Click Locations
        </Heading>
        {!linkData.error &&
          linkData.map((ld) => {
            return <p key={ld.id}>{ld.location}</p>;
          })}
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