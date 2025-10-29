// ---- Condição executa primeiro testa depois ----
var c = 1  
do {
    console.log(`Passo ${c}`)
    c++ // Mesma coisa que c = c + 1
} while (c <= 6) 

/* 
---- Condição testa primeiro executa depois ----
var c = 1  
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++ // Mesma coisa que c = c + 1
}
*/

/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/