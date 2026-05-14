import promt from 'prompt-sync';
let ler = prompt();

console.log('programa da média entre 3 números');
console.log();

console.log('insera o primeiro número');
let num1 = Number(ler());

console.log('insera o segundo número');
let num2  =  Number(ler());
 
console.log('insera o terceiro número');
let num3 = Number(ler());

let media = (num1 + num2 + num3 ) / 3;

console.log('a média entre os números é ' + media);