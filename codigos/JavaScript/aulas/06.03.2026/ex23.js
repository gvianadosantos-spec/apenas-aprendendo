import prompt from 'prompt-sync'
let ler = prompt ();

console.log('COMPARAR A ÁREA DOS RETÂNGULOS');
console.log ();

console.log('Insira o valor da altura do primeiro retângulo');
let a = Number(ler());

console.log('Insira o valor da largura do primeiro retângulo');
let b = Number(ler());

console.log('Insira o valor da altura do segundo retângulo');
let c = Number(ler());

console.log('Insira o valor da largura do segundo retângulo');
let d = Number(ler());

let e = a * b;
let f = c * d;

let g = e == f;

console.log('O primeiro retângulo possui área ' + e);
console.log('O segundo rentângulo possui área ' + f);
console.log('Eles são iguais? ' + g);   