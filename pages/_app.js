import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';

import { useMediaQuery } from '@chakra-ui/react';

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
if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig);
}

import store from '../store';
import Navbar from '../components/Navbar';
import MobileNav from '../components/MobileNav';

const theme = extendTheme({
  textStyles: {
    heading: {
      fontFamily: 'Montserrat',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  console.log(isDesktop);
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        {isDesktop ? (
          <>
            <Navbar />
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <Component {...pageProps} />
            <MobileNav />
          </>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
