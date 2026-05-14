import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para ver se as bolas estão equilibradas \n');

console.log('insera o peço da bola A \n');
let A = Number(ler());
console.log('insera o peço da bola B \n');
let B = Number(ler());
console.log('insera o peço da bola C \n');
let C = Number(ler());
console.log('insera o peço da bola D \n');
let D= Number(ler());


 let testeC = B;

 let testeD = testeC + C;

 let testeA  = testeD + testeC + B;
 
 let teste = A - testeA;

  let resposta ='';

if(teste == 0){
    resposta = 's'
}
else{
    resposta = 'n'
};

console.log(resposta);
