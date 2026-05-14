import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA CONERTE REAIS PARA DOLARES')
console.log();

console.log('INFORME A QUANTIDADE EM REAL');
 let num = Number(ler());

 let num2 = num / 5.16;

 console.log ('O valor em dolar é ' + num2 )