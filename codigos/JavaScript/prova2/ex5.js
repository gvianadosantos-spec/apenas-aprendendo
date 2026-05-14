import prompt from 'prompt-sync'
let ler= prompt();

console.log('programa da area');
console.log();

console.log('Insira um número');
let num= Number(ler());

let num2= num * num;

console.log('A area do quadrado é ' + num2);