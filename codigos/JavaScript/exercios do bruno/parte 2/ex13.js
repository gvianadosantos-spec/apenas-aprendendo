import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa de kilos para gramas');
console.log();

console.log('insera a quantidade de kilos');
let kilos = Number(ler());

let gramas = kilos * 1000;

console.log('a quatidade de gramas é ' + gramas );