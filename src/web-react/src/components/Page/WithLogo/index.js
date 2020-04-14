import React from 'react'

import { NutrilifeLogo } from '../../NutrilifeLogo'
import { Container } from './styles'

function WithLogo ({ children }) {
  return (
    <Container>
      <NutrilifeLogo />
      {children}
    </Container>
  )
}

export { WithLogo }