import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para calcular o perimetro de um octagono com funçao');

let n1 = Number(ler('digite o valor do lado do octagono'));

let r = octagono(n1);

console.log('o perimetro do octagono é ' + r);

function octagono(n1){
    let x = n1 * 8;
    return x;
}