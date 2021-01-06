import { FormControl, FormLabel, Container, Input, Button, Heading } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import * as yup from 'yup';
let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

import { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';

const firebaseConfig = {
  apiKey: 'AIzaSyCgO-w3WVqCwUiKCPfNbOuqa-fofw3W1_k',
  authDomain: 'lnkshrt-5cc68.firebaseapp.com',
  projectId: 'lnkshrt-5cc68',
  storageBucket: 'lnkshrt-5cc68.appspot.com',
  messagingSenderId: '17155075282',
  appId: '1:17155075282:web:24d3e5b160694b4871910b',
};
if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig);
}

function signup() {
  const router = useRouter();
  const toast = useToast();
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const changeHandler = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    schema
      .validate({
        email: formValues.email,
        password: formValues.password,
      })
      .then(valid => {
        if (valid) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(formValues.email, formValues.password)
            .then(() => {
              router.push('/login');
            })
            .catch(err => {
              console.log(err);
              toast({
                title: 'Form Error',
                description: err.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            });
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
      <Heading mb='15px'>Sign Up</Heading>
      <form>
        <FormControl id='Email' isRequired mb='15px'>
          <FormLabel>Email</FormLabel>
          <Input placeholder='email' name='email' onChange={changeHandler} />
        </FormControl>
        <FormControl id='Password' isRequired mb='15px'>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            autoComplete='on'
            placeholder='password'
            name='password'
            onChange={changeHandler}
          />
        </FormControl>
        <Button onClick={submitHandler}>Sign Up</Button>
      </form>
    </Container>
  );
}

export default signup;