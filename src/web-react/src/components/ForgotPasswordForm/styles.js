import styled from 'styled-components'

import { Card } from '../Card'

export const StyledCard = styled(Card)`
  position: relative;
  top: -150px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const GoToLogin = styled.span`
  width: 100%;
  text-align: center;
  font-size: 12px;
`
