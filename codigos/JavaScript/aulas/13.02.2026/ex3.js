import prompt from 'prompt-sync'
let ler= prompt ();

console.log('soma de numero')
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

 console.log('INFORME OUTRO NÚMERO');
 let num2 = Number(ler());
  console.log('INFORME OUTRO NÚMERO');
 let num3 = Number(ler());

 let media= (num + num2 + num3)/3;

 console.log('a media é ' + media)
