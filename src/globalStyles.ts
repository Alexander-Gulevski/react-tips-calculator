import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        font-family: inherit;
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;
