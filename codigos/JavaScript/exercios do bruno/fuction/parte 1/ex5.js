import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para calcular a aréa de um quadrado');

let n1 = Number(ler('digite o valor do lado do quadrado'));

let r = area(n1);

console.log('a área do quadrado é ' + r);

function area(n1){
    let x = n1 * n1;
    return x;
}