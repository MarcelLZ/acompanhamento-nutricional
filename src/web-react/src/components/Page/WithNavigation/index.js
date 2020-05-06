import React from 'react'

import { Navbar } from '../../Navbar'
import { Container } from './styles'

function WithNavigation ({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

export { WithNavigation }