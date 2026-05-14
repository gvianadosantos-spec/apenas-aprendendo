import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DAS PARCELAS')
console.log();

console.log('INFORME O VALOR DO PRODUTO');
 let num = Number(ler());

 console.log('INFORME A QAUNTIDADE DE VEZES QUE IRA PARCELAR')
 let num2 = Number(ler());

 let num3 = num / num2;

 console.log('Sua compra de R$ ' + num + 'em x' + num2 + ' de R$ ' + num3 + " foi concluída.");