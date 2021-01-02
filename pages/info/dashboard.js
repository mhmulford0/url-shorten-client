import { useEffect } from 'react';
import axios from 'axios';
function dashboard() {
  useEffect(() => {
    axios
      .get('http://linkshrt.app/auth/user')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return <div>test dashboard page</div>;
}

export default dashboard;
