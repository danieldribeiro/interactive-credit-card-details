import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  #root{
    display: flex;

    @media screen and (max-width: 430px) {
      flex-direction: column;
    }
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }
`