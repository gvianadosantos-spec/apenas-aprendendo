import prompt from 'prompt-sync'
let ler = prompt();

console.log('calculadora-projeto simples \n');

console.log('insira o primeiro numero \n');
let num1 = Number(ler());

console.log('insira uma das operações: +, -, *, / \n' );
console.log('digite (**) para calcular a potencia do numero \n');
console.log('digite (%) para calcular a porcetagem')
let operacao = ler();


let resultado;

if(operacao == '-' || operacao == '*' || operacao == '/' || operacao == '+' || operacao == '**' || operacao == '%'){

    console.log('insira o segundo numero \n');
    let num2 = Number(ler());   

    if (operacao == '+'){

         resultado = num1 + num2;
    }
    else if (operacao == '-'){

          resultado = num1 - num2;
    }
    else if (operacao == '*'){

         resultado = num1 * num2;
    }
    else if (operacao == '/'){

        resultado = num1 / num2;
    }
    else if(operacao == '**'){
    resultado = num1 ** num2;
    }
    else if(operacao == '%'){
    resultado = (num1 / 100) * num2;
    }

        console.log('\n' + resultado);
}
else{
    console.log('operação invalida');
}    