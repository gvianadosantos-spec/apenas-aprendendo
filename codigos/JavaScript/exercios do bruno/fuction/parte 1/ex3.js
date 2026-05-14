import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do triplo com função');

console.log('digite  o numero que deseja o triplo');
let n1 = Number(ler());

let r = triplo(n1);

console.log('o triplo de ' + n1 + ' é ' + r);

function triplo(n1){
    let x = n1 * 3;
    return x;
}