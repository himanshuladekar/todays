import React from 'react';
import { ChakraProvider, Heading, Button, Input, Box, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box p={8} maxW="md" mx="auto" textAlign="center">
        {/* Application Title */}
        <Heading mb={6}>Welcome to Chakra UI</Heading>

        {/* Input Field */}
        <Input placeholder="Enter some text here..." mb={4} />

        {/* Button */}
        <Button colorScheme="teal" mb={6}>Click Me!</Button>

        {/* Card */}
        <Box p={6} borderWidth={1} borderRadius="lg" shadow="lg">
          <Text fontSize="xl">
            This is a simple card component. Chakra UI helps you build accessible and customizable UI components easily.
          </Text>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
