// Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

// Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

// Output -> [1, 3, 0, 0, 0, 33, 23, 0]

// Input -> []

// Output -> -1


// function substituiNumerosPares(array) {
// 	if (!array.length) return console.log(`Não existe nenhum numero no array! -1`); //verifica se o array tem dado ou nao

// 	const naoZero = (num) => num !== 0;
// 	const numPar = (num) => num % 2 === 0;

// 	for (let i = 0; i < array.length; i++) {
// 		if (numPar(array[i]) && naoZero(array[i])) {
// 			console.log(`trocando ${array[i]} por 0...`);
// 			array[i] = 0;
// 		} else if (!naoZero(array[i])) {
// 			console.log('Ops, você já vale 0!');
// 		}
// 	}
// 	console.log(array);
// }

// substituiNumerosPares([]);



// outra maneira de fazer
function trocaNum(array){
    if(!array) return -1; // se nao existe dado no array retorna -1
    if(!array.length) return -1; //verifica o comprimento do array 

    for(let i = 0; i < array.length; i ++){ 
        if(array[i] === 0 ){
            console.log(`O numero ${array[i]} já é zero`); //se ja tiver numero zero
        }else if(array[i] % 2 === 0){ //calculo pra saber se é par ou nao
            console.log(`Trocando o numero ${array[i]} por 0...`);// se for par troca pra 0
            array[i] = 0;
        }
    }
    return array;
}

let array = [1,2,3,4,5,6,7,8,9];
console.log(trocaNum(array));