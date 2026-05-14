import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DO DESCONTO')
console.log();

console.log('INFORME O PREÇO DO PRODUTO');
 let num = Number(ler());

 console.log('INFORME O DESCONTO');
 let num2 = Number(ler());

 let desconto= num - num2;

 console.log('Compra finalizada! O total é de R$ ' + desconto)