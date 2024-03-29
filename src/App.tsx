import { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router/Router"

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
