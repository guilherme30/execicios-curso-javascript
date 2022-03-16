
function carregar() {
    var msg = window.document.getElementById("msg")
    var foto = document.getElementById("imagem")
    var data = new Date
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src = 'img-dedia.png'
        document.body.style.background = 'rgb(160, 160, 245)';
        
    }
    else if (hora >= 12 && hora < 18) {
        //boa tarde
        foto.src = 'img-tarde.png'
        document.body.style.background = 'rgb(255, 253, 155)';
    }
    else {
        //boa noite
        foto.src = 'img-noite.png'
        document.body.style.background = 'rgb(13, 14, 51)';
    }
}
