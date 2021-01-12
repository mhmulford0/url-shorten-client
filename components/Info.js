import { Heading, SimpleGrid, Box, Container, Button, useToast } from '@chakra-ui/react';
import fetchData from '../hooks/getData';
import { useRouter } from 'next/router';

function Info({ linkData }) {
  const router = useRouter();
  const toast = useToast();
  const shortLink = router.query.shortLink;
  const deleteLink = () => {
    fetchData()
      .delete(`/${shortLink}`)
      .then(router.replace('/dashboard'))
      .catch(() => {
        toast({
          title: 'Error With Request',
          status: 'error',
          duration: 2500,
          isClosable: true,
        });
      });
  };
  return (
    <Container padding='6' boxShadow='lg' bg='#F5F5F5' centerContent textAlign='right'>
      {linkData.linkInfo ? (
        <>
          <Heading my='10px' textStyle='heading'>
            Total Clicks: {linkData && linkData.clickInfo.length}
          </Heading>
          <Button mb='15px' color='#1A202C' bg='#FFFFFF' onClick={deleteLink}>
            Delete Link
          </Button>
          {linkData.clickInfo.length > 0 ? (
            <>
              <Heading as='h4' size='md' my='10px' textStyle='heading'>
                Click Locations / Date
              </Heading>

              <SimpleGrid columns={1} spacingX='40px' spacingY='10px'>
                {linkData.clickInfo.map(ld => {
                  return (
                    <Box
                      key={ld.id}
                      textAlign='center'
                      height='40px'
                      paddingY='5px'
                      borderBottom='1px solid black'
                    >
                      <p>
                        {ld.location} / {ld.date}
                      </p>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </>
          ) : (
            'No clicks yet'
          )}
        </>
      ) : (
        <>
          <Heading my='10px'>Link Not Found</Heading>
        </>
      )}
    </Container>
  );
}

export default Info;