import prompt from 'prompt-sync'
let ler = prompt()

console.log('programa que tranforma dolares em reais');

console.log('insera a aquantidade de dolares');
let d = Number(ler());

let final = reais(d);

console.log(final);

function reais(n1){
    let x = n1 * 5.16
    return x
}