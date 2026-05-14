import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para calcular a aréa de um triângulo com função');

let n1 = Number(ler('digite a base do triângulo'));
let n2 = Number(ler('digite a altura do triângulo'));

let r = area(n1, n2);

console.log('a area do triângulo é ' + r);

function area(n1, n2){
    let x = (n1 * n2) / 2;
    return x;
}