import React from 'react';
import {Link} from 'expo-router'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Image, } from 'react-native';
export default function App() {

    return(
        <View style = {styles.container}>
            <Text style = {styles.textHeader}>Começe a organizar suas tarefas</Text>
             <Image source={require("../../assets/index.png")} style={styles.image} />
        </View>
    )
   

}
 const styles = StyleSheet.create({
        container:{
            backgroundColor: '#353535',
            flex: 1,
            paddingTop: 20,
        },

        textHeader:{
            color: '#fff',
            fontSize: 19,
            fontWeight: 'bold',
            paddingTop:30,
            textAlign: 'center',

        },
        image:{
            width:"100%",
            height:200,

        },
    })