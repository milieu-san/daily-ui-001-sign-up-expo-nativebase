import React, { useState } from 'react';
import {
  FormControl,
  Input,
  Slide,
  Box,
  KeyboardAvoidingView,
  VStack,
  Text,
  HStack,
  Center,
  Button,
} from 'native-base';
import CustomIconButton from './CustomIconButton';

interface Props {
  isOpened: boolean;
  close: () => void;
}

const ModalSignUpForm = (props: Props) => {
  const { isOpened, close } = props;

  const [requesting, setRequesting] = useState<boolean>(false);

  return (
    <Slide in={isOpened} placement="bottom">
      <Box safeAreaTop />
      <Box flex={1} />
      <KeyboardAvoidingView flex={2} bg="coolGray.800" borderTopRadius={25}>
        <HStack h="40px" flexDirection="row-reverse">
          <CustomIconButton iconName="close" onPress={close} />
        </HStack>
        <Center flex={2} mx={7}>
          <VStack space={5} w="100%">
            <FormControl isDisabled={requesting}>
              <FormControl.Label>
                <Text color="orange.500" fontWeight="bold" fontSize="md">
                  Email
                </Text>
              </FormControl.Label>
              <Input
                borderColor="orange.500"
                variant="rounded"
                color="orange.500"
                fontSize="md"
                _focus={{
                  borderColor: 'orange.300',
                  backgroundColor: 'coolGray.700',
                }}
              />
            </FormControl>
            <FormControl isDisabled={requesting}>
              <FormControl.Label color="orange.500">
                <Text color="orange.500" fontWeight="bold" fontSize="md">
                  Password
                </Text>
              </FormControl.Label>
              <Input
                type="password"
                borderColor="orange.500"
                variant="rounded"
                color="orange.500"
                fontSize="md"
                _focus={{
                  borderColor: 'orange.300',
                  backgroundColor: 'coolGray.700',
                }}
              />
            </FormControl>
          </VStack>
        </Center>
        <Box flex={1} mx={7}>
          <Button
            isLoading={requesting}
            isLoadingText="Requesting..."
            variant="outline"
            colorScheme="orange"
            borderColor="orange.500"
            borderRadius="full"
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
            }}
            onPress={() => setRequesting(true)}
          >
            Submit
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </Slide>
  );
};

export default ModalSignUpForm;
