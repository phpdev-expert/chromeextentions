import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCloudUploadAlt } from 'react-icons/fa';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  TagCloseButton,
  Tag,
  TagLabel,
  Icon,
} from '@chakra-ui/react';
import filesize from 'filesize';

import { Encrypt } from '../utils/filecrypt';

const UploadBox = ({
  setFieldValue,
  values,
  name,
  encryptionKey = 'hello',
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: useCallback(
      async (acceptedFs) => {
        let fila = [...values[name]];

        // acceptedFs.forEach((e) => {
        //   fila = fila.filter((f) => e.name !== f.name);
        // });

        for (const e of acceptedFs) {
          console.log('accepted files');
          console.log(e);
          const enBlob = await Encrypt(encryptionKey, e);
          const file = new File([enBlob], e.name, {
            type: enBlob.type,
          });

          fila = [...fila, ...[file]];
        }

        // console.log('accepted', acceptedFs);

        // console.log('fila', fila);
        setFieldValue('files', fila);
      },
      [name, setFieldValue, values, encryptionKey],
    ),
  });

  return (
    <>
      {values[name]?.length === 0 && (
        <Box
          {...getRootProps()}
          mb={4}
          cursor="pointer"
          display="flex"
          minHeight={100}
          overflowY="auto"
          alignItems="center"
          justifyContent="center"
          borderWidth={2}
          p={5}
          borderRadius="lg"
          borderColor="blue.600"
          borderStyle="dashed"
          css={{
            '::-webkit-scrollbar': {
              width: '0px' /* Remove scrollbar space */,
            },
          }}
        >
          <input {...getInputProps()} />
          <Flex flexDirection="column" alignItems="center">
            <Icon as={FaCloudUploadAlt} boxSize="3em" color="blue.600" mb={2} />

            <Text
              textAlign="center"
              color="blue.600"
              fontWeight="medium"
              textTransform="uppercase"
            >
              Click or Drag &apos;n&apos; Drop Files
            </Text>
          </Flex>
        </Box>
      )}

      {values[name]?.length > 0 && (
        <Stack spacing={4} mt={2} mb={4}>
          {values[name]?.map((file) => (
            <Tag key={file.name} variant="outline" colorScheme="blue" size="lg">
              <TagLabel>
                {file.name} - {filesize(file.size)}
              </TagLabel>
              <TagCloseButton
                color="red.800"
                ml="auto"
                onClick={() => {
                  const fila = values[name]?.filter(
                    (f) => file.name !== f.name,
                  );
                  setFieldValue(name, fila);
                }}
              />
            </Tag>
          ))}

          <Box>
            <Button
              leftIcon={<Icon as={FaCloudUploadAlt} />}
              {...getRootProps()}
              colorScheme="blue.700"
              variant="outline"
            >
              <input {...getInputProps()} />
              Add More Files
            </Button>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default UploadBox;
