function contar(){
    // Pegando os elementos da página
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    // Verifica se os campos foram preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO - Verifique os dados e tente novamente - ERRO')
        res.innerHTML = 'Impossível contar!'
    } else {
    // Converte os valores para número
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    // Ajusta o passo se for 0
    if (p <= 0) {
      window.alert('Passo inválido! Considerando passo = 1')
      p = 1
    }

    res.innerHTML = 'Contando:<br>'

    // Se o início for menor que o fim, conta crescente
    if (i < f) {
      for (var c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} 👉 `
      }
    } 
    // Senão, faz contagem regressiva
    else {
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} 👉 `
      }
    }

    // Final da contagem
    res.innerHTML += '🏁'
  }
}