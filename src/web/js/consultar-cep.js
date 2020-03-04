function consultarCEP () {
  axios
    .get(`http://viacep.com.br/ws/${$cep.value}/json/`)
    .then(({ data }) => {
      $street.value = data.logradouro
      $neighborhood.value = data.bairro
      $state.value = data.uf

      buscarCidades().then(function () {
        $city.value = data.ibge
        
        $city.disabled = true
        $state.disabled = true
        $street.disabled = true
        $neighborhood.disabled = true
      })
    })
    .catch(function () {
      $('#cepNaoEncontrado').modal({
        backdrop: 'static',
        show: true
      })
    })
}