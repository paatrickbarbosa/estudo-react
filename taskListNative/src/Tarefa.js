import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome} from '@expo/vector-icons';

export default function Tarefa({data, deleteItem }){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={deleteItem}> 
                <FontAwesome name="trash" size={25} color="#333" />
            </TouchableOpacity>
            
            <Text style={styles.text}>{data.item}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'rgba(196,196,196, 0.20) ',
        alignItems: 'center',
        marginTop: 12,
        height: 40,
        paddingStart: 5,
        paddingEnd: 5,
        borderRadius: 5
    },
    text:{
        marginLeft: 10
    }
})