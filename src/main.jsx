// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// local imports
import App from "./App.jsx";
import ProductsDataProvider from "./Contexts/ProductsDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsDataProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ProductsDataProvider>
);
