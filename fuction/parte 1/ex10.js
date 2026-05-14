import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para calcular a média de 5  números com função');

console.log('digite os 5 números que deseja calcular a média');
let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());
let n4 = Number(ler());
let n5 = Number(ler());

let r = media5(n1, n2, n3, n4, n5);

console.log('a media é ' + r);

function soma5(n1, n2, n3, n4, n5){
    let x = n1 + n2 + n3 + n4 + n5;
    return x;
}

function media5(n1, n2, n3, n4, n5){
    let soma = soma5(n1, n2, n3, n4, n5);
    let x = soma / 5;
    return x;
}
