import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do triangulo');
console.log();

console.log('insera a base do trinagulo');
let base = Number(ler());

console.log('insera a altura do triangulo');
let altura = number(ler());

let area = (base * altura) / 2;

console.log('a area do tringulo é ' + area);