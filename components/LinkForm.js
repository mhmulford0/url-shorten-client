import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
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
        })
    
    );
    
  };
  const handleChange = (e) => {
    setLink(e.target.value);
  };
  return (
    <FormControl id="shorten-link">
      <FormLabel>Link To Shorten</FormLabel>
      <Input type="text" value={link} onChange={handleChange} />
      <FormHelperText>
        Link must be valid (starting with http or https)
      </FormHelperText>
      <Button mb="20px" onClick={submitHandler}>
        Submit
      </Button>
      <LinkArea shortLink={shortLink}/>
    </FormControl>
  );
}

export default LinkForm;
