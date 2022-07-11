function palindromo(string){
    if(!string) return "string inexistente"; //se nao tiver parametro retorna que nao existe

    return string.split("").reverse().join("") === string; //splita a palavra e retorna um array
                                                          //faz um reverse no array
                                                          //une tudo e compara com a string inicialmente passada
}

console.log(palindromo("ovo"));


//outra maneira de fazer a mesma função
function verificaPalindromo(string){
    if(!string) return "frase inexistente"; //se nao tiver parametro retorna que nao existe

    for(let i = 0; i < string.length / 2; i++){ 
        if(string[i] !== string[string.length -1 - i]){
        return false;
        }


    }   
    return true;
}

console.log(verificaPalindromo("ovo"));

