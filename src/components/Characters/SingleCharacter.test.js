import React from "react";
import renderer from "react-test-renderer";

import  {SingleCharacterCard } from "./SingleCharacter";
it("renders list of characters", () => {
  const tree = renderer.create(<SingleCharacterCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
