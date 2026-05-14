import prompt from 'prompt-sycnc'
let ler= prompt ();

console.log('programa da soma');
console.log();

console.log('insera um numero');
let num= Number(ler());

console.log('insera outro numero');
let num2= Number(ler());

let num3= num + num2;

console.log('soma de ' + num + ' + ' + num2 + ' = ' + num3);
