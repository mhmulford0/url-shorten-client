import '../styles/globals.css';
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
      <StoreProvider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
