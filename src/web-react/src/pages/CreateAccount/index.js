import React from 'react'

import { useVerifyAuthentication } from '../../routes'
import { WithLogo } from '../../components/Page/WithLogo'
import { NutriRegistry } from '../../components/NutriRegistry'

import { Container } from './styles'

function CreateAccount () {
  useVerifyAuthentication()
  
  return (
    <WithLogo>
      <Container>
        <NutriRegistry />
      </Container>
    </WithLogo>
  )
}

export { CreateAccount }
