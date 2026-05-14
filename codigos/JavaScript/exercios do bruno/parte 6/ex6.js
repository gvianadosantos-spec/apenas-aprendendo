import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- LINHA --');

console.log('Informe um número:');
let num = Number(ler());


for (let cont = 1; cont <= num; cont++) {
  process.stdout.write('* ');
}

