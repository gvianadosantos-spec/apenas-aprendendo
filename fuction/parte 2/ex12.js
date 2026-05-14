import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do cupom em porcetagem e função');

console.log('insera o valor da compra');
let n1 = Number(ler());
console.log('insera a porcetagem do desconto')
let n2 = Number(ler());

let final = sum(n1, n2);

console.log('Compra finalizada! O total é de R$' + final);

function p(n1, n2){
    let p = n1 / 100;
    let x = p * n2;
    return x;
}

function sum(n1, n2){
    let t = p(n1, n2)
    let x = n1 - t;
    return x;
}