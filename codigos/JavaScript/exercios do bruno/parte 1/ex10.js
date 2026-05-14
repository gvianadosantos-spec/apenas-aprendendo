import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa da média entre 5 números');
console.log();

console.log('insera o primeiro número');
let num1 = Number(ler());

console.log('insera o segundo número');
let num2 = Number(ler());

console.log('insera o terceiro número');
let num3 = Number(ler());

console.log('insera o quarto número');
let num4 = Number(ler());

console.log('insera o quinto número');
let num5 = Number(ler());

let media = (num1 + num2 + num3 + num4 + num5) / 5;

console.log('a média é ' + media );