import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail } from 'react-icons/ai'

import { IconInput } from '../Input/IconInput'
import { Button } from '../Button'

import { StyledCard, Container, Form, GoToLogin } from './styles'

function ForgotPasswordForm () {
  return (
    <StyledCard>
      <Container>
        <Form>
          <IconInput
            left={<AiOutlineMail />}
            id="email"
            placeholder="Informe seu e-mail."
          />

          <Button type="submit">
            Recuperar
          </Button>

          <GoToLogin>Já tem uma conta? <Link to="/login">Faça login!</Link></GoToLogin>
        </Form>
      </Container>
    </StyledCard>
  )
}

export { ForgotPasswordForm }