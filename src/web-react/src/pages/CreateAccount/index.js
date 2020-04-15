import React from 'react'

import { WithLogo } from '../../components/Page/WithLogo'
import { NutriRegistry } from '../../components/NutriRegistry'

import { Container } from './styles'

function CreateAccount () {
  return (
    <WithLogo>
      <Container>
        <NutriRegistry />
      </Container>
    </WithLogo>
  )
}

export { CreateAccount }
