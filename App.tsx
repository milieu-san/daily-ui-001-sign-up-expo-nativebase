import React from 'react';
import {
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  HStack,
  Box,
  Text,
  IconButton,
  Button,
  Icon,
  Link,
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome } from '@expo/vector-icons';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const App = () => {
  return (
    <NativeBaseProvider config={config}>
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
          <VStack space={5} alignItems="center">
            <Heading size="lg" color="gray.100">
              Welcome to Pixel Gallery!
            </Heading>
          </VStack>
        </Box>
        <Box
          flex={2}
          justifyContent="center"
          bg={{
            linearGradient: {
              colors: ['violet.800', 'indigo.800'],
              start: [0, 0],
              end: [1, 0],
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
              <IconButton
                justifyContent="center"
                alignItems="center"
                icon={<Icon as={FontAwesome} name="apple" />}
                borderRadius="full"
                _icon={{
                  color: 'orange.500',
                  size: '2xl',
                }}
                _pressed={{
                  bg: 'orange.600:alpha.20',
                }}
              />
              <IconButton
                icon={<Icon as={FontAwesome} name="facebook" />}
                borderRadius="full"
                _icon={{
                  color: 'orange.500',
                  size: '2xl',
                }}
                _pressed={{
                  bg: 'orange.600:alpha.20',
                }}
              />
              <IconButton
                justifyContent="center"
                alignItems="center"
                icon={<Icon as={FontAwesome} name="google" />}
                borderRadius="full"
                _icon={{
                  color: 'orange.500',
                  size: '2xl',
                }}
                _pressed={{
                  bg: 'orange.600:alpha.20',
                }}
              />
              <IconButton
                icon={<Icon as={FontAwesome} name="twitter" />}
                borderRadius="full"
                _icon={{
                  color: 'orange.500',
                  size: '2xl',
                }}
                _pressed={{
                  bg: 'orange.600:alpha.20',
                }}
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
                _text={{
                  fontSize: 'md',
                  fontWeight: 'bold',
                }}
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
  );
};

export default App;
