import Head from 'next/head';

import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import LinkForm from '../components/LinkForm';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Heading my='10px' textAlign='center' textStyle='heading'>
          Link Shortner
        </Heading>
        <Image src='/main.png' alt='header image' width={1093} height={978} />

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
