import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function shortLink({ linkData }) {
  // const router = useRouter();
  // const { shortLink } = router.query;
  const [linkInfo, setLinkInfo] = useState([]);
  const [linkError, setLinkError] = useState('');

  return (
    <div>
      {!linkData.error && linkData.map((i) => <p key={i.id}>{i.location}</p>)}
    </div>
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