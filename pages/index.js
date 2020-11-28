import Head from 'next/head';

import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import LinkForm from '../components/LinkForm';


export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Heading my="10px" textAlign="center">
          Link Shortner
        </Heading>
        <LinkForm />
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}