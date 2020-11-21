import { Heading, Textarea } from '@chakra-ui/react';

function LinkArea({ shortLink }) {
  console.log(shortLink);
  return shortLink ? (
    <Textarea
      placeholder="Shortend link will display here"
      value={`http://localhost:3001/${shortLink.data.message}`}
      readOnly
    />
  ) : (
    <Textarea
      placeholder="Shortend link will display here"
      value={''}
      readOnly
    />
  );
}

export default LinkArea;
