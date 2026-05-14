import prompt from 'prompt-sync'
let ler = prompt();

console.log('fazer um quadrado');

console.log('digite o numero');
let n1 = Number(ler());

for (let linha = 1; linha <= n1; linha++) {

  for (let cont = 1; cont <= n1; cont++) {
    process.stdout.write('*');
  }

  console.log();
}
