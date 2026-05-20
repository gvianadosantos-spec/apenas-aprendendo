import prompt from "prompt-sync"
let ler = prompt();

console.log('=================');
console.log('===calculadora===');
console.log('=================');

console.log('=== insera número de acordo com oq deseja ===');

console.log('0. sair')
console.log('1. soma');
console.log('2. subtração');
console.log('3. multiplicação');
console.log('4. divição');

let teste = ler();

let n1 = 0;
let n2 = 0 ;
let final = 0;

while (teste == 1 || teste == 2 || teste == 3 || teste == 4){
    if (n1 == 0 ){
        console.log('=== insira o primeiro número ===');
        n1 = Number(ler());
    }

    if (teste == 1) {
        console.log('=== soma ===');

        console.log('insera o segundo número');
        n2 = Number(ler());

        final = soma(n1, n2)
        
        console.log(n1 + " + " + n2 + " = " + final);
    }
    else if (teste == 2 ) {
        console.log('=== subtração ===');

        console.log('insera o segundo número');
        n2 = Number(ler());

        final = subtracao(n1, n2)

        console.log(n1 + " - " + n2 + " = " + final);
    }
    else if (teste == 3) {
        console.log('=== multiplicação ===');

        console.log('insera o segundo número');
        n2 = Number(ler());

        final = multiplicacao(n1, n2)

        console.log(n1 + " X " + n2 + " = " + final);
    }
    else if (teste == 4) {
        console.log('=== divisão ===');

        console.log('insera o segundo número');
        n2 = Number(ler());

        final = divisao(n1, n2)

        console.log(n1 + " / " + n2 + " = " + final);
    }
    console.log('=== insera número de acordo com oq deseja ===');

    console.log('0. sair')
    console.log('1. soma');
    console.log('2. subtração');
    console.log('3. multiplicação');
    console.log('4. divição');

    teste = Number(ler());
    let teste3 = teste;

    if (teste == 0) {
        console.log('=== desligando..... ===')
    }
    else if (teste3 == 1 || teste3 == 2 || teste3 == 3 || teste3 == 4) {
        console.log('=== deseja manter o resultado anterior? ===');
        console.log('0. não');
        console.log('1. sim');
        let teste2 = Number(ler());

        if (teste2 == 1) {
            n1 = final;
            n2 = 0;
        }
        else {
            n1 = 0;
            n2 = 0;
        }
    }
    else {
        console.log('=== tu é burro? ===');
    }
}

function soma(n1, n2) {
    let x = n1 + n2;
    return x;
}

function subtracao(n1, n2) {
    let x = n1 - n2;
    return x;
}

function multiplicacao(n1, n2) {
    let x = n1 * n2;
    return x;
}

function divisao(n1, n2) {
    let x = n1 / n2;
    return x;
}   