import { useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import axios from 'axios';
function dashboard() {
  useEffect(() => {}, []);
  const user = useStoreState(state => state.userInfo);
  console.log(user);
  return <div>test dashboard page</div>;
}

export default dashboard;
