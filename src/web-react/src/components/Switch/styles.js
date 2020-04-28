import styled from 'styled-components'
import { CustomInput } from 'reactstrap'

export const StyledSwitch = styled(CustomInput)`
  label::before {
    padding: 10px;
    background-color: #3F3D56;
    width: 40px !important;
    top: 1px;
    border: 0;
  }

  input:checked~label::before {
    background-color: #00B049 !important;
  }

  label::after {
    background-color: #fff !important;
  }

  input:checked~label::after {
    transform: translateX(22px)!important;
  }

  label {
    font-size: 12px;
    padding: 2px 10px;
  }
`