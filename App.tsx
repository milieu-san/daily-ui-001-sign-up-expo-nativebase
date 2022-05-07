import React from "react";
import {
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  HStack,
  Box,
  Divider,
  Text,
  Button
} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};

const App = () => {
  return (
    <NativeBaseProvider config={config}>
      <Box safeAreaTop />
      <Box flex={1} bg="darkBlue.900">
        <Box flex={1} justifyContent="center">
          <VStack space={5} alignItems="center">
            <Heading size="lg" color="gray.100">Welcome to Pixel Gallery!!</Heading>
          </VStack>
        </Box>
        <Box flex={2} justifyContent="center" bg={{
          linearGradient: {
            colors: ["violet.800", "indigo.800"],
            start: [0, 0],
            end: [1, 0]
          }
        }} borderRadius={25} mx={3}>
          <VStack space={5} justifyContent="center" mx={3}>
            <Text fontSize="md" color="gray.100" >Login with</Text>
            <Button>

            </Button>
          </VStack>
        </Box>
        <Box flex={1}>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

export default App
