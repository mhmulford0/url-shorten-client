import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useStoreState } from 'easy-peasy';
import SignupFormContainer from '../components/SignupForm';

function signup() {
  const router = useRouter();

  const loggedIn = useStoreState(state => state.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      router.replace('/dashboard');
    }
  }, []);

  return <SignupFormContainer />;
}

export default signup;
