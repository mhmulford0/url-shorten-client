import '../styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';
import store from '../store';
import Navbar from '../components/Navbar';
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
  return (
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain='dev-r-p4kmck.us.auth0.com'
        clientId='UE3YtEY37h1nBBY7jgEwOcGKz1Rnujky'
        redirectUri={'http://localhost:3000'}
      >
        <StoreProvider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </StoreProvider>
      </Auth0Provider>
    </ChakraProvider>
  );
}

export default MyApp;
