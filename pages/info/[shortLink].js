import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import { Container, Heading } from '@chakra-ui/react';

function shortLink({ linkData }) {
  return (
    <>
      <Navbar />
      <Container textAlign="center">
        <Heading>Link Stats</Heading>
        {!linkData.error && linkData.map((i) => <p key={i.id}>{i.location}</p>)}
      </Container>
    </>
  );
}

export default shortLink;

export async function getServerSideProps(context) {
  const { shortLink } = context.params;
  let linkData;

  try {
    linkData = await (
      await axios.get(`http://localhost:3001/${shortLink}/info`)
    ).data;
    console.log(linkData);
  } catch (error) {
    linkData = { error: 'There was an error with your request' };
  }

  return {
    props: { linkData },
  };
}