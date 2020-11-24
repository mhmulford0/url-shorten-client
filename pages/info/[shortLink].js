import { useRouter } from 'next/router';

function shortLink() {
  const router = useRouter();
  const { shortLink } = router.query;
  return <div>{shortLink}</div>;
}

export default shortLink;
