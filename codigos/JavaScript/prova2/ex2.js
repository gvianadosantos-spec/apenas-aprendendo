import prompt from 'prompt-sync'
let ler= prompt ();

console.log('programa do dobro');
console.log();

console.log('insera um numero');
let num= Number(ler());

let num2= num * 2;

console.log('o dopro de ' + num + ' é ' + num2);