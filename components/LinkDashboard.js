import { Box, Container, Heading, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect } from 'react';
function LinkDashboard({ links }) {
  useEffect(() => {}, [links]);
  const toast = useToast();

  const copyLink = e => {
    const code = e.target.innerText;
    navigator.clipboard.writeText(`http://lnkshrt.app/${code}`);
    toast({
      title: 'Short Link Copied',
      status: 'success',
      duration: 1500,
      isClosable: true,
    });
  };
  return (
    <div>
      <>
        <Heading my='10px' textAlign='center' textStyle='heading'>
          Your Links
        </Heading>
        <Container mt={[50, 50, 100]} mb={[40, 40, 0]} padding='6' boxShadow='lg' bg='#F5F5F5'>
          <Box
            d='flex'
            justifyContent='space-between'
            mb='10px'
            borderBottom='1px solid black'
            padding={2}
          >
            <span style={{ fontWeight: 'bold' }}>Original Link</span>
            <span style={{ fontWeight: 'bold' }}>Code</span>
            <span style={{ fontWeight: 'bold' }}>Stats</span>
          </Box>

          {links.map(link => {
            return (
              <Box
                d='flex'
                justifyContent='space-between'
                mb='10px'
                borderBottom='1px solid black'
                padding={2}
                key={link.id}
                textAlign='center'
              >
                <span style={{ textDecoration: 'underline', color: 'blue' }}>
                  <Link href={link.longLink}>Original Link</Link>
                </span>
                <span style={{ cursor: 'pointer' }} onClick={copyLink}>
                  {link.shortLink}
                </span>
                <span>
                  <Link href={`dashboard/info/?shortLink=${link.shortLink}`}>
                    <span className='form-links'> Stats</span>
                  </Link>
                </span>
              </Box>
            );
          })}
        </Container>
      </>
    </div>
  );
}

export default LinkDashboard;
