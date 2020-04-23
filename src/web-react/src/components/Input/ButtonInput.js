import React from 'react'
import { InputGroup, InputGroupAddon, Input, Label } from 'reactstrap'

import { Button } from '../Button'

import { ButtonInputContainer } from './styles'

function randomId () {
  return Math.floor(Math.random() * 1000) + 1
}

function ButtonInput ({ label, id, placeholder, left, right, onPress, onChangeText, value }) {
  const newID = id ? id : randomId()

  function removeBorderRadius () {
    return left
      ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
      : { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
  }

  function handleChange (e) {
    onChangeText && onChangeText(e.target.value)
  }

  return (
    <ButtonInputContainer>
      {label && <Label for={newID}>{label}</Label>}

      <InputGroup>
        {left && (
          <InputGroupAddon addonType="prepend">
            <Button
              outlined
              style={{ padding: '5px' }}
              type="button"
              onClick={onPress}
            >
              {left}
            </Button>
          </InputGroupAddon>
        )}
        
        <Input
          id={newID}
          placeholder={placeholder}
          style={removeBorderRadius()}
          onChange={handleChange}
          value={value}
        />

        {right && (
          <InputGroupAddon addonType="apend">
            <Button
              outlined
              style={{ padding: '5px' }}
              type="button"
              onClick={onPress}
            >
              {right}
            </Button>
          </InputGroupAddon>
        )}
      </InputGroup>
    </ButtonInputContainer>
  )
}

export { ButtonInput }