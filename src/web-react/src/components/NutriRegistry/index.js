import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import { saveNutri } from '../../services/nutri-save'

import { LabelInput, IconInput, ButtonInput } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'

import { FormContainer, Space, Fieldset, Legend, Row } from './styles'

function NutriRegistry () {
  const history = useHistory()
  const [states, setStates] = useState()
  const [cities, setCities] = useState()
  const [selectedStateInitials, setStateInitials] = useState()
  const [disabled, setDisabled] = useState(false)

  const [data, setData] = useState({
    name: '',
    lastName: '',
    CPF: '',
    email: '',
    password: '',
    repeatPassword: '',
    CEP: '',
    neighborhood: '',
    street: '',
    number: '',
    state: '',
    city: '',
    location: '',
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: ''
  })

  useEffect(getStates, [])
  useEffect(getCities, [selectedStateInitials])

  // Buscar estados
  function getStates () {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(({ data }) => {
        const states = data.map(function (state) {
          return { id: state.id, value: state.sigla, text: state.nome } 
        })

        setStates(states)
      })
  }

  // Buscar cidades
  function getCities () {
    if (selectedStateInitials) {
      const selectedState = states.find(state => state.value === selectedStateInitials)
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState.id}/municipios`)
        .then(({ data }) => {
          const cities = data.map(function (city) {
            return { value: city.id, text: city.nome }
          })

          setCities(cities)
        })
    }
  }

  function onChangeValue (field, value) {
    setData({
      ...data,
      [field]: value
    })
  }

  function getByCEP () {
    axios
      .get(`http://viacep.com.br/ws/${data.CEP}/json/`)
      .then(({ data: foundData }) => {
        setData({
          ...data,
          street: foundData.logradouro,
          neighborhood: foundData.bairro,
          state: foundData.uf,
          city: foundData.ibge
        })

        setStateInitials(foundData.uf)
        setDisabled(true)
      })
      .catch(() => {
        Swal.fire(
          'Que pena!',
          'Não encontramos o seu CEP. Você pode tentar outro ou informar os dados manualmente.',
          'error'
        )
      })
  }

  function handleStateChange (initials) {
    setStateInitials(initials)
    setData({
      ...data,
      state: initials
    })
  }

  function passwordsAreEquals() {
    return data.password === data.repeatPassword
  }

  function validateRequiredFields () {
    const isFormValid = !!data.name && !!data.lastName && !!data.email && data.password && !!data.repeatPassword
    && !!data.CEP && !!data.neighborhood && !!data.street && !!data.number && !!data.state && !!data.city

    if (!isFormValid) {
      Swal.fire(
        'Ops!',
        'Parece que você não preencheu alguns dos dados obrigatórios. Revise o formulário (Campos com * são obrigatórios).',
        'error'
      )
    }
  }

  function handleSubmit (e) {
    validateRequiredFields()

    saveNutri(data)
      .then(() => {
        Swal.fire({
          title: 'Parabéns!',
          text: "Cadastro realizado com sucesso!",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Legal!'
        }).then((result) => {
          if (result.value) {
            history.push('/')
          }
        })
      })
      .catch(() => {
        Swal.fire(
          'Que pena!',
          'Não consegui cadastrar você no sistema. Por favor, tente novamente!',
          'error'
        )
      })

    e.preventDefault()
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Fieldset>
        <Legend>Crie sua conta</Legend>

        <Row>
          <LabelInput
            label="Nome*"
            id="name"
            placeholder="João"
            value={data.name}
            onChangeText={(text) => onChangeValue('name', text)}
          />

          <Space />

          <LabelInput
            label="Sobrenome*"
            id="lastName"
            placeholder="Silva"
            value={data.lastName}
            onChangeText={(text) => onChangeValue('lastName', text)}
          />
        </Row>

        <Row>
          <LabelInput
            type="number"
            label="CPF"
            id="cpf"
            placeholder="088.347.708-66"
            value={data.CPF}
            onChangeText={(text) => onChangeValue('CPF', text)}
          />

          <Space />

          <LabelInput
            type="email"
            label="Email*"
            id="email"
            placeholder="joao@email.com"
            value={data.email}
            onChangeText={(text) => onChangeValue('email', text)}
          />
        </Row>

        <Row>
          <LabelInput
            type="password"
            label="Senha*"
            id="password"
            value={data.password}
            onChangeText={(text) => onChangeValue('password', text)}
          />

          <Space />

          <LabelInput
            type="password"
            label="Repetir senha*"
            id="repeat-password"
            value={data.repeatPassword}
            onChangeText={(text) => onChangeValue('repeatPassword', text)}
            invalid={!passwordsAreEquals()}
            helpText={!passwordsAreEquals() ? "As senhas não são iguais" : null}
          />
        </Row>
      </Fieldset>

      <Fieldset>
        <Legend>Dados do endereço</Legend>

        <Row>
          <ButtonInput
            label="CEP*"
            id="cep"
            placeholder="Qual seu CEP?"
            right="Consultar"
            onPress={getByCEP}
            onChangeText={(text) => onChangeValue('CEP', text)}
            value={data.CEP}
          />

          <Space />

          <LabelInput
            label="Bairro*"
            id="neighborhood"
            value={data.neighborhood}
            disabled={disabled}
            onChangeText={(text) => onChangeValue('neighborhood', text)}
          />
        </Row>

        <Row>
          <LabelInput
            label="Rua*"
            id="street"
            value={data.street}
            disabled={disabled}
            onChangeText={(text) => onChangeValue('street', text)}
          />

          <Space />

          <LabelInput
            label="Número*"
            id="number"
            value={data.number}
            onChangeText={(text) => onChangeValue('number', text)}
          />
        </Row>

        <Row>
          <Select
            label="Estado*"
            id="state"
            options={states}
            onSelect={handleStateChange}
            value={data.state}
            disabled={disabled}
          />

          <Space />

          <Select
            label="Cidade*"
            id="city"
            options={cities}
            value={data.city}
            disabled={disabled}
            onSelect={(IBGECode) => onChangeValue('city', IBGECode)}
          />
        </Row>

        <Row>
          <LabelInput
            label="Como chegar?"
            id="location"
            placeholder="Copie o seu endereço do Google Maps"
            value={data.location}
            onChangeText={(text) => onChangeValue('location', text)}
          />
        </Row>
      </Fieldset>

      <Fieldset>
        <Legend>Redes sociais</Legend>

        <Row>
          <IconInput
            left={<FaFacebook />}
            id="facebook"
            placeholder="facebook.com/"
            value={data.facebook}
            onChangeText={(text) => onChangeValue('facebook', text)}
          />

          <Space />

          <IconInput
            left={<FaTwitter />}
            id="twitter"
            placeholder="twitter.com/"
            value={data.twitter}
            onChangeText={(text) => onChangeValue('twitter', text)}
          />
        </Row>

        <Row>
          <IconInput
            left={<FaInstagram />}
            id="instagram"
            placeholder="instagram.com/"
            value={data.instagram}
            onChangeText={(text) => onChangeValue('instagram', text)}
          />

          <Space />

          <IconInput
            left={<FaWhatsapp />}
            id="whatsapp"
            placeholder="Número para contato"
            value={data.whatsapp}
            onChangeText={(text) => onChangeValue('whatsapp', text)}
          />
        </Row>
      </Fieldset>

      <Row>
        <Button to="/" outlined isDark>Voltar</Button>
        <Space />
        <Button type="submit">Cadastrar</Button>
      </Row>
    </FormContainer>
  )
}

export { NutriRegistry }
