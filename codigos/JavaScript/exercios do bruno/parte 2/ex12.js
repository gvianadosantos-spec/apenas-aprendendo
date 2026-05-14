import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do desconto por porcentagem de cupom');
console.log();

console.log('insera o valor final');
let valor = Number(ler());

console.log('insera o valor da porcentagem do cupom');
let cupom = Number(ler());

let ValorFinal = valor - ((valor / 100) * cupom);

console.log('o valor final é ' + ValorFinal );