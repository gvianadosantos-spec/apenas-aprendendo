import prompt from 'prompt-sync'
let ler= prompt ();

console.log('PROGRAMA DE CONVERTER ILOS PARA GRAMAS')
console.log();

console.log('INFORME A QUANTIDADE DE KILOS');
 let num = Number(ler()); 

let num2 =  num * 1000;

console.log (num2 + ' gramas')