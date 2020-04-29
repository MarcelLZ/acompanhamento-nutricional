import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMail, AiOutlineKey } from 'react-icons/ai'

import { login } from '../../services/auth'

import { Card } from '../Card'
import { Logo } from './Logo'
import { IconInput } from '../Input/IconInput'
import { Button } from '../Button'
import { Switch } from '../Switch'

import { Container, Form, ForgetPassword, IsNutri, NoAccount } from './styles'

function LoginForm () {
  const [data, setData] = useState({ email: '', password: '' })

  function onChangeValue (field, value) {
    setData({
      ...data,
      [field]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log({ data })
    // login(dados do usuário)
  }

  return (
    <Card>
      <Container>
        <Logo />

        <Form onSubmit={handleSubmit}>
          <IconInput
            left={<AiOutlineMail />}
            id="email"
            placeholder="Email"
            onChangeText={(text) => onChangeValue('email', text)}
          />

          <IconInput
            left={<AiOutlineKey />}
            id="password"
            placeholder="Senha"
            onChangeText={(text) => onChangeValue('password', text)}
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