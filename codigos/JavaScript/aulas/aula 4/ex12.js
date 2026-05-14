import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DO DESCONTO')
console.log();

console.log('INFORME O PREÇO DO PRODUTO');
 let num = Number(ler());

 console.log('INFORME O DESCONTO');
 let num2 = Number(ler());

 let num3= (num / 100) * num2

 let desconto= num - num3;

 console.log('Compra finalizada! O total é de R$ ' + desconto)