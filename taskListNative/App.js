import React, { useState } from "react"; //importar react e useState
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native"; //importar os componentes que serao usados 
import { FontAwesome } from "@expo/vector-icons"; //importar icones
import Tarefa from "./src/Tarefa"; //import para usar o componente

export default function App() {
  const [tarefa, setTarefa] = useState(""); //pegar o que foi inputado pelo usuario
  const [list, setList] = useState([]); //criar lista com os dados em forma de array

  //funcção adionar tarefa
  function handleAdd() {
    if (tarefa === "") { //caso esteja vazio nao será adicionado
      return;
    }

    // variavel que recebe os o input e recebe um id
    const dados = {
      key: Date.now(),
      item: tarefa,
    };

    //array antigo recebendo novos dados
    setList((oldArray) => [dados, ...oldArray]);
    setTarefa(""); //limpando o campo de input
  }

  //função delete tarefa
  function handleDelete(item) { 
    let filtroItem = list.filter((tarefa) => { //filtra o array e retorna todos que são diferentes da qual tarefa foi clicada
      return tarefa.item !== item;
    });

    setList(filtroItem); //seta a lista nova sem o item excluido
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.containerInput}>
        <TextInput
          placeholder="Type your task"
          style={styles.input}
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <FontAwesome name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        key={(item) => item.key}
        renderItem={({ item }) => (
          <Tarefa data={item} deleteItem={() => handleDelete(item.item)} />
        )}
        style={styles.list}
      />
    </View>
  );
}

//criando o css
const styles = StyleSheet.create({
  container: {
    flex: 1, //pega a tela inteira
    backgroundColor: "#333",
    paddingTop: 28,
  },
  title: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  containerInput: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },
  input: {
    width: "75%",
    backgroundColor: "white",
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#73f7ff",
    width: "15%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    borderRadius: 5,
  },
  containerLista: {
    backgroundColor: "white",
    marginTop: 25,
    height: "100%",
  },
  list: {
    flex: 1,
    backgroundColor: "white",
    paddingStart: "4%",
    paddingEnd: "4%",
  },
});
