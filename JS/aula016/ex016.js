
function parImpar(numero) { //função 1
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'impar'
    }
    
}

function soma(n1 = 0, n2 = 0) { // função 2
    return n1 + n2
}

let resultado = parImpar(5)
console.log(`${resultado}`)

console.log(soma(5, 5))

let mult = function multiplicação(x) { //função 3
 return x*2
}

console.log(mult(6))

function fatorial(n) { //função 4
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat

}

console.log(fatorial(5))

function fatorialRecursivo(y) { //função 5
    if (y == 1) {
        return 1
    } else {
        return y * fatorialRecursivo(y-1)
    }
}

console.log(fatorialRecursivo(5));