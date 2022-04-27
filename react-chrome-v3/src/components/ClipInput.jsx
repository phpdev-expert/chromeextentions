import React, { Component }  from 'react';
import {
  Flex,
  Button,
  useClipboard,
  Editable,
  EditablePreview,
  EditableInput,
  Input,
} from '@chakra-ui/react';

const ClipInput = ({ value }) => {
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <>
      <Flex mb={2}>
        <Input value={value} isReadOnly placeholder="Welcome" />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
      </Flex>
      <Editable isReadOnly>
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable>
    </>
  );
};

export default ClipInput;
