import prompt from 'prompt-sync';
let ler = prompt();

console.log('programa do dobro');
console.log();

console.log('insera um número');
let num = Number(ler());

let dobro = num * 2;

console.log('o dobro do número é ' + dobro);