import prompt from 'prompt-sync'
let ler = prompt ();

console.log('VERIFICADOR DE FEBRE');
console.log ();

console.log('Insira sua temperatura');
let a = Number(ler());

let b = 37.5 <= a;
console.log('Você está com febre? ' + b)