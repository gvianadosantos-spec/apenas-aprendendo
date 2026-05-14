import prompt from 'prompt-sync'
let ler = prompt(); 

console.log('programa para calcular  a média de 3 números com função');

console.log('digite os 3 números que deseja calcular a média');
let n1 = Number(ler());
let n2 = Number(ler());
let n3 = Number(ler());

let r = media3(n1, n2, n3);

console.log('a media é ' + r);

function soma3(n1, n2, n3){
    let x = n1 + n2 + n3;
    return x;
}

function media3(n1, n2, n3){
    let soma = soma3(n1, n2, n3);
    let x = soma / 3;
    return x;
}
