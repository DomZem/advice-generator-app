import { themeType } from 'lib/types/theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: themeType }>`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.lightCyan};
    font-size: 1.5rem;
    
    @media (min-width: 1024px) {
      font-size: 1.7rem;
    }
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
