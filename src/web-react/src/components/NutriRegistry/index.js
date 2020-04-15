import React from 'react'
import { FaUserLock } from 'react-icons/fa'

import { LabelInput, IconInput } from '../Input'
import { Button } from '../Button'

import { FormContainer, Space, Fieldset, Legend, Row } from './styles'

function NutriRegistry () {
  return (
    <FormContainer>
      <Fieldset>
        <Legend>Crie sua conta</Legend>

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
      </Fieldset>

      <Fieldset>
        <Legend>Dados do endereço</Legend>

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
      </Fieldset>

      <Fieldset>
        <Legend>Redes sociais</Legend>

        <Row>
          <IconInput
            left="W"
            id="facebook"
            placeholder="facebook.com/"
          />

          <Space />

          <IconInput
            left="T"
            id="twitter"
            placeholder="twitter.com/"
          />
        </Row>

        <Row>
          <IconInput
            left={<FaUserLock />}
            id="instagram"
            placeholder="instagram.com/"
          />

          <Space />

          <IconInput
            left="W"
            id="whatsapp"
            placeholder="Número para contato"
          />
        </Row>
      </Fieldset>

      <Row>
        <Button to="/" outlined isDark>Voltar</Button>
        <Space />
        <Button>Cadastrar</Button>
      </Row>
    </FormContainer>
  )
}

export { NutriRegistry }
