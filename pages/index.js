import Head from 'next/head';

import { Container, Heading, Flex, Text, Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Lnk Shrt - Shorten Links</title>
      </Head>
      <Container maxW='lg' alignContent='center'>
        <Heading my='10px' textAlign='center' textStyle='heading'>
          Lnk Shrt
        </Heading>
        <Heading as='h4' size='md' my='10px' textAlign='center' textStyle='heading' color='#3C4B67'>
          Big Links Come In Small Packages
        </Heading>
        <Image src='/main.png' alt='header image' width={1093} height={978} />
        <Heading as='h4' size='md' my='10px' textAlign='center' textStyle='heading' color='#3C4B67'>
          Get Data About Who's Clicking Your Link
        </Heading>
        <Flex direction={['column', 'column', 'row']} mb={40} mt={[40, 40, 0]}>
          <Box flex='1' mx={[0, 2]} my={[4, 4, 0]}>
            <Image src='/img2.jpg' height={480} width={640} />
            <Text textAlign='center'>Gain Insight, See Where Your Vistors Are From.</Text>
          </Box>
          <Box flex='1' mx={[0, 2]} my={[4, 4, 0]}>
            <Image src='/img1.jpg' height={480} width={640} />
            <Text textAlign='center'>Track Engagement </Text>
          </Box>
          <Box flex='1' mx={[0, 2]} my={[4, 4, 0]}>
            <Image src='/img3.jpg' height={480} width={640} />
            <Text textAlign='center'>Understand Who Your Users Are</Text>
          </Box>
        </Flex>
      </Container>
      <Flex
        w='100%'
        bg='#3A25F8'
        color='white'
        justifyContent='center'
        alignItems='center'
        alignContent='center'
        h='220px'
        mb='120px'
        wrap='wrap'
      >
        <Heading as='h3' size='lg' w='100%' textAlign='center' mb='15px'>
          More than a link shortener
        </Heading>
        <Button color='#1A202C' onClick={() => router.push('/signup')}>
          Sign Up Now
        </Button>
      </Flex>
    </>
  );
}
