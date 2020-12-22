import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';
import Navbar from '../../components/Navbar';

export default function index() {
  const [linkInfo, setLinkInfo] = useState('');
  const router = useRouter();

  const handleChange = e => {
    setLinkInfo(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    router.push(`/info/${linkInfo}`);
  };
  return (
    <>
      <Navbar />
      <Container>
        <Heading my='10px' textAlign='center'>
          Link Info
        </Heading>
        <form>
          <FormControl id='link-info'>
            <FormLabel>Short Link</FormLabel>
            <Input type='text' value={linkInfo} onChange={handleChange} />
            <FormHelperText>Must be the short link code provided</FormHelperText>
            <Button mb='20px' onClick={submitHandler}>
              Get Info
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
}
