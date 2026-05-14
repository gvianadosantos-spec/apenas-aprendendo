import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DO DOBRO');
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

let dobro= num * 2;

console.log('o dobro é ' + dobro)