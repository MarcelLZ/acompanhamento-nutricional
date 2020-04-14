import React from 'react'
import { FaUserLock } from 'react-icons/fa'

import { WithLogo } from '../../components/Page/WithLogo'
import {
  RightCircle,
  LoginButton,
  LeftCircle,
  Content,
  Title,
  Subtitle,
  SignUpButton,
  AppImage
} from './styles'

function Hotsite () {
  return (
    <WithLogo>
      <RightCircle>
        <LoginButton to="/login">
          <FaUserLock />
          <span style={{ margin: '0 10px' }}>Entrar</span>
        </LoginButton>

        <img
          src={process.env.PUBLIC_URL + '/assets/images/HotSite-Circle-Right.svg'}
          alt="Button to login"
        />
      </RightCircle>

      <LeftCircle>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/HotSite-Circle-Left.svg'}
          alt=""
        />
      </LeftCircle>

      <Content>
        <Title>Acompanhamento nutricional personalizado</Title>
        <Subtitle>Melhore a sua saúde e o seu bem-estar sem sair de casa!</Subtitle>
        <SignUpButton to="/create-account" outlined>Cadastre-se</SignUpButton>
      </Content>

      <AppImage>
        <img
          src={process.env.PUBLIC_URL + '/assets/images/HotSite-App.svg'}
          alt=""
        />
      </AppImage>
    </WithLogo>
  )
}

export { Hotsite }