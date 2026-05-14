import prompt from 'prompt-sync'
let ler = prompt();

console.log('valor final com cupom de desconto');
console.log();

console.log('insera o valor final');
let valor = Number(ler());

console.log('insera o valor do cupom');
let cupom = Number(ler());

let ValorFinal = valor - cupom;

console.log('o valor final é ' + ValorFinal )