import React from "react";
import renderer from "react-test-renderer";

import Character from "./index";
it("renders list of characters", () => {
  const tree = renderer.create(<Character />).toJSON();
  expect(tree).toMatchSnapshot();
});