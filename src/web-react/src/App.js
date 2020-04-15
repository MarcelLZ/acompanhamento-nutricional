import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components'

import { Routes } from './routes'

/**
 * Aplica estilos globalmente.
 */
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100%;
  }
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  )
}

export default App;
