import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do total de uma venda');
console.log();

console.log('insera a quantidade de açaias que você quer comprar');
let quantidade = Number(ler());

let total  = quantidade * 13.5;

console.log('o total deu R$' + total);