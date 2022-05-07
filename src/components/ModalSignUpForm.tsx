import React from 'react';
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

  return (
    <Slide in={isOpened} placement="bottom">
      <Box safeAreaTop />
      <Box flex={1} />
      <KeyboardAvoidingView flex={2} bg="coolGray.900" borderTopRadius={25}>
        <HStack h="40px" flexDirection="row-reverse">
          <CustomIconButton iconName="close" onPress={close} />
        </HStack>
        <Center flex={3} mx={5}>
          <VStack space={4} flex={1} w="100%">
            <FormControl>
              <FormControl.Label>
                <Text color="orange.500" fontWeight="bold">
                  Email
                </Text>
              </FormControl.Label>
              <Input
                borderColor="orange.500"
                variant="rounded"
                color="orange.500"
              />
            </FormControl>
            <FormControl>
              <FormControl.Label color="orange.500">
                <Text color="orange.500" fontWeight="bold">
                  Password
                </Text>
              </FormControl.Label>
              <Input
                type="password"
                borderColor="orange.500"
                variant="rounded"
                color="orange.500"
              />
            </FormControl>
          </VStack>
        </Center>
        <Box flex={1} mx={5}>
          <Button
            variant="outline"
            colorScheme="orange"
            borderColor="orange.500"
            borderRadius="full"
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
            }}
          >
            Submit
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </Slide>
  );
};

export default ModalSignUpForm;
