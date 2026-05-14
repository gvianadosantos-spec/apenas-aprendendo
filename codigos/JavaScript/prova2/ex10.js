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

console.log('insera outro numero');
let num4= Number(ler());

console.log('insera outro numero');
let num5= Number(ler());

let num6= num + num2 + num3 + num4 + num5 / 5;

console.log('A media é ' +num6 );