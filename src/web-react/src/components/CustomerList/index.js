import React, { useState, useEffect } from 'react'

import { buscarPacientes } from '../../services/buscar-pacientes'
import { Table, THead, TR, TH, TBody, TD } from '../Table'
import { Container } from './styles'

function CustomerList () {
  const [pacientes, setPacientes] = useState([])

  useEffect(function () {
    buscarPacientes()
      .then(({ data }) => {
        setPacientes(data)
      })
  }, [])

  return (
    <Container>
      <h1>Lista de pacientes</h1>

      <Table>
        <THead>
          <TR>
            <TH>Nome</TH>
            <TH style={{ width: '200px' }}>Data de cadastro</TH>
          </TR>
        </THead>

        <TBody>
          {pacientes.map(paciente => (
            <TR>
              <TD>{paciente.name}</TD>
              <TD>{paciente.createdAt}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </Container>
  )
}

export { CustomerList }