import { FormControl, FormLabel, Container, Input, Button, Heading } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import * as yup from 'yup';
let schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

import { useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

function login() {
  const router = useRouter();
  const toast = useToast();
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  const changeHandler = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    schema
      .validate({
        username: formValues.username,
        password: formValues.password,
      })
      .then(function (valid) {
        if (valid) {
          axios
            .post('http://localhost:3001/auth/login', formValues, { withCredentials: true })
            .then(res => res.status === 200 && router.push('/dashboard'))
            .catch(err => console.log(err.response.data));
        }
      })
      .catch(err => {
        console.log(err.errors);
        toast({
          title: 'Form Error',
          description: err.errors,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return (
    <Container>
      <Heading>Login</Heading>
      <form>
        <FormControl id='username' isRequired>
          <FormLabel>Username</FormLabel>
          <Input placeholder='username' name='username' onChange={changeHandler} />
        </FormControl>
        <FormControl id='username' isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder='password' name='password' onChange={changeHandler} />
        </FormControl>
        <Button onClick={submitHandler}>Login</Button>
      </form>
    </Container>
  );
}

export default login;
