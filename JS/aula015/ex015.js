var numeros = [1, 3, 5, 4, 2, 0]

numeros[6] = 6
numeros[0] = 10
numeros.push(7)
//console.log(`Nosso vetor possui os números ${numeros}, ele tem ${numeros.length} posições e ordenado fica assim: ${numeros.sort()}`)

/*for (i = 0; i <= 7; i++) {
    console.log(`${numeros[i]}`)
}
*/
/*
for (var i = 0 in numeros) {
    console.log(numeros[i])
}
*/
var posicao = (numeros.indexOf(15))

if (posicao == -1) {
    console.log("VALOR NÃO ENCONTRADO")
}
else {
    console.log(`O numero 5 ta na posição ${posicao} `)
}
