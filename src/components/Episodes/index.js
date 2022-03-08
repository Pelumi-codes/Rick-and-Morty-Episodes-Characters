import React, { useState, useEffect } from "react";
import { SingleCharacterCard } from "../Characters/SingleCharacter";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const SingleCharacter = ({ characters }) => {
  const { id } = useParams();

  const [singleCharacter, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [id, characters]);

  if (!singleCharacter) return <Box ml="6%">Loading...</Box>;
  return (
    <Box mx="30px" mt="2%">
      <SingleCharacterCard character={singleCharacter} />
      <Flex flexWrap="wrap">
        {singleCharacter.episode.map((ep, i) => (
          <Box
            p="40px"
            borderRadius="5px"
            bg="#FFA500"
            m="5px"
            flex="1"
            whiteSpace="nowrap"
            cursor="pointer"
          >
            <Text fontSize="19" fontWeight="700">
              <a
                href="https://www.youtube.com/watch?v=_uUcMwsR5hg"
                target="_blank"
                key={i}
                rel="noreferrer"
              >
                Episode {ep.slice(ep.lastIndexOf("/") + 1)}
              </a>
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default SingleCharacter;
