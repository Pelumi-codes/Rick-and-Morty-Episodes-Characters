import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ErrorBoundary from "./components/Error";

ReactDOM.render(
  <ErrorBoundary>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
