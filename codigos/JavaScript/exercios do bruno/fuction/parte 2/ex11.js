import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do cupom com função');

console.log('insira o valor da compra')
let preco = Number(ler());
console.log('insera o valor do cupom')
let desconto = Number(ler());

let final = cupom(preco, desconto);

console.log('Compra finalizada! O total é de R$ ' + final)

function cupom(n1, n2){
    let x = n1 - n2;
    return x;
}