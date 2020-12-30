import { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';
import { useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
function logout() {
  const logout = useStoreActions(actions => actions.logout);
  const user = useStoreState(state => state.userInfo);
  const router = useRouter();

  useEffect(() => {
    user.id ? logout() : router.push('/');
  });

  return <></>;
}

export default logout;
