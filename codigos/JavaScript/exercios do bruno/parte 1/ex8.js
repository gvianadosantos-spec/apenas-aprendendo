import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa do octágono');
console.log();

console.log('insera o valor do lado do octágono');
let lado = Number(ler());

let perimetro = 8 * lado;

console.log('o perímetro do octágono é ' + perimetro);