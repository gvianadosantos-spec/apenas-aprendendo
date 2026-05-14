import prompt from 'prompt-sync'
let ler = prompt();

console.log('teste para ver se o recorde de um atleta é um recorde mundial ou olimpico');

console.log('digite o recorde do alteta');
let A = Number(ler());

let RM = '';
let RO = '';

console.log('insera o recorde mundial');
let M = Number(ler());

console.log('insera o recorde olimpico');
let O = Number(ler());

console.log(' ');
console.log('');

if (A < M){
    RM = 'RM';
}

else{
    RM = '*';
}

if (A < O){
    RO = 'RO';
}

else{
    RO = '*';
}

if (A <= 1000 && A >= 1 && M <= 1000 && M >= 1 && O <= 1000 && O >= 1){
    console.log(RM);
    console.log(RO);
}

else{
    console.log('insera um valor de 1 a 1000');
}