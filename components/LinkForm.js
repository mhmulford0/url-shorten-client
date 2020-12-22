import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import LinkArea from './LinkArea';
import StyledButton from '../styles/StyledButton';
function LinkForm() {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const submitHandler = async () => {
    setShortLink(
      await axios.post('https://link-shrtnr.herokuapp.com/', {
        longLink: link,
      })
    );
  };
  const handleChange = e => {
    setLink(e.target.value);
  };
  return (
    <form>
      <FormControl id='shorten-link' mb='30px'>
        <FormLabel>Link To Shorten</FormLabel>
        <Input type='text' value={link} onChange={handleChange} required />
        <FormHelperText mb='10px'>Link must be valid (starting with http or https)</FormHelperText>
        <StyledButton mb='20px' onClick={submitHandler} size='lg'>
          Submit
        </StyledButton>
        <Heading as='h3' size='lg' textAlign='left' textStyle='heading' mt='15px'>
          Result
        </Heading>
        <LinkArea shortLink={shortLink.data} />
      </FormControl>
    </form>
  );
}

export default LinkForm;
