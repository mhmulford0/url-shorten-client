import React from 'react';
import { Heading, Container } from '@chakra-ui/react';
import LinkForm from './LinkForm';
function ShortenContainer({ idToken }) {
  return (
    <>
      <Heading my='10px' textAlign='center' textStyle='heading'>
        Shorten Your Link
      </Heading>
      <Container mt={[50, 50, 100]} padding='6' boxShadow='lg' bg='#F5F5F5'>
        <LinkForm idToken={idToken} />
      </Container>
    </>
  );
}

export default ShortenContainer;
