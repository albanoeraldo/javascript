let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Na posição 0 e primeiro vetor fica o ${num[0]}`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

/*
let pos = num.indexOf(4) - Nesse caso é um valor que não existe dai vai retornar -1, sempre quando não encontra retorna esse valor, abaixo uma solução: 
 if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

num.sort() - para colocar os vetores em ordem crescente (2, 3,5, 8, 9)

num.push(1) - para colocar o valor sem escolher o elemento
*/