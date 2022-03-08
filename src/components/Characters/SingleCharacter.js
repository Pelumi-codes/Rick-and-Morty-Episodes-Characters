import { Image, Box, Text } from "@chakra-ui/react";
import { StyledFlex } from "../Styles";

export const SingleCharacterCard = ({ character, onClick }) => {
  return (
    <StyledFlex onClick={onClick} mr="2%" height="200px" mb={5} width="32%">
      <Image
        src={character?.image}
        alt="character image"
        borderRadius="5px 0 0 5px"
        flexBasis="40%"
        objectFit="contain"
        height="auto"
      />
      <Box
        flex="1"
        backgroundColor="rgb(59,62,67)"
        pl="10px"
        borderRadius="0 5px 5px 0"
      >
        <Text fontWeight={600} fontSize="18px" my="2%" color="white" mt="10%">
          Name: {character?.name}
        </Text>
        <Text  mt="4%" color="white">Status: {character?.status}</Text>
        <Text mt="4%" color="white">
          Species: {character?.species}
        </Text>
        <Text color="orange" mt="4%">Gender: {character?.gender}</Text>
      </Box>
    </StyledFlex>
  );
};
