import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DO QUADRADO');
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

let quadrado = num * num;

console.log('A área do quadrado é ' + quadrado)