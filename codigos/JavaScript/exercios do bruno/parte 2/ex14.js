import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa de reias para em dolares');
console.log();

console.log('isenra o valor em reias');
let reais = Number(ler());

let dolar = reais / 5.16;

console.log('o valor em dolares é ' + dolar );