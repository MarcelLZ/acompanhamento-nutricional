import React from 'react'

import { useVerifyAuthentication } from '../../routes'
import { WithLogo } from '../../components/Page/WithLogo'
import { ForgotPasswordForm } from '../../components/ForgotPasswordForm'

import { Container } from './styles'

function ForgotPassword () {
  useVerifyAuthentication()
  
  return (
    <WithLogo>
      <Container>
        <ForgotPasswordForm />
      </Container>
    </WithLogo>
  )
}

export { ForgotPassword }