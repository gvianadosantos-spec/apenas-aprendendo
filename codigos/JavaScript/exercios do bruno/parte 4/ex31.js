import prompt from'prompt-sync'
let ler= prompt ();

console.log('VENDA DE INGRESSOS');
console.log();

console.log('INFORME QUANTOS INGRESSOS VOCÊ DESEJA COMPRAR?');
let num = Number(ler());

console.log('INFORME INFORME O TIPO DE INGRESSO, INTEIRO OU MEIO?');
let INGRESSO = ler();

if(INGRESSO == 'INTEIRO'){
let valor1= num * 30;
console.log('O VALOR DEU R$' + valor1);
}

else if(INGRESSO == 'MEIO'){
let valor2= num * 30 / 2;
console.log('O VALOR DEU R$' + valor2);
}

else{
console.log('NÃO É UMA DAS OPÇÕES!');
}