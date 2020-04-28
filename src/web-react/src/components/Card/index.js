import React from 'react'

import { Container } from './styles'

function Card ({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export { Card }