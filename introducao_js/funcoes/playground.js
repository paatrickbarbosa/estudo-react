
const alunos = [ //aray com dados dos alunos
    {
        nome: 'Jorge',
        nota: 3,
        turma: '1B',
    },
    {
        nome: 'Luiza',
        nota: 8,
        turma: '1D',
    },
    {
        nome: 'Livia',
        nota: 10,
        turma: '5D',
    },
    {
        nome: 'Patrick',
        nota: 1,
        turma: '5D',
    },
];


function alunosAprovados(arr, media){ //funcao recebendo array e media como parametros

    let aprovados = []; // array auxiliar com os aprovados

    for(let i = 0; i < arr.length; i++){ // percorrendo todo o array

        const {nota,nome} = arr[i]; // constante com somente as propriedades que vamos usar
       if(nota >= media){// condicao se a nota for maior que a média
            aprovados.push(nome); // se for aprovado insere o nome do aluno no array auxiliar
       }else{
        console.log(`Reprovados: ${nome}`); //se nao for aprovado aparece Reprovado e o nome da pessoa
       };
    };

    return `Aprovados: ${aprovados} `; // retorna os aprovados

}


console.log(alunosAprovados(alunos,5)); // passagem dos parametros


//primeira tentativa

// function alunosAprovados(arr, media){ //funcao recebendo array e media como parametros

//     let aprovados = []; // array auxiliar com os aprovados

//     for(let i = 0; i < arr.length; i++){ // percorrendo todo o array
//        if(arr[i].nota >= media){// condicao se a nota for maior que a média
//             aprovados.push(arr[i].nome); // se for aprovado insere o nome do aluno no array auxiliar
//        }else{
//         console.log(`Reprovados: ${arr[i].nome}`); //se nao for aprovado aparece Reprovado e o nome da pessoa
//        };
//     };

//     return `Aprovados: ${aprovados} `; // retorna os aprovados

// }
