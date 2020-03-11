import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap'

import { LabelInput } from './components/Input'

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <LabelInput id="xpto" helpText="Teste" />
        </Col>
      </Row>

      <Row>
        <Col>
          <LabelInput
            id="inputEmail"
            label="Seu email"
            type="email"
            helpText="seu@email.com"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <LabelInput
            id="inputSenha"
            label="Sua senha"
            type="password"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button color="success">Entrar!</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
