import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA dDO PERÍMETRO DO OCTÁGONO');
console.log();

console.log('INFORME UM NÚMERO');
 let num = Number(ler());

let perímetro = num * 8;

console.log('O perímetro do octágono é ' + perímetro)