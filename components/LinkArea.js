import { Input, useClipboard } from '@chakra-ui/react';
import StyledButton from '../styles/StyledButton';
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
          mb='15px'
        />
        <StyledButton size='lg' onClick={onCopy}>
          {hasCopied ? 'Copied' : 'Copy'}
        </StyledButton>
      </>
    );
  } else {
    return <Input type='text' placeholder='Shortend link will display here' readOnly value='' />;
  }
}

export default LinkArea;
