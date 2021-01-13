import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStoreState } from 'easy-peasy';
import { Heading } from '@chakra-ui/react';
import Head from 'next/head';
import fetchData from '../../hooks/getData';
import LinkDashboard from '../../components/LinkDashboard';

function dashboard({ linkData }) {
  const router = useRouter();

  const loginState = useStoreState(state => state.loggedIn);

  useEffect(() => {
    if (!loginState) {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>Lnk Shrt - Shorten Links</title>
      </Head>

      {linkData.data && !linkData.error ? (
        <LinkDashboard links={linkData.data} />
      ) : (
        <Heading my='10px' textStyle='heading' textAlign='center'>
          Error With Request
        </Heading>
      )}
    </div>
  );
}

export default dashboard;

export async function getServerSideProps(ctx) {
  const cookie = ctx.req?.headers.cookie;
  let data;
  try {
    const res = await fetchData().post('/user', null, {
      headers: { cookie: cookie },
    });
    data = res.data;
  } catch (error) {
    data = { error: 'Error with request' };
  }

  return {
    props: { linkData: data },
  };
}
