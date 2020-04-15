import React from 'react'
import { InputGroup, Label, Input } from 'reactstrap'

import { IconInputContainer, GroupAddon } from './styles'

function randomId () {
  return Math.floor(Math.random() * 1000) + 1
}

function IconInput ({ label, id, type = "text", placeholder, left, right }) {
  const newID = id ? id : randomId()

  return (
    <IconInputContainer>
      {label && <Label for={newID}>{label}</Label>}

      <InputGroup>
        {left && (
          <GroupAddon addonType="prepend">
            {left}
          </GroupAddon>
        )}

        <Input type={type} id={newID} placeholder={placeholder} />

        {right && (
          <GroupAddon addonType="apend">
            {right}
          </GroupAddon>
        )}
      </InputGroup>
    </IconInputContainer>
  )
}

export { IconInput }
