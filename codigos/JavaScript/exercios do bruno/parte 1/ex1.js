import prompt from 'prompt-sync'
let ler = prompt();

console.log("PROGRAMA DA SOMA DE DOIS NÚMEROS");
console.log();

console.log('insera o primeiro numero');
let num1 = Number(ler());

console.log('insera o segundo número');
let num2 = Number(ler());

let soma = num1 + num2;

console.log('a soma dos números é ' + soma);