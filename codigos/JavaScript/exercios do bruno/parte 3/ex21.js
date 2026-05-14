import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa  para confirir se você esta com febre ou não');
console;log();

console.log('digite a temperatura do seu corpo');
let temperatura = Number(ler());

if (temperatura >= 37.5) {

    console.log('você esta com febre');
}
else {
    console.log('você não esta com febre');
}