import prompt from 'prompt-sync'
let ler= prompt();

console.log('programa da metade');
console.log();

console.log('Insira um número');
let num= Number(ler());

let num2= num / 2;

console.log('A metade de ' + num + ' é ' + num2);