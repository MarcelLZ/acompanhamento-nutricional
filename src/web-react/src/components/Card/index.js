import React from 'react'

import { Container } from './styles'

function Card ({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export { Card }