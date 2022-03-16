
var numero = document.getElementById('valor')
var lista = document.getElementById('lista')
var resultado = document.querySelector('div.resultado')
var numeros = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, numeros)) {
        numeros.push(Number(numero.value))
            var item = document.createElement('option')
            item.text = `O valor adicionado foi: ${numero.value}`
            lista.appendChild(item)
            resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var totalNumeros = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for (let pos in numeros) {

            soma += numeros[pos]
            
            if (numeros[pos] > maior) 
                maior = numeros[pos]
            
            if (numeros[pos] < menor) 
                menor = numeros[pos]
            
        }

        media = soma / totalNumeros

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Total de valores adicionados: ${totalNumeros}</p>`
        resultado.innerHTML += `<p>Maior número adicionado: ${maior}</p>`
        resultado.innerHTML += `<p>Menor número adicionado: ${menor}</p>`
        resultado.innerHTML += `<p>Soma dos valores adicionados: ${soma}</p>`
        resultado.innerHTML += `<p>Média dos valores adicionados: ${media}</p>`
    }
}
