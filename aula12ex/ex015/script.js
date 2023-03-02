function verificar() {
   
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelector('div#res')
     
     if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
     } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.getElementById('imagem')
        if(fsex[0].checked) {
            genero = 'Homem' 
            if (idade >=0 && idade < 10){
                //criança
                img.src = 'menino-crianca.png'
            } else if (idade < 21 ){
                //jovem
                img.src = 'jovem-homem.png'
            } else if (idade < 50){
                //adulto
                img.src = 'homem.png'
            } else {
                //idoso
                img.src = 'velho.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.src = 'menina-crianca.png'
            } else if (idade < 21 ){
                //jovem
                img.src = 'jovem-mulher.png'
            } else if (idade < 50){
                //adulto
                img.src = 'mulher.png'
            } else {
                //idoso
                img.src = 'velha.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
     }
}