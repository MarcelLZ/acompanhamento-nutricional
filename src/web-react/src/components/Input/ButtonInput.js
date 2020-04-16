import React from 'react'
import { InputGroup, InputGroupAddon, Input, Label } from 'reactstrap'

import { Button } from '../Button'

import { ButtonInputContainer } from './styles'

function randomId () {
  return Math.floor(Math.random() * 1000) + 1
}

function ButtonInput ({ label, id, placeholder, left, right }) {
  const newID = id ? id : randomId()

  function removeBorderRadius () {
    return left
      ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
      : { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
  }

  return (
    <ButtonInputContainer>
      {label && <Label for={newID}>{label}</Label>}
      <InputGroup>

        {left && (
          <InputGroupAddon addonType="prepend">
            <Button outlined style={{ padding: '5px' }}>{left}</Button>
          </InputGroupAddon>
        )}
        
        <Input
          id={newID}
          placeholder={placeholder}
          style={removeBorderRadius()}
        />

        {right && (
          <InputGroupAddon addonType="apend">
            <Button outlined style={{ padding: '5px' }}>{right}</Button>
          </InputGroupAddon>
        )}
      </InputGroup>
    </ButtonInputContainer>
  )
}

export { ButtonInput }