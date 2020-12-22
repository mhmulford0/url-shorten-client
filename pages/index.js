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
        <Image src='/main.png' alt='header image' width={1093} height={978} />
        <Heading my='10px' textAlign='left' textStyle='heading'>
          Link Shortner
        </Heading>
        <LinkForm />
      </Container>
    </>
  );
}
