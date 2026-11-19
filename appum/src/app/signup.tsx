import { Input } from "@/components/input";
import {Button} from "@/components/button";
import {Link} from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from "react-native";
export default function SignUp() {
  return (
   <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height"})} >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={require("../../assets/f1.png")} style={styles.image} />       
         <Text style={styles.title}>Crie sua conta</Text>
         <Text style = {styles.subtitle}>Digite seu e-mail e senha </Text>
      
        <View style = {styles.form}>

         <Input placeholder="Nome"/>   
         <Input placeholder="E-mail" keyboardType="email-address"/>
          <Input placeholder="Senha" secureTextEntry={true}/>
          <Input placeholder="Confirmar Senha" secureTextEntry={true}/>
            <Button label="Cadastrar"/>
         <Text>Já possui uma conta? <Link href= "/" style = {styles.footerLink}> Faça login. </Link> </Text>   
            
        <View>
        </View>

        </View>

      </View>
    </ScrollView>
  </KeyboardAvoidingView> 
  );
  
}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#fdfdfd", 
        padding: 32,
    },
    image: {    
        width: "100%", 
        height: 330, 
        marginTop: 62,
        resizeMode: "contain",
        borderColor:"#fdfdfd",
        borderWidth: 1,
    },
    title:{
        fontSize:32,
        fontWeight:"bold",
    },
    subtitle:{
        fontSize:16,
    },
    form:{
        gap:16,
        marginTop:24,
    },
    footerText:{
        textAlign:"center",
        marginTop:24,
        color:"#585860"
    },
    footerLink:{
        color:"#075481",
        fontWeight:"bold",
    }
    
    })