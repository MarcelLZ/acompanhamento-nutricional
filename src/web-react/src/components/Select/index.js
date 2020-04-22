import React from 'react'
import { Input, Label } from 'reactstrap'

import { Container } from './styles'

function Select ({ label, options = [], id, onSelect, value, disabled }) {
  function handleChange (e) {
    onSelect && onSelect(e.target.value)
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Input type="select" name={id} id={id} onChange={handleChange} value={value} disabled={disabled}>
        <option value="">Selecione</option>

        {options.map((option) => {
          return <option value={option.value}>{option.text}</option>
        })}
      </Input>
    </Container>
  )
}

export { Select }
