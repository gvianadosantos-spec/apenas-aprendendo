import prompt from "prompt-sync";
let ler = prompt(); 

console.log('programa da soma com função');

console.log('digite o primeiro numero');
let n1 = Number(ler());

console.log('digite o segundo número');
let n2 = Number(ler());

let r = soma(n1, n2);

console.log('a soma é ' + r);

function soma(a, b){
    let x = a + b;
    return x;
}