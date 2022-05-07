import React, { useState } from 'react';
import {
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  HStack,
  Box,
  Text,
  Button,
  Link,
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import CustomIconButton from './src/components/CustomIconButton';
import ModalRedirectOAuth from './src/components/ModalRedirectOAuth';
import ModalSignUpForm from './src/components/ModalSignUpForm';
import { SSRProvider } from '@react-aria/ssr';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const App = () => {
  const [showRedirectModal, setShowRedirectModal] = useState<boolean>(false);
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);

  const openRedirectModal = () => setShowRedirectModal(true);
  const closeRedirectModal = () => setShowRedirectModal(false);

  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

  return (
    <SSRProvider>
      <NativeBaseProvider config={config}>
        <ModalRedirectOAuth
          isOpened={showRedirectModal}
          close={closeRedirectModal}
        />
        <ModalSignUpForm isOpened={showSignUpModal} close={closeSignUpModal} />
        <Box safeAreaTop />
        <Box
          flex={1}
          bg={{
            linearGradient: {
              colors: ['coolGray.900', 'darkBlue.900'],
            },
          }}
        >
          <Box flex={1} justifyContent="center">
            <VStack space={2} alignItems="center">
              <Heading size="lg" color="gray.100">
                Welcome to <Text color="pink.300">P</Text>
                <Text color="red.300">i</Text>
                <Text color="yellow.300">x</Text>
                <Text color="green.300">e</Text>
                <Text color="blue.300">l</Text> Gallery!
              </Heading>
            </VStack>
          </Box>
          <Box
            flex={2}
            justifyContent="center"
            bg={{
              linearGradient: {
                colors: ['violet.800', 'indigo.800'],
              },
            }}
            borderRadius={25}
            mx={3}
          >
            <VStack space={5} justifyContent="center" mx={5}>
              <Text fontSize="lg" fontWeight="bold" color="gray.100">
                Sign up with
              </Text>
              <HStack space={6} justifyContent="center">
                <CustomIconButton
                  iconName="apple"
                  onPress={openRedirectModal}
                />
                <CustomIconButton
                  iconName="facebook"
                  onPress={openRedirectModal}
                />
                <CustomIconButton
                  iconName="google"
                  onPress={openRedirectModal}
                />
                <CustomIconButton
                  iconName="twitter"
                  onPress={openRedirectModal}
                />
              </HStack>
              <Box justifyContent="center" alignItems="center">
                <Text color="white" fontSize="sm">
                  or
                </Text>
              </Box>
              <Box mx={5}>
                <Button
                  variant="outline"
                  colorScheme="orange"
                  borderColor="orange.500"
                  borderRadius="full"
                  _text={{
                    fontSize: 'md',
                    fontWeight: 'bold',
                  }}
                  onPress={openSignUpModal}
                >
                  Email
                </Button>
              </Box>
            </VStack>
          </Box>
          <Center flex={1}>
            <VStack alignItems="center">
              <Text color="white">Already have account?</Text>
              <Link
                _text={{
                  color: 'orange.500',
                  fontSize: 'md',
                }}
              >
                Login
              </Link>
            </VStack>
          </Center>
        </Box>
      </NativeBaseProvider>
    </SSRProvider>
  );
};

export default App;
