function botao() {
    var inicio = document.getElementById ("inicio")
    var fim = document.getElementById ("fim")
    var passo = document.getElementById ("passo")
    var conteudo = document.getElementById("conteudo")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        conteudo.innerHTML = `IMPOSSÍVEL CONTAR`
    }
    else {
        conteudo.innerHTML = `Contando!...`

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert("Impossível contar! Considerando passo 1!")
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                conteudo.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p ) {
                conteudo.innerHTML += `${c} \u{1F449}`
            }
        }
        conteudo.innerHTML += `\u{1F30C}`
    }

}