
const pessoa = { //objeto criado
    nome: 'Patrick',
    idade: 27
};



function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${ //this se refere ao objeto pessoa
		this.idade + anos
	} anos de idade.`;
}

//quando usa o this tem que usar os metodos call e apply
console.log(calculaIdade.call(pessoa, 2));
console.log(calculaIdade.apply(pessoa, [2])); //usando o apply precisa usar colchetes