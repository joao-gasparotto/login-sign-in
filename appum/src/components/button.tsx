import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label: string;
}
export function Button ({ label,...rest}: ButtonProps) {
    return( 
        <TouchableOpacity style = {styles.container} activeOpacity={0.67} {...rest}>
            <Text style = {styles.label}>{label}</Text>
        </TouchableOpacity>
    ) 
}
 const styles = StyleSheet.create({
        container:{
            width:290,
            height: 48,
            backgroundColor:"#1c82bd",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:8,
            
        },

        label:{
            color:"#fff",
            fontSize:16,
            fontWeight:600,
        }
    })