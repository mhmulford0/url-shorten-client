import { Heading, Input, useClipboard, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function LinkArea({ shortLink }) {
  if (shortLink) {
    const { hasCopied, onCopy } = useClipboard(
      `https://link-shrtnr.herokuapp.com/${shortLink.message}`
    );
    return (
      <>
        <Input
          type='text'
          placeholder='Shortend link will display here'
          value={`https://link-shrtnr.herokuapp.com/${shortLink.message}`}
          readOnly
        />
        <Button onClick={onCopy}>{hasCopied ? 'Copied' : 'Copy'}</Button>
      </>
    );
  } else {
    return <Input type='text' placeholder='Shortend link will display here' readOnly value='' />;
  }
}

export default LinkArea;
