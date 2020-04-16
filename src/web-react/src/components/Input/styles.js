import styled from 'styled-components'
import { InputGroupAddon } from 'reactstrap'

export const IconInputContainer = styled.div`
  width: 100%;
  margin: 10px 0;
`

export const ButtonInputContainer = styled.div`
  width: 100%;
`

export const GroupAddon = styled(InputGroupAddon)`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #ced4da;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  padding: 0 10px;
  width: 50px;

  span { background-color: #fff; border: 0; padding: 0; }
`
