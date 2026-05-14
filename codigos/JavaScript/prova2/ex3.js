import prompt from 'prompt-sync'
let ler= prompt ();

console.log('programa do triplo');
console.log();

console.log('insera um numero');
let num= Number(ler());

let num2= num * 3;

console.log('o triplo de ' + num + ' é ' + num2);