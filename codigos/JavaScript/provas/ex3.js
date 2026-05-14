import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para saber quanto o capitao ganhou numa espedição');
console.log('');

console.log('insera quantas moedas conseguirão');
let moedas = Number(ler());

console.log('insera a quantidade de marinheiros');
let marinheiros = Number(ler());
console.log('');

if( 3 <= moedas &&  moedas <= 10000 &&  1 <= marinheiros && marinheiros <= 1000){
    let capitao = (moedas / (marinheiros + 2)) * 2;
    console.log(capitao.toFixed(0));

}
else {
    console.log('insera entre 3 a 10.000 moedas e entre 1 a 1000 marinheiros');
}