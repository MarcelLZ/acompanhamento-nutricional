import React from 'react'

import { LabelInput } from '../Input'
import { Button } from '../Button'
import { FormContainer, Space, Row } from './styles'

function NutriRegistry () {
  return (
    <FormContainer>
      <Row>
        <LabelInput
          label="Nome"
          id="name"
          placeholder="João"
        />

        <Space />

        <LabelInput
          label="Sobrenome"
          id="lastName"
          placeholder="Silva"
        />
      </Row>

      <Row>
        <LabelInput
          type="number"
          label="CPF"
          id="cpf"
          placeholder="088.347.708-66"
        />

        <Space />

        <LabelInput
          type="email"
          label="Email"
          id="email"
          placeholder="joao@email.com"
        />
      </Row>

      <Row>
        <LabelInput
          type="password"
          label="Senha"
          id="password"
        />

        <Space />

        <LabelInput
          type="password"
          label="Repretir senha"
          id="repeat-password"
        />
      </Row>

      <Row>
        <LabelInput
          label="CEP"
          id="cep"
        />

        <Space />

        <LabelInput
          label="Bairro"
          id="neighborhood"
        />
      </Row>

      <Row>
        <LabelInput
          label="Rua"
          id="street"
        />

        <Space />

        <LabelInput
          label="Número"
          id="number"
        />
      </Row>

      <Row>
        <LabelInput
          label="Estado"
          id="state"
        />

        <Space />

        <LabelInput
          label="Cidade"
          id="city"
        />
      </Row>

      <Row>
        <LabelInput
          label="Como chegar?"
          id="location"
          placeholder="Copie o seu endereço do Google Maps"
        />
      </Row>

      <Row>
        <LabelInput
          label="Facebook"
          id="facebook"
          placeholder="facebook.com/"
        />

        <Space />

        <LabelInput
          label="Twitter"
          id="twitter"
          placeholder="twitter.com"
        />
      </Row>

      <Row>
        <LabelInput
          label="Instagram"
          id="instagram"
          placeholder="instagram.com/"
        />

        <Space />

        <LabelInput
          label="WhatsApp"
          id="whatsapp"
          placeholder="Número para contato"
        />
      </Row>

      <Row>
        <Button to="/" outlined>Voltar</Button>
        <Button>Cadastrar</Button>
      </Row>
    </FormContainer>
  )
}

export { NutriRegistry }
