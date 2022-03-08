import React from "react";
import renderer from "react-test-renderer";

import  Loading from "./Loading";
it("renders list of characters", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});