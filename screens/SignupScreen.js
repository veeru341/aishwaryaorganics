import React from "react";
import { View, Text, TextInput, StyleSheet, Button, Dimensions, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';


export default function SignupScreen({navigation}){
    return(
       <View style={styles.container}>
            <Animatable.View animation="fadeInRight" style={styles.header}>
                <Text style={styles.header_text}>Register Now</Text>
            </Animatable.View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <TextInput style={styles.textInput} placeholder="Your Email" autoCapitalize="none" />
                </View>
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                    <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Your Password" />
                </View>
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                    <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Your Password Again" />
                </View>
                <View>
                    <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Products")}>
                        <Text style={styles.logintext}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387",
    },
    header: {
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex:3,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    header_text: {
        color:"#fff",
        fontWeight:"bold",
        fontSize:30
    },
    action: {
        marginTop:10,
        borderBottomWidth: 2,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 2
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 5
    },
    textInput: {
        color:"black",
        fontSize: 18,
    },
    login: {
        width: 300,
        height:50,
        backgroundColor:"#009387",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 30,
    },
    logintext: {
        color: "white",
        fontSize: 20,
        fontWeight:"bold"
    }
})