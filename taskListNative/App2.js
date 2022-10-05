import React , {useState} from 'react';
import {  StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('Teste nome');

  function handleMudarNome(){
    setNome("Nome foi mudado");

  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text> 
        {/* Duas classes css  */}
      <Text style={[styles.title, styles.text]}>{nome}</Text>  
      {/* <TextInput style={styles.input} placeholder="Digite aqui"/> */}


      {/* botao clicavel */}
      <TouchableOpacity style={styles.button} onPress={handleMudarNome}>
        <Text>Clique!</Text>
      </TouchableOpacity>
    </View>
  );
}

//criando o css
const styles = StyleSheet.create({
  container:{
    flex: 1, //pega a tela inteira
    backgroundColor: '#333',
    paddingTop: 28,
  },
  title:{
    fontSize: 30,
    color: 'white',
    marginTop: 25,
    textAlign: 'center'
  },
  text:{
    fontSize: 15,
    color: 'red',
    marginBottom: 15,
    textAlign: 'center'
  },
  input:{
    backgroundColor: 'white',
    color: '#333',
    morginTop: 15
  },
  button:{
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  }
})

