import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box>
      <Text
        fontWeight="800"
        fontSize="60px"
        textAlign="center"
        mt="2%"
        letterSpacing="wider"
        textShadow="1.5px 1.5px 2px grey"
      >
        The Rick and Morty
      </Text>
    </Box>
  );
};

export default Navigation;
