import prompt from 'prompt-sync';
let ler = prompt();

console.log('contador \n digite o numero que deseja começar a contagem');
let n1= Number(ler());

console.log('digite onde deseja terminar a contagem');
let n2= Number(ler());

let teste =n1/2;

if (teste != teste.toFixed(0)){
    n1++;
}

while(n1 <= n2){
    console.log(n1);
    n1++;
    n1++;
}