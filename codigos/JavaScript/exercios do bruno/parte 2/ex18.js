import prompt  from 'prompt-sync'
let ler = prompt();

console.log('programa da venda de açaias');
console.log();

console.log('cada açai pequeno custa 13.5 reais');
console.log('cada açai medio custa 15.0 reais');
console.log('cada açai grande custa 17.5 reais');

console.log('insera a quantidade açais pequenos que você deseja comprar ');
console.log('insera 0 caso não deseja comprar nemhum açai pequeno');
let pequeno = Number(ler());

console.log('insera a quantidade de açais médios que você deseja comprar');
console.log('insera 0 caso não deseja comprar nenhum açai médio');
let media = Number(ler());

console.log('insera a quantidade de açais grandes que você deseja comprar');
console.log('isera 0 caso não deseja comprar nenhum açai grande');
let grande = Number(ler());

let total = (pequeno * 13.5) + (media * 15.0) + (grande * 17.5);

console.log('o total da sua compra deu R$' + total);
