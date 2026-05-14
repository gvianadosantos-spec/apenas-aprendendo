import prompt from 'prompt-sync';
let ler = prompt();

console.log ('desenhar');

console.log('digite a largura');
let largura = Number(ler());

console.log('digite a altura');
let altura = Number(ler());

let teste = 1;
let teste2 = 1;

while(teste <= altura){

    while(teste2 <= largura){
        process.stdout.write('*');
        teste2++;
    }

    console.log('');
    teste++;
    teste2 = 1;
}

console.log('fim');