import { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
function NavbarContainer() {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (isDesktop) {
      setLoading(false);
    }
  }, [isDesktop]);

  return <div>{!loading && isDesktop ? <Navbar /> : <MobileNav />}</div>;
}

export default NavbarContainer;
