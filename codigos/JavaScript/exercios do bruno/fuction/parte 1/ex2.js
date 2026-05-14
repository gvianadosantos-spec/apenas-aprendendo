import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do dobro com função');

console.log('digite o número que deseja o dobro');
let n1 = Number(ler());

let r = dobro(n1);

console.log('o dobro de ' + n1 + ' é ' + r );

function dobro(n1){
    let x = n1 * 2;
    return x;
}