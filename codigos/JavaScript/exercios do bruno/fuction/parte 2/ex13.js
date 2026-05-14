import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para transforma kilos em gramas');

console.log('insera a aquantidade de kilos')
let kilos = Number(ler());

let final = gramas(kilos);

console.log(final);

function gramas(n1){
    let x = n1 * 1000;
    return x;
} 