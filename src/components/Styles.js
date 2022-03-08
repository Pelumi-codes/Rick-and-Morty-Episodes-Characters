import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

export const StyledFlex = styled(Flex)`
  cursor: pointer;
  &:nth-child(3n) {
    margin-right: 0px;
  }
`;
