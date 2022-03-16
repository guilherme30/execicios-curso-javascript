function contar() {
    var valor = document.getElementById("nmr")
    var tabuada = document.getElementById("tbd")

    var num = Number(nmr.value)

    if (num <= 0) {
        window.alert('Erro... pfvr digite um número válido (maior que 0 inteiro)!')
    }
    else {
        tabuada.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            var resultado = num * c
            item.text = `${num} X ${c} = ${resultado}`
            tabuada.appendChild(item)
        }
    } 
}

