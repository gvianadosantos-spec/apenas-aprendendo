import prompt from 'prompt-sync'
let ler= prompt ();

console.log('programa da media');
console.log();

console.log('insera um numero');
let num= Number(ler());

console.log('insera outro numero');
let num2= Number(ler());

console.log('insera outro numero');
let num3= Number(ler());

let num4= num + num2 + num3 / 3;

console.log('A media é ' +num4 );