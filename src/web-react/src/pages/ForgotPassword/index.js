import React from 'react'

import { WithLogo } from '../../components/Page/WithLogo'
import { ForgotPasswordForm } from '../../components/ForgotPasswordForm'

import { Container } from './styles'

function ForgotPassword () {
  return (
    <WithLogo>
      <Container>
        <ForgotPasswordForm />
      </Container>
    </WithLogo>
  )
}

export { ForgotPassword }