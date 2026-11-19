import { StyleSheet, TextInput, TextInputProps } from "react-native";
export function Input ({...rest}:TextInputProps) {
    return <TextInput style = {styles.input} {...rest}/>;
}

const styles =  StyleSheet.create({
    input:{
        width:290,
        height: 48,
        borderWidth:1,
        borderColor:"#dcdcdc",
        borderRadius:8,
        fontSize:16,
        paddingLeft:16,
        paddingRight:16,
        

    }

 })