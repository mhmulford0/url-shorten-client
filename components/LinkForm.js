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

function LinkForm() {
  const [link, setLink] = useState('');

  const submitHandler = async () => {
    const shortLink = await axios.post('http://localhost:3001/', {
      longLink: link,
    });
    console.log(shortLink.data);
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
      <Button onClick={submitHandler}>Submit</Button>
    </FormControl>
  );
}

export default LinkForm;
