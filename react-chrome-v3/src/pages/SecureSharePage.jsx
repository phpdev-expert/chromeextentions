import React, { useState, useEffect } from 'react';
import {
  Textarea,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
  Stack,
  Text,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverFooter,
  Button,
  useToast,
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import CryptoJS from 'crypto-js';
import { gql } from 'graphql-request';
import { useMutation } from 'react-query';

import { nanoid } from 'nanoid';
import { endOfDay, startOfDay, subDays, format } from 'date-fns';
// import { format as zonedFormat, utcToZonedTime } from 'date-fns-tz';
import { DateRangePicker, DateRange } from 'react-date-range';
import ClipInput from '../components/ClipInput';
import UploadFile from '../api/uploadfile';
import { useAuth } from '../components/auth';
import UploadBox from '../components/UploadBox';
import { request } from '../api/graphql_api';

const createShareMut = gql`
  mutation MyMutation(
    $accountId: String = ""
    $clickAllowed: Int = 10
    $endDate: String = ""
    $fileNames: [String]!
    $startDate: String = ""
    $encryptedData: String = ""
    $username: String = ""
  ) {
    v1_secureshare_SecureShare_Create(
      input: {
        accountId: $accountId
        clickAllowed: $clickAllowed
        endDate: $endDate
        fileNames: $fileNames
        startDate: $startDate
        encryptedData: $encryptedData
        username: $username
      }
    ) {
      files {
        name
        url
      }
      uuid
    }
  }
`;

const SecureSharePage = () => {
  const { user } = useAuth();


  const [cliplink, setCliplink] = useState('');

  const baseDate = new Date();
  const toast = useToast();
  const [range, setRange] = useState([
    {
      startDate: startOfDay(subDays(baseDate, 15)),
      endDate: endOfDay(baseDate),
      key: 'selection',
    },
  ]);
  const popM = useDisclosure();
  let _token = '';

  function handleChangeToken(event) {
    console.log(event.target.value);
    _token = event.target.value
  }

  function setAuthToken(){
    localStorage.setItem('access-token',_token)
    window.location.reload();
  }

  const popsize = useBreakpointValue({ base: null, lg: 'auto' });

  const displayMobile = useBreakpointValue({ base: true, lg: false });
  const displayDesktop = useBreakpointValue({ base: false, lg: true });

  // const formatedData = graphData?.map((v) => {
  //   const datez = new Date(v.time);
  //   const timeZone = 'Europe/Berlin';
  //   const zonedDate = utcToZonedTime(datez, timeZone);
  //   return {
  //     count: v.count,
  //     time: zonedFormat(zonedDate, 'MM/dd/yyyy', {
  //       timeZone: 'UTC',
  //     }),
  //   };
  // });

  const [genKey, setgenKey] = useState('');

  useEffect(() => {
    setgenKey(nanoid());
    return () => {};
  }, []);

  const createShareMutation = useMutation((input) =>
    request(createShareMut, input),
  );

  return (
    <Box flex={1}>
      <Box mb={10}>
        <Heading color="green.800">SecureShare</Heading>
        <Text color="gray.700">Share your data securely</Text>
      </Box>

      {
      user ? <Formik
        enableReinitialize
        initialValues={{
          data: '',
          files: [],
          clickAllowed: 12,
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const encrypted = CryptoJS.AES.encrypt(
              values.data,
              genKey,
            ).toString();

            const filen = values.files.map((v) => v.name);

            const data = await createShareMutation.mutateAsync({
              accountId: user.accountId,
              clickAllowed: values.clickAllowed,
              endDate: range[0]?.endDate?.toISOString(),
              startDate: range[0]?.startDate?.toISOString(),
              username: user.username,
              encryptedData: encrypted,
              fileNames: filen,
            });

            const fileToUpload = data?.secureshare_SecureShare_Create?.files;

            if (fileToUpload) {
              await Promise.all(
                fileToUpload.map(async (f) => {
                  const val = values.files.filter((v) => f.name === v.name);

                  await UploadFile(f.url, val[0], null);
                }),
              );
            }

            setCliplink(
              `http://${window?.location?.host}/app/secure/${data?.secureshare_SecureShare_Create?.uuid}/${genKey}`,
            );

            toast({
              title: 'File encrypted',
              description: 'Files Added',
              status: 'success',
              duration: 3000,
              isClosable: true,
              position: 'top',
            });
          } catch (e) {
            if (e.response) {
              toast({
                title: 'Response Error',
                description: e?.response?.errors[0]?.message,
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top',
              });

              return;
            }

            toast({
              title: 'Application Error',
              description: e.message,
              status: 'error',
              duration: 4000,
              isClosable: true,
              position: 'top',
            });
          }
        }}>
        {({ values, isSubmitting, setFieldValue, handleChange }) => (
          <Form style={{ width: '100%' }}>
            <Heading size="md" mb={4}>
              Encrypt a message
            </Heading>
            <Textarea
              required
              name="data"
              value={values.data}
              placeholder="Place a message to encrypt here"
              onChange={handleChange}
            />

            <Stack
              mt={4}
              flexDirection={{ base: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              <FormControl maxWidth={300}>
                <FormLabel>Select Access Date Range</FormLabel>
                <Stack spacing={2}>
                  <Popover
                    matchWidth
                    placement="bottom-end"
                    isOpen={popM.isOpen}
                    onClose={popM.onClose}
                  >
                    <PopoverTrigger>
                      <Flex
                        flexDirection={{ base: 'row', lg: 'row' }}
                        tabIndex="0"
                        role="button"
                        aria-label="Date Range"
                        p={2}
                        borderWidth={2}
                        borderRadius="lg"
                        onClick={popM.onOpen}
                        variant="outline"
                      >
                        <Text mr={2} color="green.800" fontWeight="bold">
                          {format(range[0].startDate, 'MM/dd/yyyy')}
                        </Text>
                        <Text mr={2}>to</Text>
                        <Text color="green.800" fontWeight="bold">
                          {format(range[0].endDate, 'MM/dd/yyyy')}
                        </Text>
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent width={popsize}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Date Range</PopoverHeader>
                      <PopoverBody>
                        {displayMobile && (
                          <DateRange
                            editableDateInputs
                            onChange={(item) => {
                              item.selection.startDate = startOfDay(
                                item.selection.startDate,
                              );

                              item.selection.endDate = endOfDay(
                                item.selection.endDate,
                              );

                              setRange([item.selection]);
                            }}
                            moveRangeOnFirstSelection={false}
                            ranges={range}
                          />
                        )}
                        {displayDesktop && (
                          <DateRangePicker
                            editableDateInputs
                            onChange={(item) => {
                              item.selection.startDate = startOfDay(
                                item.selection.startDate,
                              );

                              item.selection.endDate = endOfDay(
                                item.selection.endDate,
                              );

                              setRange([item.selection]);
                            }}
                            showSelectionPreview
                            moveRangeOnFirstSelection={false}
                            months={1}
                            ranges={range}
                            direction="horizontal"
                          />
                        )}
                      </PopoverBody>
                      <PopoverFooter d="flex" justifyContent="flex-end">
                        <Button
                          colorScheme="blue"
                          onClick={() => {
                            popM.onClose();
                            // analytics.refetch();
                          }}
                        >
                          Apply
                        </Button>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Stack>
                <FormHelperText>
                  Choose when you want message to be accessed
                </FormHelperText>
              </FormControl>

              <FormControl maxWidth={300} ml="auto">
                <FormLabel htmlFor="email">Allowed Opens</FormLabel>
                <NumberInput
                  min={1}
                  required
                  onChange={(s, n) => {
                    setFieldValue('clickAllowed', n);
                  }}
                  value={values.clickAllowed}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormHelperText>
                  The amount of time the message can be accessed
                </FormHelperText>
              </FormControl>
            </Stack>

            <Box mt={4}>
              <UploadBox
                name="files"
                setFieldValue={setFieldValue}
                values={values}
                encryptionKey={genKey}
              />

              {cliplink && <ClipInput value={cliplink} />}

              <Flex justifyContent="center">
                <Button
                  size="lg"
                  colorScheme="blue"
                  mr={3}
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Encrypt
                </Button>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>
      :
      <div>
      <h1> Enter Token </h1>

      <Textarea
        placeholder="Enter Token"
        onChange={handleChangeToken}> </Textarea>

        <br/>  
        <Button
          size="lg"
          colorScheme="blue"
          mr={3}
          onClick={setAuthToken}
        >
          Login
        </Button>



       </div>
      }
    </Box>
  );
};

export default SecureSharePage;

// {JSON.stringify(values)}
// {`start : ${range[0]?.startDate?.toISOString()}`}
// {`end : ${range[0]?.endDate?.toISOString()}`}
