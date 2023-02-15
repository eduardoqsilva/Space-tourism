import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { NavBar } from "./components/nav/NavBar";

import { GlobalStyle } from './styles/global'

function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
