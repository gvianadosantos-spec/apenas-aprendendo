import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para calcular a aréa do retângulo com função');

let n1 = Number(ler('digite a base do retangulo'));
let n2 = Number(ler('digite a altura do retangulo'));

let r = area(n1, n2);

console.log('a área do retangulo é ' + r);

function area(n1, n2){
    let x = n1 * n2;
    return x;
}