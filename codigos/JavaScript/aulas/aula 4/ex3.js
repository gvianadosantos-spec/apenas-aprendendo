import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DO TRIPLO');
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

let triplo = num * 3;

console.log('o dobro de ' + num + ' é ' + triplo)