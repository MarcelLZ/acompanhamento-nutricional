import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { MdDashboard, MdFace, MdTouchApp } from 'react-icons/md'

import {
  Container,
  Section,
  Brand,
  Menu,
  MenuItem,
  StyledLink,
  User,
  Avatar,
  Name,
  SignOut
} from './styles'

function Navbar () {
  const history = useHistory()
  const [userName, setUserName] = useState()

  useEffect(function () {
    const userData = localStorage.getItem('user')
    const { name } = JSON.parse(userData)
    setUserName(name)
  }, [])

  function signOut () {
    localStorage.removeItem('user')
    history.push('/')
  }

  return (
    <Container>
      <Section>
        <Brand
          src={`${process.env.PUBLIC_URL}/assets/images/LogoNutrilife2.svg`}
          alt="nutrilife"
        />

        <Menu>
          <MenuItem>
            <StyledLink to="/dashboard">
              <MdDashboard />
              Início
            </StyledLink>
          </MenuItem>

          <MenuItem>
            <StyledLink to="/customers">
              <MdFace />
              Clientes
            </StyledLink>
          </MenuItem>

          <MenuItem>
            <StyledLink>Exames</StyledLink>
          </MenuItem>

          <MenuItem>
            <StyledLink>Cardápios</StyledLink>
          </MenuItem>
        </Menu>
      </Section>

      <User>
        <Avatar />
        <Name>{userName}</Name>
        <SignOut type="button" onClick={signOut}>
          <MdTouchApp />
          Sair
        </SignOut>
      </User>
    </Container>
  )
}

export { Navbar }