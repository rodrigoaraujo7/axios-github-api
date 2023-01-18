import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    margin-left: 5px;
  }

  body {
    background-color: #f4f4f4;
    color: #101010;
    font-family: 'Inter';
  }

  p {
    color: #242424;
  }
`