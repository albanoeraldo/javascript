let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
// mais simplificada ainda
for(let pos in valores) { // Como vamos ler: Para cada posição dentro de 'valores' vou mostrar o 'valores[pos]'.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/* 
Maneira simplificada
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

Maneira burra de fazer
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/