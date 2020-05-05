import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AiOutlineMail, AiOutlineKey } from 'react-icons/ai'

import { login } from '../../services/auth'

import { Card } from '../Card'
import { Logo } from './Logo'
import { IconInput } from '../Input/IconInput'
import { Button } from '../Button'
import { Switch } from '../Switch'

import { Container, Form, ForgetPassword, IsNutri, NoAccount } from './styles'

function LoginForm () {
  const history = useHistory()
  const [data, setData] = useState({ email: '', password: '' })

  function onChangeValue (field, value) {
    setData({
      ...data,
      [field]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    login(data)
      .then(({ data }) => {
        localStorage.setItem('user', JSON.stringify(data));
        history.push('/dashboard')
      })
      .catch(() => {
        Swal.fire(
          'Ops!',
          'Parece que o usuário e/ou senha estão incorretos. Por favor, revise os dados e tente novamente',
          'error'
        )
      })
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