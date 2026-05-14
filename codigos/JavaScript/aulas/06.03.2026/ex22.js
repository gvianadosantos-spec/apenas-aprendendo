import prompt from 'prompt-sync'
let ler = prompt ();

console.log('VERIFICAÇÃO DE MÉDIA');
console.log ();

console.log('insira as notas');
let a = Number(ler());

let b = Number(ler());

let c = Number(ler());

let d = (a + b + c) / 3;

let e = d >= 6;
console.log('A média do aluno é ' + d);
console.log('O aluno passou? ' + e)