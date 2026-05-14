import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DA METADE');
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

let metade= num / 2;

console.log('A metade de ' + num + ' é ' +  metade)