import React from 'react'

import { Blank } from '../../components/Page/Blank'
import { LoginForm } from '../../components/LoginForm'

import { Container } from './styles'

function Login () {
  return (
    <Blank>
      <Container>
        <LoginForm />
      </Container>
    </Blank>
  )
}

export { Login }