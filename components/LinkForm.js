import { FormControl, FormLabel, FormHelperText, Input, Heading } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import fetchData from '../hooks/getData';
import { useState } from 'react';

import LinkArea from './LinkArea';
import StyledButton from '../styles/StyledButton';
function LinkForm() {
  const toast = useToast();
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    if (link.length > 0) {
      setLoading(true);
      fetchData()
        .post('/', {
          longLink: link,
        })
        .then(res => {
          setLoading(false);
          setShortLink(res);
        })
        .catch(() => {
          setLoading(false);
          toast({
            title: 'Error With Request',
            description: 'Your request could not be completed',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: 'Error With Request',
        description: 'please enter a valid url',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const handleChange = e => {
    setLink(e.target.value);
  };
  return (
    <form>
      <FormControl id='shorten-link' mb='30px' isRequired>
        <FormLabel>Link To Shorten</FormLabel>
        <Input type='text' value={link} onChange={handleChange} required />
        <FormHelperText mb='10px'>Link must be valid (starting with http or https)</FormHelperText>
        <StyledButton mb='20px' onClick={submitHandler} size='lg' isLoading={loading}>
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
