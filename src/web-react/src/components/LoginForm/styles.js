import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Section = styled.section``

export const ForgetPassword = styled(Link)`
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: #3F3D56;
`

export const IsNutri = styled.div``

export const NoAccount = styled.span`
  width: 100%;
  text-align: center;
  font-size: 12px;
`
