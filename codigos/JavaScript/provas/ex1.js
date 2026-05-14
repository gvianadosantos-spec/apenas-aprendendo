import prompt from 'prompt-sync'
let ler = prompt();

console.log('progrma para indetificar a idade de camila');
console.log('insera a idade das três irmas');

let idade1 = Number(ler());


if( idade1 > 5 && idade1 < 100){
    let idade2 = Number(ler());

    if(idade2 > 5 && idade2 < 100){
        let idade3 = Number(ler());

        if(idade3 > 5 && idade3 < 100){
         
            if(idade1 != idade2 && idade1 != idade3 && idade2 != idade3){
                if (idade1 < idade2 && idade1 > idade3 || idade1 > idade2 && idade1 < idade3){
                console.log('idade da camila é ' + idade1);
              }  
                else if(idade2 < idade1 && idade2 > idade3 || idade2 > idade1 && idade2 < idade3){
                console.log('idade da camila é ' + idade2);
           }
                else{
                console.log('idade da camila é ' + idade3);
               }
            } 
            else{
                console.log('as idades das irmãs não podem ser iguais');
                console.log('insera idades diferentes para cada uma das irmâs');
            }

    }
        else{
            console.log(' a idade da terceira irmã esta muit alto ou baixa demais');
            console.log('isera uma idade netre 5 a 100 anos');
        }
    }

    else{
        console.log(' a idade da segunda irmã esta muito alta ou baixa demais');
        console.log('insera uma idade entre 5 a 100 anos');
    }

}

else{
    console.log('idade da primeira irmã esta muito alta ou baixa');
    console.log('insera uma idade entre 5 a 100 anos');
}