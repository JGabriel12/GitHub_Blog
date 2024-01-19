import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/theme/default'
import { GlobalStyle } from './style/global'
import { Blog } from './page/Blog'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Blog />
    </ThemeProvider>
  )
}
