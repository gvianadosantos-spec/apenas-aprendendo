import prompt from 'prompt-sync'
let ler = prompt();

console.log('programa para calcular quantidade de paradas necessárias para uma viagem');
console.log();

console.log('insera a distancia da viagem em km');
let distancia = Number(ler());

console.log('insera a autonomia do carro em km por litro');
let autonomia = Number(ler());

console.log('insera a capacidade do tanque em litros');
let tanque = Number(ler());

let DistanciaMaxima = autonomia * tanque;
let paradas = distancia / DistanciaMaxima;
let paradas1 = distancia % DistanciaMaxima;
let paradas2 = paradas.toFixed(0);

if (paradas == 0) {

    paradas ++;

    console.log('a quantidade de paradas necessárias para a viagem é ' + paradas );
}

else {
    paradas2 ++;
    console.log('a quantidade de paradas necessárias para a viagem é ' + paradas2 );
}