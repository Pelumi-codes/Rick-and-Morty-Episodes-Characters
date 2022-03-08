import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SingleCharacterCard } from "./SingleCharacter";
import { useHistory } from "react-router-dom";

const Character = ({ characters }) => {
  const history = useHistory();

  //routing handling
  const handleClick = (id) => () => {
    history.push(`/characters/${id}`);
  };

  const charactList = characters?.map((d, index) => {
    return (
      <SingleCharacterCard
        onClick={handleClick(d.id)}
        key={`${d.name}${index}`}
        character={d}
      />
    );
  });

  return (
    <>
      <Box>
        <Box my={4} bg="#24282E" mx="30px" borderRadius="5px" p={4}>
          <Flex flexWrap="wrap">{charactList}</Flex>
        </Box>
      </Box>
    </>
  );
};

export default Character;
