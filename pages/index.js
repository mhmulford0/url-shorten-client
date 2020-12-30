import Head from 'next/head';

import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

import LinkForm from '../components/LinkForm';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Head>
        <title>Lnk Shrt - Shorten Links</title>
      </Head>
      <Container>
        <Image src='/main.png' alt='header image' width={1093} height={978} />
        <Heading my='10px' textAlign='left' textStyle='heading'>
          Lnk Shrt
        </Heading>
        <LinkForm />
      </Container>
    </>
  );
}
