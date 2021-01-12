import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useStoreState } from 'easy-peasy';
import LoginForm from '../components/LoginForm';

function login() {
  const loggedIn = useStoreState(state => state.loggedIn);
  const router = useRouter();
  useEffect(() => {
    if (loggedIn) {
      router.replace('/dashboard');
    }
  }, []);

  return <LoginForm />;
}

export default login;
