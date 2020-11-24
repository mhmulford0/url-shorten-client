import { Heading, Input, useClipboard, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function LinkArea({ shortLink }) {
  

  if(shortLink){
    const { hasCopied, onCopy } = useClipboard(`http://localhost:3001/${shortLink.message}`)
    return (
      <>
      <Input
        type="text"
        placeholder="Shortend link will display here"
        value={`http://localhost:3001/${shortLink.message}`}
        readOnly
      />
        <Button onClick={onCopy}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </>
    );
  } else {
      return (
        <Input
          type="text"
          placeholder="Shortend link will display here"
          readOnly
          value=""
        />
      );
  }
}



export default LinkArea;
