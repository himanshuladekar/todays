import React from 'react';
import {
  Box,
  Avatar,
  Heading,
  Text,
  Button,
  Stack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

function ProfileCard() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={6}
      textAlign="center"
      bg="white"
    >
      {/* Profile Avatar */}
      <Avatar
        size="xl"
        name="Lindsey James"
        src="https://bit.ly/dan-abramov"
        mb={4}
      />

      {/* Profile name */}
      <Heading fontSize="2xl" fontWeight="bold">
        Lindsey James
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        @lindsey_jam3s
      </Text>

      {/* Description */}
      <Text mb={4}>
        Actress, musician, songwriter and artist. PM for work inquiries or{' '}
        <Text as="span" color="blue.400">
          #tag
        </Text>{' '}
        me in your posts
      </Text>

      {/* Tags */}
      <Stack direction="row" spacing={4} justify="center" mb={4}>
        <Tag size="md" variant="subtle" colorScheme="gray">
          <TagLabel>#ART</TagLabel>
        </Tag>
        <Tag size="md" variant="subtle" colorScheme="gray">
          <TagLabel>#PHOTOGRAPHY</TagLabel>
        </Tag>
        <Tag size="md" variant="subtle" colorScheme="gray">
          <TagLabel>#MUSIC</TagLabel>
        </Tag>
      </Stack>

      {/* Buttons */}
      <Stack direction="row" spacing={4} justify="center">
        <Button variant="outline" colorScheme="gray">
          Message
        </Button>
        <Button colorScheme="blue">Follow</Button>
      </Stack>
    </Box>
  );
}

export default ProfileCard;
