import {useState} from "react";
import { Input } from "@/components/input";
import {Button} from "@/components/button";
import {Link} from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Platform, Alert} from "react-native";
export default function HomeScreen() {

    function handleSignIn() {
      // Alert.alert("Entrar", "Função de entrar acionada.");
      console.log(email, password);

      if (!email.trim() || !password.trim()){
        return Alert.alert("Entrar", "Insira os dados de login corretamente"); //primeira virgula é o titulo, segunda é a mensagem
      }

      Alert.alert("Bem-vindo", `Login realizado com ${email}`);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
   <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: "padding", android: "height"})} >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Image source={require("../../assets/f2.png")} style={styles.image} />       
         <Text style={styles.title}>Entrar</Text>
         <Text style = {styles.subtitle}>Acesse sua conta com seu e-mail </Text>
      
        <View style = {styles.form}>

         <Input 
         placeholder="E-mail" 
         keyboardType="email-address" 
         onChangeText={setEmail}
         /> {/*pega o texto e repassa pro console mostrando o conteudo*/}

          <Input placeholder="Senha" 
          secureTextEntry={true}
          onChangeText={setPassword}
          />

          <Button label="Entrar" 
          onPress = {handleSignIn}
          />

            <Text style = {styles.footerText}>Não possui uma conta? <Link href= "./signup" style = {styles.footerLink}> Cadastre-se aqui. </Link></Text>
       

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