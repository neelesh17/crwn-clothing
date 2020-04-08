import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 2rem 3rem;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }
`;