import { Heading, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function LinkArea({ shortLink }) {

  if(shortLink){
    return (
      <Textarea
        placeholder="Shortend link will display here"
        value={`http://localhost:3001/${shortLink.message}` || ''}
        readOnly
      />
    );
  } else {
      return (
        <Textarea
          placeholder="Shortend link will display here"
          readOnly
        />
      );
  }
}



export default LinkArea;
