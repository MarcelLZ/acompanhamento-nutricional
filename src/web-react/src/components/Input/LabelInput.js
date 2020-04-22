import React from 'react'
import { FormGroup, Label, Input, FormText } from 'reactstrap'

function randomId () {
  return Math.floor(Math.random() * 1000) + 1
}

function LabelInput ({ label = "Sem label", id, helpText, type = "text", placeholder, value, onChangeText, disabled }) {
  const newID = id ? id : randomId()
  const textoParaAparecer = !id ? 'Por favor informe o ID!' : helpText

  function handleChange (e) {
    onChangeText && onChangeText(e.target.value)
  }

  return (
    <FormGroup style={{ width: '100%' }}>
      <Label for={newID}>{label}</Label>

      <Input
        type={type}
        id={newID}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />

      {textoParaAparecer ? <FormText id={`small-${id}`}>{textoParaAparecer}</FormText> : null}
    </FormGroup>
  )
}

export { LabelInput }