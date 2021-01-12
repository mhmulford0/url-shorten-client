import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';

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
import NavbarContainer from '../components/NavbarContainer';

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
      a: {
        color: 'blue',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <NavbarContainer />
        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
