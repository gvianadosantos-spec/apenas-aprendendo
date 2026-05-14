import prompt from 'prompt-sync'
let ler= prompt ();

console.log('soma de numero')
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

 console.log('INFORME OUTRO NÚMERO');
 let num2 = Number(ler());

 let soma= num + num2;
  console.log('o resultado é ' + soma) 