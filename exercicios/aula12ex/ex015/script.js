function verificar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date() 
    var ano = data.getFullYear()
    msg.innerHTML = `Agora são ${ano} horas.`
    if (ano >= 1800 && ano < 1950){
        // velho!
        img.src = 'velho.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 1950 && hora <= 2010){
        //adulto!
        img.src = 'adulto.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //jovem!
        img.src = 'jovem.jpg'
        document.body.style.background = '#242425ff'
    }
}