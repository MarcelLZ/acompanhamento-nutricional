import React from 'react'

import { StyledSwitch } from './styles'


function randomId () {
  return Math.floor(Math.random() * 1000) + 1
}

function Switch ({ id, name, ...rest }) {
  const newID = id || randomId()
  const newName = name || newID

  return <StyledSwitch type="switch" id={newID} name={newName} {...rest} />
}

export { Switch }