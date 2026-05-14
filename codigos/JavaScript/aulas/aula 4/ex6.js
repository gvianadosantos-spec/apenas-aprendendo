import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DA ÁREA DO RETÂNGULO');
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

console.log('INFORME OUTRO NÚMERO');
 let num2 = Number(ler());

let area= num * num2;

console.log('A área do retângulo ' + '(' + num +' por ' + num2 + ')' + ' é ' + area);