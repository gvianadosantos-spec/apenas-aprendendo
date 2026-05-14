import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa da metade com função');
let n1 = Number(ler('digite o número que deseja a metade'));

let r = metade(n1);

console.log('a metade de ' + n1 + ' é ' + r);

function metade(n1){
    let x = n1 / 2;
    return x;
}