import React from "react";
import renderer from "react-test-renderer";

import Navigation from "./Navigation";
it("renders list of characters", () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchSnapshot();
});
