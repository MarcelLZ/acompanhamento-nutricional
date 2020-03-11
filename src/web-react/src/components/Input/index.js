import React from 'react'
import { FormGroup, Label, Input, FormText } from 'reactstrap'

function randomId () {
  return Math.floor(Math.random() * 1000) + 1
}

function LabelInput ({ label = "Sem label", id, helpText, type = "text" }) {
  const newID = id ? id : randomId()
  const textoParaAparecer = !id ? 'Por favor informe o ID!' : helpText

  return (
    <FormGroup>
      <Label for={newID}>{label}</Label>
      <Input type={type} id={newID} />
      {textoParaAparecer ? <FormText id={`small-${id}`}>{textoParaAparecer}</FormText> : null}
    </FormGroup>
  )
}

export { LabelInput }