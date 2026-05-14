import prompt from 'prompt-sync'
let ler= prompt ();

console.log('programa da area do retangulo');
console.log();

console.log('insera o valor da base');
let num= Number(ler());

console.log('insera o valor da altura');
let num2= Number(ler());

let num3= num * num2;

console.log('A área do retângulo (' + num + ' p0r ' + num2 + ') é ' + num3);
