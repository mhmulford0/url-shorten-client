import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Container,
  Input,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import fetchData from '../hooks/getData';
import { useStoreActions } from 'easy-peasy';

import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCgO-w3WVqCwUiKCPfNbOuqa-fofw3W1_k',
  authDomain: 'lnkshrt-5cc68.firebaseapp.com',
  projectId: 'lnkshrt-5cc68',
  storageBucket: 'lnkshrt-5cc68.appspot.com',
  messagingSenderId: '17155075282',
  appId: '1:17155075282:web:24d3e5b160694b4871910b',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
import * as yup from 'yup';
let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function SignupForm() {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const loginState = useStoreActions(actions => actions.login);
  const router = useRouter();
  const changeHandler = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    setLoading(true);
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
            .then(user => {
              user.user.getIdToken().then(idToken => {
                fetchData()
                  .post('/auth/signup', { email: formValues.email, idToken: idToken })
                  .then(() => {
                    loginState();
                    setLoading(false);
                    router.push('/dashboard');
                  })
                  .catch(err => {
                    setLoading(false);

                    toast({
                      title: 'Form Error',
                      description: err.message,
                      status: 'error',
                      duration: 5000,
                      isClosable: true,
                    });
                  });
              });
            })
            .catch(err => {
              setLoading(false);

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
        setLoading(false);

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
    <Container mt={[50, 50, 150]} padding='6' boxShadow='lg' bg='#F5F5F5'>
      <Heading mb='75px' textAlign='center'>
        Sign Up
      </Heading>
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
        <Button
          as='button'
          d='block'
          onClick={submitHandler}
          mb='25px'
          color='#1A202C'
          bg='#FFFFFF'
          isLoading={loading}
        >
          Sign Up
        </Button>
        Already A Member?
        <Link href='/login'>
          <span className='form-links'> Login In Now</span>
        </Link>
      </form>
    </Container>
  );
}

export default SignupForm;
