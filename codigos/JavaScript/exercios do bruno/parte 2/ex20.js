import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa de calcular o salario liquido');
console.log();

console.log('insera o seu salario bruto');
let SalarioBruto = Number(ler());

console.log('insera o valor do bônus que você recebeu em porcetagem');
let bonus = Number(ler());

console.log('insera o desconto do salario em reais');
let desconto = Number(ler());

let SalarioLiquido = SalarioBruto + ((SalarioBruto / 100) * bonus) - desconto;

console.log('o seu salario liquido é R$' + SalarioLiquido);