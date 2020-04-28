import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail, AiOutlineKey } from 'react-icons/ai'

import { Card } from '../Card'
import { Logo } from './Logo'
import { IconInput } from '../Input/IconInput'
import { Button } from '../Button'
import { Switch } from '../Switch'

import { Container, Form, ForgetPassword, IsNutri, NoAccount } from './styles'

function LoginForm () {
  return (
    <Card>
      <Container>
        <Logo />

        <Form>
          <IconInput
            left={<AiOutlineMail />}
            id="email"
            placeholder="Email"
          />

          <IconInput
            left={<AiOutlineKey />}
            id="password"
            placeholder="Senha"
          />

          <ForgetPassword to="/forgot-password">
            Esqueceu sua senha?
          </ForgetPassword>

          <IsNutri>
            <Switch
              name="isNutry"
              label="Sou nutricionista"
            />
          </IsNutri>

          <Button type="submit">
            Entrar
          </Button>

          <NoAccount>Não tem uma conta? <Link to="/create-account">Cadastre-se</Link> já!</NoAccount>
        </Form>
      </Container>
    </Card>
  )
}

export { LoginForm }