import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: ${({ theme }) => theme.fonts.Nunito};
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    font-weight: 400;
    line-height: 160%;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus {
    outline: none;
    box-shadow: none;
  }
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['base-border']}
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.blue};
      border-radius: 999px;
    }
`
