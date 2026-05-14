import prompt from 'prompt-sync'
let ler= prompt ();

console.log('programa da area do triangulo');
console.log();

console.log('insera a altura');
let num= Number(ler());

console.log('insera a base');
let num2= Number(ler());

let num3= num * num2 / 2;

console.log('A área do triângulo é ' + num3);
