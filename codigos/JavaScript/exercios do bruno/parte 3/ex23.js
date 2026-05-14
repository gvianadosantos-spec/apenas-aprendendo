import prompt from 'prompt=sync'
let ler = prompt();

console.log('programa para ver se a area do retangulo são iguais');
console.log();

console.log('isera o valor da base do primeiro retangulo');
let base1 = Number(ler());

console.log('insera o valor da altura di prieiro retabgulo');
let altura1 = Number(ler());

console.log('insera o valor da base do segundo retangulo');
let base2 = Number(ler());

console.log('inserao valor da altura do segundo retangulo');
let altura2 = Number(ler());

let area1 = base1 * altura1;
let area2 = base2 * altura2;

if (area1 == area2) {
    console.log('a area do primeiro retangulo é ' + area1);
    console.log('a area do segundo retangulo é ' + area2);
    console.log('as areas dos retangulos sâo iguais');
}
else {
    console.log('a area do primeiro retangulo é ' + area1);
    console.log('a area do segundo retangulo é ' + area2);
    console.log('as areas dos retangulos são diferentes');
}