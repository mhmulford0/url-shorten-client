import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import LinkArea from './LinkArea';

function LinkForm() {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState("");
  const submitHandler = async () => {
    setShortLink(
      await axios.post('http://localhost:3001/', {
          longLink: link,
    }));
    
  };
  const handleChange = (e) => {
    setLink(e.target.value);
  };
  return (
    <form>
      <FormControl id="shorten-link">
        <FormLabel>Link To Shorten</FormLabel>
        <Input type="text" value={link} onChange={handleChange} />
        <FormHelperText>
          Link must be valid (starting with http or https)
        </FormHelperText>
        <Button mb="20px" onClick={submitHandler}>
          Submit
        </Button>
        <Heading as="h3" size="lg" textAlign="center">
          Result
        </Heading>
        <LinkArea shortLink={shortLink.data} />
      </FormControl>
    </form>
  );
}

export default LinkForm;
