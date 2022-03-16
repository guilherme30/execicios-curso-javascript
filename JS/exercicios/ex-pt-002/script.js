function verificar() {
    var date = new Date()
    var anoAtual = date.getFullYear()
    var anoNascimento = document.getElementById("anoNasc")
    var resultado = document.getElementById("resultado")

    if (anoNascimento.value == 0 || anoNascimento.value > anoAtual) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }
    else {
       var sexo = document.getElementsByName("sexo")
       var idade = anoAtual - Number(anoNascimento.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (sexo[0].checked) {
           genero = 'Homem'

           if (idade >= 0 && idade < 3) {
               //bebe
               img.setAttribute('src', 'imagens/bebe-homem.png')
           }
           else if (idade >= 3 && idade < 11) {
               //criança
               img.setAttribute('src', 'imagens/crianca-homem.png')
           }
           else if (idade >= 11 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
           }
           else if (idade >=21 && idade < 55) {
               //adulto
               img.setAttribute('src', 'imagens/adulto-homem.png')
           }
           else if (idade >=55) {
               //idoso
               img.setAttribute('src', 'imagens/idoso-homem.png')
           }
           
       } 
       else if (sexo[1].checked) {
           genero = 'Mulher'

            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            }
            else if (idade >= 3 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagens/crianca-mulher.png')
            }
            else if (idade >= 11 && idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            }
            else if (idade >=21 && idade < 55) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            }
            else if (idade >=55) {
                //idoso
                img.setAttribute('src', 'imagens/idosa-mulher.png')
            }
       }
    
    resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos!</p>`
    resultado.appendChild(img)
    }
}