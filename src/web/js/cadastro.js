function cadastrarNutricionista () {
  const dadosEnvio = {
    nome: $nome.value,
    sobrenome: $sobrenome.value,
    cfn: $cfn.value,
    email: $email.value,
    password: $password.value,
    repeatPassword: $repeatPassword.value,
    cep: $cep.value,
    neighborhood: $neighborhood.value,
    street: $street.value,
    number: $number.value,
    state: $state.value,
    city: $city.value,
    location: $location.value,
    facebook: $facebook.value,
    twitter: $twitter.value,
    whatsapp: $whatsapp.value
  }

  if (
    !dadosEnvio.nome ||
    !dadosEnvio.sobrenome ||
    !dadosEnvio.cfn ||
    !dadosEnvio.email ||
    !dadosEnvio.password ||
    !dadosEnvio.repeatPassword ||
    !dadosEnvio.cep ||
    !dadosEnvio.neighborhood ||
    !dadosEnvio.street ||
    !dadosEnvio.number ||
    !dadosEnvio.state ||
    !dadosEnvio.number ||
    !dadosEnvio.city
  ) {
    $('#preenchaTodasOsCampos').modal({
      backdrop: 'static',
      show: true
    })

    return
  }
  
  if (dadosEnvio.password !== dadosEnvio.repeatPassword) {
    $('#senhasNaoConferem').modal({
      backdrop: 'static',
      show: true
    })

    return
  }

  axios
    .post('http://localhost:3000/nutricionistas', dadosEnvio)
    .then(() => {
      $('#salvoComSucesso').modal('show')
    })
    .catch(() => {
      $('#erroAoSalvar').modal({
        backdrop: 'static',
        show: true
      })
    })
}

function buscarEstados () {
  axios
    .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(({ data }) => {
      const htmlDoSelectEstados = data.map(function (estado) {
        return `<option value="${estado.sigla}" data-id="${estado.id}">${estado.nome}</option>`
      })

      $state.insertAdjacentHTML('beforeend', htmlDoSelectEstados)
    })
}

function buscarCidades () {
  const indiceEstadoSelecionado = $state.selectedIndex
  const stateId = $state.options[indiceEstadoSelecionado].getAttribute('data-id')

  return axios
    .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`)
    .then(({ data }) => {
      const htmlDoSelectCidades = data.map(function (cidade) {
        return `<option value="${cidade.id}">${cidade.nome}</option>`
      })

      $city.options.length = 0
      $city.insertAdjacentHTML('beforeend', htmlDoSelectCidades)
    })
}

buscarEstados()



