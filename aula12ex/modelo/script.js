function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 10
msg.innerHTML = `Agora são ${hora} horas.`

   if (hora >= 0 && hora < 12) {
      //Bom dia
      img.src = 'imagem/fotonova-manha-peq.png'
      document.body.style.background = '#e2cd9f'
   } else if (hora >= 12 && hora < 18) {
      //Boa tarde
      img.src = 'imagem/foto-tarde-peq.png'
      document.body.style.background = '#b98467'
   } else {
      //Boa noite
      img.src = 'imagem/foto-noite-peq.png'
      document.body.style.background = '#515154'
   }
}