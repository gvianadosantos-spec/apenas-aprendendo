import prompt from 'prompt-sync'
let ler= prompt();

console.log("Contador");
console.log('digite até que número deseja ser contado');
let f = Number(ler());
let av=1; 

while(av <= f){
    console.log(f);
    f--;
};