import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do retangulo');
console.log();

console.log('insera a base do retangulo');
let base = Number(ler());

console.log('insera a altura do retangulo');
let altura = Number(ler());

let area = base * altura;

console.log('a area do retangulo é ' + area);
