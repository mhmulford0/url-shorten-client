import fetchData from '../hooks/getData';
import { useRouter } from 'next/router';
function Logout() {
  const router = useRouter();
  const handleLogout = () => {
    fetchData()
      .get('/auth/logout')
      .then(() => router.push('/login'));
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
