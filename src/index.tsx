import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
    background-color: rgba(119, 224, 209, 1);
;
  }
`;
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
      <GlobalStyles />
      <App />
  </React.StrictMode>
);