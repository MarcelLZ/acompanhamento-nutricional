import React from 'react'

import { useVerifyAuthentication } from '../../routes'
import { Blank } from '../../components/Page/Blank'
import { LoginForm } from '../../components/LoginForm'

import { Container } from './styles'

function Login () {
  useVerifyAuthentication()

  return (
    <Blank>
      <Container>
        <LoginForm />
      </Container>
    </Blank>
  )
}

export { Login }