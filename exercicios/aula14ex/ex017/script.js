function gerar() {
    //pegando elementos da página
    var num = window.document.getElementById('numero')
    var res = window.document.getElementById('res')

    // Verifica se os campos foram preenchidos
    if (num.value.length == "") {
        window.alert('ERRO - Verifique os dados e tente novamente - ERRO')
        res.innerHTML = 'Impossível contar!'
    } else {
    // Converte os valores para número
    var n = Number(num.value)

    // Limpa o resultado antes de gerar - TIVE AJUDA NESSA PARTE
    res.innerHTML = ''

    // gera a tabuada de 1 a 10
    for (var c = 1; c <= 10; c++) {
        var tabu = `${n} x ${c} = ${n * c}`                            
        res.innerHTML += `${tabu}<br>`
    }
    } 
    
}