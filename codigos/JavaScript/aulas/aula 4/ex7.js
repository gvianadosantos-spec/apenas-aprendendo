import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DA ÁREA DO TRIÂNGULO');
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

console.log('INFORME OUTRO NÚMERO');
 let num2 = Number(ler());

let area= num * num2 / 2;

console.log('A área do triângulo é ' + area)