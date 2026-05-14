import prompt from 'prompt-sync';
let ler = prompt();

console.log('tabuada');

console.log('digite o número que deseja a tabuada');
let n1 = Number(ler());

let teste = 0;

while (teste <= 10){
    let resultado = n1 * teste;
    console.log(`${n1} x ${teste} = ${resultado}`);
    teste++;
} 
