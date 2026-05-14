import prompt from 'prompt-sync'
let ler =  prompt();

console.log('programa para calcular se o aluno passou');
console.log();

console.log('digite as notas do aluno');
let nota1 = Number(ler());
let nota2 = Number(ler());
let nota3 = Number(ler());

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    console.log('a media do aluno é ' + media);
    console.log('o aluno passou');

}
else {
    console.log('a media do aluno é ' + media);
    console.log('o aluno reprovou');
}