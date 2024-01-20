import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/theme/default'
import { GlobalStyle } from './style/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
