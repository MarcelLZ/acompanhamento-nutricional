import React from 'react'
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
  function signOut () {
    // limpar o local storage
    // navegar para o hotsite
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
            <StyledLink>
              <MdDashboard />
              Início
            </StyledLink>
          </MenuItem>

          <MenuItem>
            <StyledLink>
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
        <Name>Silva Santos</Name>
        <SignOut>
          <MdTouchApp />
          Sair
        </SignOut>
      </User>
    </Container>
  )
}

export { Navbar }