import { Box, Flex, Text, VStack, Heading } from "@chakra-ui/react";

const TestimonialCard = ({ title, description, name, position }) => {
  return (
    <VStack
      spacing={2} // Small spacing
      p={3} // Minimal padding
      bg="black"
      boxShadow="md"
      borderRadius="md"
      textAlign="center"
      maxW="180px" // Smaller max width
    >
      <Heading size="xs">{title}</Heading> {/* Extra small heading */}
      <Text fontSize="xs">{description}</Text> {/* Smaller font */}
      <Box mt={2} textAlign="center">
        <Text fontWeight="bold" fontSize="xs">{name}</Text> {/* Small text */}
        <Text fontSize="2xs" color="gray.600">{position}</Text> {/* Even smaller text */}
      </Box>
    </VStack>
  );
};

const TestimonialsSection = () => {
  return (
    <Box bg="gray.50" py={8}>
      <VStack spacing={2} mb={5}>
        <Heading size="sm">Our Clients Speak</Heading>
        <Text color="gray.500" fontSize="xs">
          We have been working with clients around the world
        </Text>
      </VStack>
      <Flex justify="space-around" flexWrap="wrap" gap={4}>
        <TestimonialCard
          title="Efficient Collaborating"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Jane Cooper"
          position="CEO at ABC Corporation"
        />
        <TestimonialCard
          title="Intuitive Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Jane Cooper"
          position="CEO at ABC Corporation"
        />
        <TestimonialCard
          title="Mindblowing Service"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          name="Jane Cooper"
          position="CEO at ABC Corporation"
        />
      </Flex>
    </Box>
  );
};

export default TestimonialsSection;
