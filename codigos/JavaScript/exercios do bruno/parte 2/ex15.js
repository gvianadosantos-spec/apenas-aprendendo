import promt from 'prompt-sync'
let ler = prompt();

console.log('programa da parcela');
console.log();

console.log('insira o valor do produto');
let valor = Number(ler());

console.log('insera a qauntidade de parcelas');
let parcelas = Number(ler());

let ValorParcela = valor / parcelas;

console.log('sua compra de R$' + valor + ' em X' + parcelas + 'de R$' + ValorParcela + ' foi concluida');
